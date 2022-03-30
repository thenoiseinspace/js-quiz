//setting up global variables
var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

//document.querySelector('#submit-button').addEventListener('click', function())

//these variables link to the user initials submission
var btn = document.getElementById('submit-button');
var inputBox = document.getElementById('typedInitials');

var outputbox=document.getElementById("highscores");
console.log()

//start the game
function showPage2(){
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

//select an answer

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

//Setting up scores
function scoringQuestions(){
    var correct1= document.getElementById("questions")
    if (correct1.checked===correct)
        {score ++;}
}

function showLeaderboard() {
    //has to log submission
    var lastPageScores = document.getElementById("leaderboard");
    var displaySetting1 = lastPageScores.style.display; 
    lastPageScores.style.display="block"; 
    
    var thirdPageSubmission = document.getElementById ("insert-initials"); 
    var displaySetting2 = thirdPageSubmission.style.display;
    thirdPageSubmission.style.display="none"
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
        //nextButton.classList.remove("hide")
    } else {
       // startButton.innerText = "Restart"
        //startButton.classList.remove("hide")


        var thirdPageScore = document.getElementById("insert-initials");
        var displaySetting1 = thirdPageScore.style.display; 
        thirdPageScore.style.display="block"; 
        
        var firstPageOfQuestions = document.getElementById ("question-container"); 
        var displaySetting2 = firstPageOfQuestions.style.display;
        firstPageOfQuestions.style.display="none"
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
      question: "Arrays in JS can be used to store:", 
      answers:  [
          {text: "All of these", correct: true},
          {text: "Numbers and strings", correct: false},
          {text: "Boolean", correct: false},
          {text: "Other arrays", correct: false},
      ]
    },
    {
        question: "Commonly used data types DO NOT include:", 
        answers:  [
            {text: "Alerts", correct: true},
            {text: "Strings", correct: false},
            {text: "Boolean", correct: false},
            {text: "Numbers", correct: false},
        ]
      },
      {
        question: "The condition of an 'if/then' statement is enclosed within: ", 
        answers:  [
            {text: "parentheses", correct: true},
            {text: "quotes", correct: false},
            {text: "square brackets", correct: false},
            {text: "curly brackets", correct: false},
        ]
      }
]

//getting user info to display on page
function getInfoFromUser(e){
    e.preventDefault();
   // var inputBox2 = document.getElementById('typedInitials');
    inputBox = document.getElementById('typedInitials');
    console.log(inputBox.value);
    //taking elements from the html form submission to store in variables
    var inputBoxValue = inputBox.value; 
    //create the div to display it all
    var firstElement=document.createElement('div');
    firstElement.textContent=inputBoxValue; 
    console.log(firstElement);
    console.log(inputBoxValue);

    outputbox.appendChild(firstElement);

}

btn.addEventListener("click", getInfoFromUser)

//adding timer
var count = 60;
var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}

//btn.addEventListener('click', getInfoFromUser){
  //  e.preventDefault();
    //console.log("after click test");
//}


//restart quiz
/*function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 } */