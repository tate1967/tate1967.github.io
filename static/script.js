const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
        if(correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which president was known as the father of the nation?',
        answers: [
            {text: 'George Washington', correct: true},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "Who was the nation's longest serving president?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: true},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "The U.S. issued it's first postage stamp during his presidency:",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: true},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: 'Which president was known as "Old Hickory"?',
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: true},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "Which president signed legislation that created NASA?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: true}
        ]
    },
    {
        question: "Which president was assassinated by John Wilkes Booth?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: true},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "Who was president during the atomic bombing of Japan?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: true},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "Which president drafted the Declaration of Independence?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: true},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "Which president led the U.S. into World War 1?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: true},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    },
    {
        question: "Which president was the youngest to take office?",
        answers: [
            {text: 'George Washington', correct: false},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Andrew Jackson', correct: false},
            {text: 'Thomas Jefferson', correct: false},
            {text: 'Franklin Delano Roosevelt', correct: false},
            {text: 'James K. Polk', correct: false},
            {text: 'Woodrow Wilson', correct: false},
            {text: 'Harry S. Truman', correct: false},
            {text: 'Theodore Roosevelt', correct: true},
            {text: 'Dwight D. Eisenhower', correct: false}
        ]
    }

]
