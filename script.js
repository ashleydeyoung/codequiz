var submitEl = document.getElementById("submit");
var timerEL = document.getElementById("timer");
var hTags = document.querySelector("h1");
var mainEL = document.getElementById("main");
var buttonArrayEl = document.getElementById("buttonArray");
var quizEL = document.getElementById("quiz");

var formEL = document.getElementById("initials-form");
var newSubmitEl = document.querySelector(".btn");

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
        if (counter <= 0 || questionCount === questionArray.length) {
        clearInterval(timeRemaining);
        endQuiz();
        
        
        }
    }, 1000);
}

    function checkAnswer(event) {
        
        if (event.target.textContent === questionArray[questionCount].correct) {
            // console.log("correct");
            questionCount++;
            
            
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
         
    
            
            buttonArrayEl.textContent = "";
            for (var i = 0; i < questionArray[questionCount].answers.length; i++) {
                var newButton = document.createElement("button");
                newButton.textContent = questionArray[questionCount].answers[i];
                mainEL.textContent = questionArray[questionCount].question;
                console.log(questionArray[questionCount].answers[i]);
                buttonArrayEl.appendChild(newButton);
                
                newButton.addEventListener("click", checkAnswer);
            
            
            

            
        }
       
    };

 

    
    function storeStuff() {
        console.log("whatever")
        var userInitials = document.getElementById("userInitials").value
        // console.log(userInitials);

        var scoreArray = localStorage.getItem("score")

        if (scoreArray === null) {
            scoreArray= [];

        }
        else {
            scoreArray = JSON.parse(scoreArray)
        }
        var userScore = {
            initials : userInitials,
            score: counter,
        }
        // console.log(typeof scoreArray)
        scoreArray.push(userScore)
        
        localStorage.setItem("score", JSON.stringify(scoreArray))
        location.replace('./highscore.html')

    }
    function endQuiz() {
        
        hTags.textContent = "Quiz Over";
        mainEL.innerHTML = ("Your score: " + counter + " Please enter your initials below for high score");
        buttonArrayEl.style.display = "none";
        timerEL.textContent = "";
        
        var inputEL = document.createElement("input");
        inputEL.id = "userInitials"
        
        quizEL.appendChild(inputEL);
        // inputEL.setAttribute("type", "text")
        // inputEL.setAttribute("class", "form-control")
        var newSubmit = document.createElement("button");
        newSubmit.textContent = "SUBMIT";
        newSubmit.onclick = storeStuff;
        // newSubmit.setAttribute("onclick", "location.href = 'highscore.html';");
        newSubmit.setAttribute("class", "btn btn-primary mb-2");
        quizEL.appendChild(newSubmit);
    }

  
    submitEl.addEventListener("click", changeQuestion);
    submitEl.addEventListener("click", startTimer);


  
    