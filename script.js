let start = document.getElementById('startButton');
let questionContainer = document.getElementById('question-container');
let initialText = document.getElementById('initialText');
let initialHeading = document.getElementById('initialHeading');
let questionText = document.getElementById('questionText');
let answerBtnText = document.getElementById('answerButtons');

let shuffledQuestions, currentQuestionIndex

start.addEventListener('click', startGame)

function startGame() {
    start.classList.add('hidden');
    initialText.classList.add('hidden');
    initialHeading.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[0])
}

function showQuestion(question) {
    questionText.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        answerBtnText.appendChild(button)
    })
}

function resetState(e) {
    while (answerBtnText.firstChild) {
        answerBtnText.removeChild
        (answerBtnText.firstChild)
    }
}

let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answer: [
            {text: 'strings', correct: false },
            {text: 'booleans', correct: false },
            {text: 'alerts', correct: true },
            {text: 'numbers', correct: false },
        ]
            
    },

    {
        question: 'The condition in an if/else statement is enclosed within___.',
        answer: [
            {text: 'quotes', correct: false },
            {text: 'parentheses', correct: true },
            {text: 'curly brackets', correct: false },
            {text: 'square brackets', correct: false },
        ]
            
    },

    {
        question: 'Arrays in JavaScript can be used to store___',
        answer: [
            {text: 'numbers and strings', correct: false },
            {text: 'other arrays', correct: false },
            {text: 'booleans', correct: false },
            {text: 'all of the above', correct: true },
        ]
            
    },
]