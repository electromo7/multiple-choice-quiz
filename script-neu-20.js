// Neue 20 Fragen - Bankenaufsichtsrecht für die Praxis
const QUIZ_QUESTIONS = [
  {
    "question": "Was ist der Hauptgrund für die Schaffung einer besonderen Bankenaufsicht?",
    "options": [
      "a. Um die Gewinne der Banken zu maximieren",
      "b. Um Vertrauens- und Liquiditätskrisen zu vermeiden und die Finanzmarktstabilität zu gewährleisten",
      "c. Um die Zinsen für Kunden zu kontrollieren",
      "d. Um den Wettbewerb zwischen Banken zu fördern"
    ],
    "correct_indices": [
      1
    ]
  },
  {
    "question": "Welche Aussagen zur Zusammenarbeit zwischen FMA, EZB und OeNB sind korrekt?",
    "options": [
      "a. Die FMA ist für kleinere Institute (LSIs) unmittelbar zuständig",
      "b. Die EZB ist für bedeutende Kreditinstitute (SIs) ab 30 Mrd. € Bilanzsumme unmittelbar zuständig",
      "c. Die OeNB unterstützt FMA und EZB bei Vor-Ort-Prüfungen",
      "d. Die FMA ist weisungsgebunden gegenüber der EZB"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Aufgaben hat die EBA (European Banking Authority)?",
    "options": [
      "a. Erlassen von Leitlinien (Guidelines)",
      "b. Veröffentlichung von Questions & Answers zur praktischen Anwendung",
      "c. Konzessionserteilung für alle europäischen Banken",
      "d. Vorgabe von Szenarien für Stresstests"
    ],
    "correct_indices": [
      0,
      1,
      3
    ]
  },
  {
    "question": "Was bedeutet 'Single Rulebook' im Zusammenhang mit CRR und CRD?",
    "options": [
      "a. Ein einzelnes Buch mit allen Bankenregeln",
      "b. Einheitliche Regeln für alle Mitgliedstaaten der EU",
      "c. CRR ist eine EU-Verordnung und wirkt unmittelbar",
      "d. CRD ist eine EU-Richtlinie und muss national umgesetzt werden"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Welche Rechtsformen sind für Banken in Österreich zulässig?",
    "options": [
      "a. Aktiengesellschaft (AG)",
      "b. Einzelunternehmen",
      "c. Genossenschaft",
      "d. Gesellschaft mit beschränkter Haftung (GmbH)"
    ],
    "correct_indices": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Welche Voraussetzungen muss die Geschäftsleitung einer Bank erfüllen?",
    "options": [
      "a. Mindestens 2 Geschäftsleiter (4-Augen-Prinzip)",
      "b. Fachlich geeignet (fit) und persönlich zuverlässig (proper)",
      "c. Dreijährige Leitungserfahrung",
      "d. Mindestens ein Doktortitel in Betriebswirtschaft"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Wann fehlt die Propriety (persönliche Zuverlässigkeit) eines Geschäftsleiters?",
    "options": [
      "a. Bei Insolvenzverfahren über das Vermögen des Geschäftsleiters",
      "b. Bei Freiheitsstrafe von mehr als 180 Tagsätzen",
      "c. Bei Verurteilungen wegen Vermögensdelikten",
      "d. Bei fehlender dreijähriger Berufserfahrung"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Bei welchen Schwellwerten müssen Veränderungen in der Eigentümerstruktur einer Bank angezeigt werden?",
    "options": [
      "a. 10% des Kapitals oder der Stimmrechte",
      "b. 20% des Kapitals oder der Stimmrechte",
      "c. 30% des Kapitals oder der Stimmrechte",
      "d. 50% des Kapitals oder der Stimmrechte"
    ],
    "correct_indices": [
      1,
      2,
      3
    ]
  },
  {
    "question": "Wozu brauchen Banken Eigenmittel?",
    "options": [
      "a. Um unerwartete Verluste abdecken zu können",
      "b. Um Einleger und Gläubiger zu schützen",
      "c. Um die Widerstandsfähigkeit (Resilienz) zu stärken",
      "d. Um Dividenden auszuschütten"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Unter welchen Voraussetzungen wird genossenschaftliches Geschäftsanteilkapital als hartes Kernkapital anerkannt?",
    "options": [
      "a. Unbefristet und voll eingezahlt",
      "b. Nachrangig gegenüber anderen Gläubigern",
      "c. Keine feste Verzinsung oder garantierte Dividende",
      "d. Rückzahlungspflicht nach 5 Jahren"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Was ist die Sockelbetragslösung bei Genossenschaften?",
    "options": [
      "a. Ein in der Satzung definierter Mindestbetrag, unter den das Geschäftsanteilkapital nicht fallen darf",
      "b. Bei Unterschreitung werden Abfindungsansprüche ausgesetzt",
      "c. Sie dient der Stabilität des harten Kernkapitals",
      "d. Sie ist im § 50a Abs. 2 Z 2 GenG geregelt"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Wie setzen sich die Eigenmittel einer Bank zusammen?",
    "options": [
      "a. Hartes Kernkapital (CET1 - Common Equity Tier 1)",
      "b. Zusätzliches Kernkapital (AT1 - Additional Tier 1)",
      "c. Ergänzungskapital (Tier 2)",
      "d. Fremdkapital von Kunden"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Mindesteigenmittelquoten sind nach Art. 92 CRR einzuhalten?",
    "options": [
      "a. Harte Kernkapitalquote: 4,5%",
      "b. Kernkapitalquote: 6%",
      "c. Eigenmittelquote: 8%",
      "d. Verschuldungsquote (Leverage Ratio): 3%"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Was ist der SREP-Zuschlag und warum wird er erhoben?",
    "options": [
      "a. Ein zusätzlicher Kapitalpuffer basierend auf individuellen Risiken der Bank",
      "b. Er wird von der FMA individuell festgelegt",
      "c. Er deckt Risiken ab, die durch Art. 92 CRR nicht hinreichend erfasst sind",
      "d. Bei Nichteinhaltung droht sofortige Insolvenz"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Kapitalpufferanforderungen gibt es?",
    "options": [
      "a. Kapitalerhaltungspuffer (2,5% für alle Banken)",
      "b. Antizyklischer Kapitalpuffer (0-2,5% je nach Marktlage)",
      "c. Systemrelevanzpuffer (nur für systemrelevante Banken)",
      "d. Liquiditätspuffer (5% für alle Institute)"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Konsequenzen hat die Unterschreitung von Kapitalpuffern?",
    "options": [
      "a. Ausschüttung von Dividenden ist eingeschränkt",
      "b. Zahlung von variablen Vergütungen ist eingeschränkt",
      "c. Rückzahlung von Geschäftsanteilen ist eingeschränkt",
      "d. Sofortiger Konzessionsentzug"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Was ist die Leverage Ratio (Verschuldungsquote) und warum ist sie wichtig?",
    "options": [
      "a. Sie misst das Verhältnis von Kernkapital zu Gesamtrisikoposition",
      "b. Die Mindestquote beträgt 3%",
      "c. Bei ihr spielen Risikogewichte keine Rolle",
      "d. Sie wurde nach der Finanzkrise eingeführt, weil risikogewichtete Aktiva Risiken nicht immer korrekt abbilden"
    ],
    "correct_indices": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "Was versteht man unter 'Corresponding Deduction Approach'?",
    "options": [
      "a. Beteiligungen müssen vom gleichen Kapitalbestandteil abgezogen werden, wie sie bei der anderen Bank angerechnet werden",
      "b. Er verhindert die Doppelzählung von Kapital",
      "c. Er ist relevant bei Beteiligungen an anderen Banken",
      "d. Er wird nur bei internationalen Bankbeteiligungen angewendet"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Welche Bankgeschäfte benötigen eine Konzession nach BWG?",
    "options": [
      "a. Einlagengeschäft",
      "b. Kreditgeschäft",
      "c. Verwahrung und Verwaltung von Wertpapieren für andere",
      "d. Vermittlung von Versicherungen"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Was sind die Konsequenzen bei unbefugtem Betreiben von Bankgeschäften?",
    "options": [
      "a. Strafdrohungen bis zu € 5 Mio bei unbefugtem Kredit- und Einlagengeschäft",
      "b. Kein Anspruch auf vereinbarte Zinsen, Provisionen und Vergütungen",
      "c. Eintrag ins Firmenbuch ist nicht möglich",
      "d. Automatische Umwandlung in eine regulierte Bank"
    ],
    "correct_indices": [
      0,
      1,
      2
    ]
  }
];

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
