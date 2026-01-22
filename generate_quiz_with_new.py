#!/usr/bin/env python3
"""
Script to manage the new 20 questions from Bankenaufsichtsrecht
"""
import json

def create_standalone_quiz():
    """Create a standalone quiz with only the new 20 questions"""
    # Read new questions
    with open('pruefungsfragen_neu_20.json', 'r', encoding='utf-8') as f:
        new_questions = json.load(f)
    
    print(f"Standalone Quiz: {len(new_questions)} neue Fragen")
    
    # Generate JavaScript content
    js_content = """// Neue 20 Fragen - Bankenaufsichtsrecht für die Praxis
const QUIZ_QUESTIONS = """
    
    js_content += json.dumps(new_questions, ensure_ascii=False, indent=2)
    js_content += """;

// Quiz Application Class
class MultipleChoiceQuiz {
    constructor() {
        this.questions = QUIZ_QUESTIONS;
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.userAnswers = [];

        this.initEventListeners();
    }

    initEventListeners() {
        // Start Quiz Button
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // Submit Answer Button
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.checkAnswer();
        });

        // Next Question Button
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Restart Quiz Button
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        // Enter key to submit answer
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const submitBtn = document.getElementById('submit-answer-btn');
                const nextBtn = document.getElementById('next-question-btn');
                
                if (submitBtn.style.display !== 'none' && !submitBtn.disabled) {
                    submitBtn.click();
                } else if (!nextBtn.parentElement.parentElement.classList.contains('hidden')) {
                    nextBtn.click();
                }
            }
        });
    }

    startQuiz() {
        const questionCount = parseInt(document.getElementById('question-count').value);
        
        if (questionCount < 1 || questionCount > this.questions.length) {
            alert(`Bitte geben Sie eine Zahl zwischen 1 und ${this.questions.length} ein.`);
            return;
        }

        this.totalQuestions = questionCount;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];

        // Select random questions
        this.selectedQuestions = this.getRandomQuestions(questionCount);

        // Update UI
        document.getElementById('total-questions').textContent = this.totalQuestions;
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    getRandomQuestions(count) {
        const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;

        // Display question
        document.getElementById('question-text').textContent = question.question;

        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `option-${index}`;
            checkbox.name = 'answer';
            checkbox.value = index;
            
            const label = document.createElement('label');
            label.htmlFor = `option-${index}`;
            label.textContent = option;

            optionDiv.appendChild(checkbox);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);

            // Enable submit button when any option is selected
            checkbox.addEventListener('change', () => {
                const anyChecked = document.querySelectorAll('input[name="answer"]:checked').length > 0;
                document.getElementById('submit-answer-btn').disabled = !anyChecked;
            });
        });

        // Reset feedback
        document.getElementById('answer-feedback').classList.add('hidden');
        document.getElementById('submit-answer-btn').disabled = true;
    }

    checkAnswer() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
            .map(input => parseInt(input.value));

        const correctAnswers = question.correct_indices;
        
        // Check if answer is correct
        const isCorrect = this.arraysEqual(selectedOptions.sort(), correctAnswers.sort());

        // Save user answer
        this.userAnswers.push({
            question: question,
            userAnswers: selectedOptions,
            correctAnswers: correctAnswers,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            this.score++;
        }

        // Show feedback and highlight correct/incorrect answers
        this.showFeedback(isCorrect, correctAnswers, selectedOptions);
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    showFeedback(isCorrect, correctAnswers, selectedOptions) {
        // Highlight options
        document.querySelectorAll('.option').forEach((optionDiv, index) => {
            const checkbox = optionDiv.querySelector('input');
            
            if (correctAnswers.includes(index)) {
                optionDiv.classList.add('correct');
            } else if (selectedOptions.includes(index)) {
                optionDiv.classList.add('incorrect');
            }
            
            checkbox.disabled = true;
        });

        // Show feedback message
        const feedback = document.getElementById('answer-feedback');
        const feedbackText = document.getElementById('feedback-text');
        
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedbackText.innerHTML = '<h3>Richtig! ✓</h3><p>Ihre Antwort ist korrekt.</p>';
        } else {
            feedback.className = 'feedback incorrect';
            feedbackText.innerHTML = '<h3>Falsch! ✗</h3><p>Die richtige(n) Antwort(en) sind markiert.</p>';
        }

        feedback.classList.remove('hidden');
        document.getElementById('submit-answer-btn').style.display = 'none';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.totalQuestions) {
            this.displayQuestion();
            document.getElementById('submit-answer-btn').style.display = 'inline-block';
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        const passed = percentage >= 60;

        // Update score display
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('total-count').textContent = this.totalQuestions;

        // Update score circle
        const scoreCircle = document.getElementById('score-circle');
        scoreCircle.style.setProperty('--percentage', `${percentage * 3.6}deg`);
        scoreCircle.className = `score-circle ${passed ? 'passed' : 'failed'}`;

        // Update result status
        const resultStatus = document.getElementById('result-status');
        if (passed) {
            resultStatus.textContent = 'Bestanden! 🎉';
            resultStatus.className = 'result-status passed';
        } else {
            resultStatus.textContent = 'Nicht bestanden 😞';
            resultStatus.className = 'result-status failed';
        }

        // Show wrong answers
        this.displayWrongAnswers();

        this.showScreen('results-screen');
    }

    displayWrongAnswers() {
        const wrongAnswersList = document.getElementById('wrong-answers-list');
        const wrongAnswers = this.userAnswers.filter(answer => !answer.isCorrect);

        if (wrongAnswers.length === 0) {
            wrongAnswersList.innerHTML = '<p style="color: #48bb78; text-align: center;">Alle Antworten waren richtig! 🎉</p>';
            return;
        }

        wrongAnswersList.innerHTML = '';

        wrongAnswers.forEach((answer, index) => {
            const wrongAnswerDiv = document.createElement('div');
            wrongAnswerDiv.className = 'wrong-answer-item';

            const question = answer.question;
            const userAnswerTexts = answer.userAnswers.map(i => question.options[i]).join(', ');
            const correctAnswerTexts = answer.correctAnswers.map(i => question.options[i]).join(', ');

            wrongAnswerDiv.innerHTML = `
                <div class="wrong-answer-question">${question.question}</div>
                <div class="wrong-answer-details">
                    <p class="your-answer"><strong>Ihre Antwort:</strong> ${userAnswerTexts}</p>
                    <p class="correct-answer"><strong>Richtige Antwort:</strong> ${correctAnswerTexts}</p>
                </div>
            `;

            wrongAnswersList.appendChild(wrongAnswerDiv);
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');
    }

    restartQuiz() {
        this.showScreen('start-screen');
        // Reset form
        document.getElementById('question-count').value = '10';
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MultipleChoiceQuiz();
});
"""
    
    # Write JavaScript file
    with open('script-neu-20.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"✓ script-neu-20.js erstellt!")
    return len(new_questions)

def create_combined_quiz():
    """Create a combined quiz with RBM3 + RBM4 + new 20 questions"""
    # Read RBM3 questions
    with open('pruefungsfragen_RBM3.json', 'r', encoding='utf-8') as f:
        rbm3_questions = json.load(f)
    
    # Read RBM4 questions
    with open('pruefungsfragen_RBM4.json', 'r', encoding='utf-8') as f:
        rbm4_questions = json.load(f)
    
    # Read new questions
    with open('pruefungsfragen_neu_20.json', 'r', encoding='utf-8') as f:
        new_questions = json.load(f)
    
    # Filter out empty questions
    rbm4_questions = [q for q in rbm4_questions if q.get('options') and len(q['options']) > 0]
    
    # Combine all questions
    all_questions = rbm3_questions + rbm4_questions + new_questions
    
    print(f"\nKombiniertes Quiz:")
    print(f"  RBM3: {len(rbm3_questions)} Fragen")
    print(f"  RBM4: {len(rbm4_questions)} Fragen")
    print(f"  NEU:  {len(new_questions)} Fragen")
    print(f"  ─────────────────────────")
    print(f"  Gesamt: {len(all_questions)} Fragen")
    
    # Generate JavaScript content (same structure as standalone)
    js_content = f"""// Kombiniertes Quiz: RBM3 ({len(rbm3_questions)}) + RBM4 ({len(rbm4_questions)}) + NEU ({len(new_questions)}) = {len(all_questions)} Fragen
const QUIZ_QUESTIONS = """
    
    js_content += json.dumps(all_questions, ensure_ascii=False, indent=2)
    
    # Add the same quiz logic as standalone
    js_content += """;

// Quiz Application Class
class MultipleChoiceQuiz {
    constructor() {
        this.questions = QUIZ_QUESTIONS;
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.userAnswers = [];

        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.checkAnswer();
        });
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const submitBtn = document.getElementById('submit-answer-btn');
                const nextBtn = document.getElementById('next-question-btn');
                if (submitBtn.style.display !== 'none' && !submitBtn.disabled) {
                    submitBtn.click();
                } else if (!nextBtn.parentElement.parentElement.classList.contains('hidden')) {
                    nextBtn.click();
                }
            }
        });
    }

    startQuiz() {
        const questionCount = parseInt(document.getElementById('question-count').value);
        if (questionCount < 1 || questionCount > this.questions.length) {
            alert(`Bitte geben Sie eine Zahl zwischen 1 und ${this.questions.length} ein.`);
            return;
        }
        this.totalQuestions = questionCount;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectedQuestions = this.getRandomQuestions(questionCount);
        document.getElementById('total-questions').textContent = this.totalQuestions;
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    getRandomQuestions(count) {
        const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    displayQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('question-text').textContent = question.question;
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `option-${index}`;
            checkbox.name = 'answer';
            checkbox.value = index;
            const label = document.createElement('label');
            label.htmlFor = `option-${index}`;
            label.textContent = option;
            optionDiv.appendChild(checkbox);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
            checkbox.addEventListener('change', () => {
                const anyChecked = document.querySelectorAll('input[name="answer"]:checked').length > 0;
                document.getElementById('submit-answer-btn').disabled = !anyChecked;
            });
        });
        document.getElementById('answer-feedback').classList.add('hidden');
        document.getElementById('submit-answer-btn').disabled = true;
    }

    checkAnswer() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
            .map(input => parseInt(input.value));
        const correctAnswers = question.correct_indices;
        const isCorrect = this.arraysEqual(selectedOptions.sort(), correctAnswers.sort());
        this.userAnswers.push({
            question: question,
            userAnswers: selectedOptions,
            correctAnswers: correctAnswers,
            isCorrect: isCorrect
        });
        if (isCorrect) {
            this.score++;
        }
        this.showFeedback(isCorrect, correctAnswers, selectedOptions);
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    showFeedback(isCorrect, correctAnswers, selectedOptions) {
        document.querySelectorAll('.option').forEach((optionDiv, index) => {
            const checkbox = optionDiv.querySelector('input');
            if (correctAnswers.includes(index)) {
                optionDiv.classList.add('correct');
            } else if (selectedOptions.includes(index)) {
                optionDiv.classList.add('incorrect');
            }
            checkbox.disabled = true;
        });
        const feedback = document.getElementById('answer-feedback');
        const feedbackText = document.getElementById('feedback-text');
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedbackText.innerHTML = '<h3>Richtig! ✓</h3><p>Ihre Antwort ist korrekt.</p>';
        } else {
            feedback.className = 'feedback incorrect';
            feedbackText.innerHTML = '<h3>Falsch! ✗</h3><p>Die richtige(n) Antwort(en) sind markiert.</p>';
        }
        feedback.classList.remove('hidden');
        document.getElementById('submit-answer-btn').style.display = 'none';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.totalQuestions) {
            this.displayQuestion();
            document.getElementById('submit-answer-btn').style.display = 'inline-block';
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        const passed = percentage >= 60;
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('total-count').textContent = this.totalQuestions;
        const scoreCircle = document.getElementById('score-circle');
        scoreCircle.style.setProperty('--percentage', `${percentage * 3.6}deg`);
        scoreCircle.className = `score-circle ${passed ? 'passed' : 'failed'}`;
        const resultStatus = document.getElementById('result-status');
        if (passed) {
            resultStatus.textContent = 'Bestanden! 🎉';
            resultStatus.className = 'result-status passed';
        } else {
            resultStatus.textContent = 'Nicht bestanden 😞';
            resultStatus.className = 'result-status failed';
        }
        this.displayWrongAnswers();
        this.showScreen('results-screen');
    }

    displayWrongAnswers() {
        const wrongAnswersList = document.getElementById('wrong-answers-list');
        const wrongAnswers = this.userAnswers.filter(answer => !answer.isCorrect);
        if (wrongAnswers.length === 0) {
            wrongAnswersList.innerHTML = '<p style="color: #48bb78; text-align: center;">Alle Antworten waren richtig! 🎉</p>';
            return;
        }
        wrongAnswersList.innerHTML = '';
        wrongAnswers.forEach((answer, index) => {
            const wrongAnswerDiv = document.createElement('div');
            wrongAnswerDiv.className = 'wrong-answer-item';
            const question = answer.question;
            const userAnswerTexts = answer.userAnswers.map(i => question.options[i]).join(', ');
            const correctAnswerTexts = answer.correctAnswers.map(i => question.options[i]).join(', ');
            wrongAnswerDiv.innerHTML = `
                <div class="wrong-answer-question">${question.question}</div>
                <div class="wrong-answer-details">
                    <p class="your-answer"><strong>Ihre Antwort:</strong> ${userAnswerTexts}</p>
                    <p class="correct-answer"><strong>Richtige Antwort:</strong> ${correctAnswerTexts}</p>
                </div>
            `;
            wrongAnswersList.appendChild(wrongAnswerDiv);
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    restartQuiz() {
        this.showScreen('start-screen');
        document.getElementById('question-count').value = '10';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MultipleChoiceQuiz();
});
"""
    
    # Write JavaScript file
    with open('script-alle-72.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\n✓ script-alle-72.js erstellt!")
    return len(all_questions)

if __name__ == "__main__":
    print("=" * 50)
    print("Quiz Generator für neue Fragen")
    print("=" * 50)
    
    # Create standalone quiz
    print("\n1. Eigenständiges Quiz (nur neue 20 Fragen):")
    standalone_count = create_standalone_quiz()
    
    # Create combined quiz
    combined_count = create_combined_quiz()
    
    print("\n" + "=" * 50)
    print("✅ Fertig!")
    print("=" * 50)
