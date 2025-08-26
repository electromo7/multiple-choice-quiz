// Fragen direkt als JavaScript-Array eingebettet für GitHub Pages Kompatibilität
const QUIZ_QUESTIONS = [
  {
    "question": "1. Welche Kennzahlen aus ihrem internen und externen Rechnungswesen verwenden Sie, um den Erfolg im Kundengeschäft zu messen und mit anderen Banken zu vergleichen?",
    "options": [
      "a. CET1-Ratio",
      "b. Ausleihungsquote",
      "c. MuM",
      "d. Kundengeschäftsvolumen (KGV)"
    ],
    "correct_indices": [1, 2, 3]
  },
  {
    "question": "2. Auf welche Faktoren legt die Gesamtbanksteuerung laut betriebswirtschaftlicher Definition ein besonderes Augenmerk?",
    "options": [
      "a. Personal",
      "b. Liquidität",
      "c. Dichte des Filialnetzes",
      "d. Eigenkapital"
    ],
    "correct_indices": [1, 3]
  },
  {
    "question": "3. Entsprechend der Systematisierung der Risiken nach ICAAP sind zur Kategorie der Kreditrisiken die folgenden Teilrisiken zu erfassen:",
    "options": [
      "a. Migrations- und Ausfallsrisiko",
      "b. Beteiligungsrisiko",
      "c. Länder- und Transferrisiko",
      "d. Kreditkonzentrationsrisiko"
    ],
    "correct_indices": [0, 1, 2, 3]
  }
  // Hier würden alle Ihre Fragen stehen - ich zeige nur die ersten 3 als Beispiel
];

class MultipleChoiceQuiz {
    constructor() {
        this.questions = QUIZ_QUESTIONS; // Verwende die eingebetteten Fragen
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.totalQuestions = 0;
        this.selectedAnswers = [];
        this.score = 0;
        
        this.initializeEventListeners();
        console.log(`${this.questions.length} Fragen geladen`);
    }

    initializeEventListeners() {
        // Start Quiz Button
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // Submit Answer Button
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.submitAnswer();
        });

        // Next Question Button
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Restart Quiz Button
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartQuiz();
        });
    }

    startQuiz() {
        const questionCount = parseInt(document.getElementById('question-count').value);
        
        if (questionCount < 1 || questionCount > this.questions.length) {
            alert(`Bitte wählen Sie eine Zahl zwischen 1 und ${this.questions.length}`);
            return;
        }

        this.totalQuestions = questionCount;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;

        // Fragen zufällig auswählen
        this.selectedQuestions = this.shuffleArray([...this.questions]).slice(0, questionCount);

        document.getElementById('total-questions').textContent = questionCount;
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
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
            // Skip options that look like references (e.g., "Siehe Seite...")
            if (option.toLowerCase().includes('siehe seite')) {
                return;
            }

            const optionElement = document.createElement('label');
            optionElement.className = 'option';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'option';
            checkbox.value = index;
            checkbox.addEventListener('change', () => this.updateSubmitButton());

            optionElement.appendChild(checkbox);
            optionElement.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(optionElement);
        });

        // Reset UI state
        document.getElementById('submit-answer-btn').disabled = true;
        document.getElementById('answer-feedback').classList.add('hidden');
        this.selectedAnswers = [];
    }

    updateSubmitButton() {
        const checkboxes = document.querySelectorAll('input[name="option"]:checked');
        document.getElementById('submit-answer-btn').disabled = checkboxes.length === 0;
    }

    submitAnswer() {
        const checkboxes = document.querySelectorAll('input[name="option"]:checked');
        this.selectedAnswers = Array.from(checkboxes).map(cb => parseInt(cb.value));

        const question = this.selectedQuestions[this.currentQuestionIndex];
        const correctAnswers = question.correct_indices;

        // Check if answer is correct
        const isCorrect = this.arraysEqual(
            this.selectedAnswers.sort(),
            correctAnswers.sort()
        );

        if (isCorrect) {
            this.score++;
        }

        // Store user answer
        this.userAnswers.push({
            question: question,
            userAnswers: [...this.selectedAnswers],
            correctAnswers: [...correctAnswers],
            isCorrect: isCorrect
        });

        this.showAnswerFeedback(isCorrect, correctAnswers);
    }

    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((val, index) => val === arr2[index]);
    }

    showAnswerFeedback(isCorrect, correctAnswers) {
        // Disable all options and show correct/incorrect styling
        const options = document.querySelectorAll('.option');
        const checkboxes = document.querySelectorAll('input[name="option"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
            const optionIndex = parseInt(checkbox.value);
            const optionElement = checkbox.parentElement;
            
            if (correctAnswers.includes(optionIndex)) {
                optionElement.classList.add('correct');
            } else if (this.selectedAnswers.includes(optionIndex)) {
                optionElement.classList.add('incorrect');
            }
            
            optionElement.classList.add('disabled');
        });

        // Show feedback
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
