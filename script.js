var submitEl = document.getElementById("submit");
var timerEL = document.getElementById("timer");
var hTags = document.querySelector("h1");
var mainEL = document.getElementById("main");
var buttonArrayEl = document.getElementById("buttonArray");
var quizEL = document.getElementById("quiz");
var inputEL = document.createElement("input");
// inputEl.setAttribute("class", "input");


var counter = 25;

var timeRemaining = 0;

var questionCount = 0

var questionArray = [
    {
        question: "Which of the following is a free floating bone?",
        answers: ["Lunate", "Hyoid", "Cuboid", "Radius"],
        correct: "Hyoid",
    },
    {
        question: "Which mucle group is located in the leg?",
        answers: ["Rhomboids", "Quadriceps", "Pectoralis Major", "Brachioradialis"],
        correct: "Quadriceps",
    },
    {
        question: "Which of the following is not a lobe in the brain?",
        answers: ["Temporal", "Frontal", "Occipital", "Posterior"],
        correct: "Posterior",
    
    },
    {
        question: "Which of the following is a type of synovial joint?",
        answers: ["ball-and-socket", "saddle", "blunt", "plane"],
        correct: "blunt",
    }
];


function startTimer() {
    
    

     var timeRemaining = setInterval(function() {
            
        counter--;
        if (counter > 0) {
        timerEL.textContent = counter;
        }
        if (counter <= 0) {
        clearInterval(timeRemaining);
        endQuiz();
        
        
        }
    }, 1000);
}

    function checkAnswer(event) {
        
        if (event.target.textContent === questionArray[questionCount].correct) {
            // console.log("correct");
            questionCount++;
            counter += 5
            
        } 
        else {
            counter -= 10
            questionCount++;
        
        }
        changeQuestion();
    };

    function changeQuestion() {
            
            if (questionCount === 0) {
                submitEl.remove();
            }
            if (questionCount === questionArray.length) {
            
                endQuiz();
                
            }
    
            mainEL.textContent = questionArray[questionCount].question;
            buttonArrayEl.textContent = "";
            for (let i = 0; i < questionArray[questionCount].answers.length; i++) {
                var newButton = document.createElement("button");
                newButton.textContent = questionArray[questionCount].answers[i];
              
                console.log(questionArray[questionCount].answers[i]);
                buttonArrayEl.appendChild(newButton);
                
                newButton.addEventListener("click", checkAnswer);
            
            
            

            
        }
       
    };

  

    function endQuiz() {
        
        hTags.textContent = "Quiz Over";
        mainEL.innerHTML = ("Your score: " + counter + " Please enter your initials below for high score");
        buttonArrayEl.style.display = "none";
        timerEL.textContent = "";
        inputEL.testContent = " ";
        
        
        quizEL.appendChild(inputEL);
        var newSubmit = document.createElement("button");
        newSubmit.textContent = "SUBMIT";
        newSubmit.setAttribute("href", "highscore.html")
        quizEL.appendChild(newSubmit);
    }

    function highScore(){
        var initials = inputEL.textContent; 
        localStorage.setItem("initials", initials);
        localStorage.setItem("score", counter);
        
    }
    submitEl.addEventListener("click", changeQuestion);
    submitEl.addEventListener("click", startTimer);

    // newSubmit.addEventListener("click", highScore);