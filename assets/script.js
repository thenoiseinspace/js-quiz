//setting up global variables
var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

//start the game
function showPage2(){
    //advance to question page
    var firstPageOfQuestions = document.getElementById("question-container");
    var displaySetting1 = firstPageOfQuestions.style.display; 
    firstPageOfQuestions.style.display="block"; 
    
    var landingPage = document.getElementById ("welcome-page"); 
    var displaySetting2 = landingPage.style.display;
    landingPage.style.display="none"

}

//shuffling answers to randomize placement in list
var shuffledQuestions, currentQuestionIndex

//make this thing work with the answer buttons
answerButtonsElement.addEventListener("click", () => {
    currentQuestionIndex++
    advanceToNextQ()
})

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
    // if all questions have been shown, advance to next
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

function selectAnswer(e){
    var selectedButton = e.target 
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    } )
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        //change this
        nextButton.classList.remove("hide")
    } else {
       // startButton.innerText = "Restart"
        //startButton.classList.remove("hide")
   }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
       element.classList.add("correct") 
    } else {
       element.classList.add("wrong") 
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("correct")
}

var questions = [
    {
      question1: "Arrays in JS can be used to store:", 
      answers:  [
          {text: "All of these", correct: true},
          {text: "Numbers and strings", correct: false},
          {text: "Boolean", correct: false},
          {text: "Other arrays", correct: false},
      ]
    },
    {
        question2: "Commonly used data types DO NOT include:", 
        answers:  [
            {text: "Alerts", correct: true},
            {text: "Strings", correct: false},
            {text: "Boolean", correct: false},
            {text: "Numbers", correct: false},
        ]
      },
      {
        question3: "The condition of an 'if/then' statement is enclosed within: ", 
        answers:  [
            {text: "parentheses", correct: true},
            {text: "quotes", correct: false},
            {text: "square brackets", correct: false},
            {text: "curly brackets", correct: false},
        ]
      }
]

