let start = document.getElementById('startButton')
let questionContainer = document.getElementById('QuestionContainer')
let initialText = document.getElementById('initialText')
let initialHeading = document.getElementById('initialHeading')

let questionBank = [
    {
        Q1: 'Commonly used data types DO NOT include:'
        A1: [
            {text: 'strings', correct: false },
            {text: 'booleans', correct: false },
            {text: 'alerts', correct: true },
            {text: 'numbers', correct: false },
        ]
            
    }
]

start.addEventListener('click', startGame)

function startGame() {
    start.classList.add('hidden');
    initialText.classList.add('hidden');
    initialHeading.classList.add('hidden');
    questions.classList.remove('hidden');
    
}

function answer() {
    
}


