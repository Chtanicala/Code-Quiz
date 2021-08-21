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
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hidden');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
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
        button.addEventListener("click", selectAnswer)
        answerBtnText.appendChild(button)
    })
}

function resetState(e) {
    while (answerBtnText.firstChild) {
        answerBtnText.removeChild
        (answerBtnText.firstChild)
    }
}

function selectAnswer(e) {
    let selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnText.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) 
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
            
    }
]