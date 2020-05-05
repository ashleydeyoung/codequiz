var submitEl = document.getElementById("submit");
var timerEL = document.getElementById("timer");

var buttonEl = document.createElement("button");
var mainEL = document.getElementById("main");
// var buttonOne = document.querySelector("#button1");
// var buttonTwo = document.querySelector("#button2")
var btnOne = document.createElement("BUTTON");
btnOne.setAttribute("class", "button1"); 
var btnTwo = document.createElement("BUTTON");
btnTwo.setAttribute("class", "button2");

var btnTwo = document.createElement("BUTTON"); 

// var answerA = document.getElementById("answer-A");

var hTags = document.querySelectorAll("h1");


submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    submitEl.remove();
    questionOne();
    
    var counter = 15;

        setInterval(function() {
            
           counter--;
           if (counter >= 0) {
              timerEL.textContent = counter;
           }
           if (counter === 0) {
             clearInterval(counter);
             
           }
        }, 1000);
});

    function questionOne() {
    mainEL.innerHTML = "What is the Capital of North Carolina?";
    btnOne.innerHTML = "Charlotte"; 
    document.body.children[1].appendChild(btnOne);   
    btnTwo.innerHTML = "Raliegh"; 
    document.body.children[1].appendChild(btnTwo);  

    btnTwo.addEventListener("click", function(eventOne) {
        eventOne.preventDefault();
        questionTwo();
    });
    btnOne.addEventListener("click", function(eventOne) {
        eventOne.preventDefault();
        questionTwo();
    });

  
    
}



    function questionTwo() {
        mainEL.innerHTML = "What the Day after Sunday?";
        btnOne.innerHTML = "Monday";
        btnTwo.innerHTML = "Friday"; 

        btnTwo.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
        btnOne.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
    }   
    


    function questionThree() {
        mainEL.innerHTML = "Where is the happist place on earth?";
        btnOne.innerHTML = "orlando";
        btnTwo.innerHTML = "charlotte"; 
        
        btnTwo.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
        btnOne.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
    }


