//start the game

var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

//shuffling answers to randomize placement in list
var shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame(){
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() =>Math.random()-.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    advanceToNextQ()
}

//select an answer - ALSO NEEDS TO ADVANCE TO NEXT Q!

function advanceToNextQ(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question 
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild 
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(){

}

var questions = [
    {
      question1: "text here", 
      answers:  [
          {text: "correctAnswer1", correct: true},
          {text: "incorrectAnswer1", correct: false},
      ]
    }
]
