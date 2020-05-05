var submitEl = document.getElementById("submit");
var timerEL = document.getElementById("timer");

var mainEL = document.getElementById("main");

var btnOne = document.createElement("BUTTON");
btnOne.setAttribute("class", "button1"); 
var btnTwo = document.createElement("BUTTON");
btnTwo.setAttribute("class", "button2");
var btnThree = document.createElement("BUTTON");
btnThree.setAttribute("class", "button3");
var btnFour = document.createElement("BUTTON");
btnFour.setAttribute("class", "button4");





var hTags = document.querySelector("h1");


submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    submitEl.remove();
    hTags.textContent = " ";
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
    mainEL.innerHTML = "Which of the following is a free floating bone?";
    btnOne.innerHTML = "Hyoid"; 
    document.body.children[1].appendChild(btnOne);   
    btnTwo.innerHTML = "Radius"; 
    document.body.children[1].appendChild(btnTwo);  
    btnThree.innerHTML = "Lunate";
    document.body.children[1].appendChild(btnThree);
    btnFour.innerHTML = "Cuboid";
    document.body.children[1].appendChild(btnFour);


    btnOne.addEventListener("click", function(eventOne) {
        eventOne.preventDefault();
        questionTwo();
    });
    btnTwo.addEventListener("click", function(eventOne) {
        eventOne.preventDefault();
        questionTwo();
    });
    btnThree.addEventListener("click", function(eventOne) {
        eventOne.preventDefault();
        questionTwo();
    });
    btnFour.addEventListener("click", function(eventOne) {
        eventOne.preventDefault();
        questionTwo();
    });

  
    
}



    function questionTwo() {
        mainEL.innerHTML = "Which mucle group is located in the leg?";
        btnOne.innerHTML = "Rhomoids";
        btnTwo.innerHTML = "Quadriceps"; 
        btnThree.innerHTML = "Pectoralis Major";
        btnFour.innerHTML = "Brachioradialis";

        btnOne.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
        btnTwo.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
        btnThree.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
        btnFour.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionThree();
        });
    }   
    


    function questionThree() {
        mainEL.innerHTML = "Which is not a type of synoival joint?";
        btnOne.innerHTML = "synoball-and socket";
        btnTwo.innerHTML = "saddle"; 
        btnThree.innerHTML = "plane";
        btnFour.innerHTML = "stuck";

        btnOne.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionFour();
        });
        btnTwo.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionFour();
        });
        btnThree.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionFour();
        });
        btnFour.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            questionFour();
        });
    }   

    function questionFour() {
        mainEL.innerHTML = "Which is not a lobe in the brain?";
        btnOne.innerHTML = "Posterior";
        btnTwo.innerHTML = "Temporal"; 
        btnThree.innerHTML = "Occipital";
        btnFour.innerHTML = "Frontal";

        btnOne.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            
        });
        btnTwo.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            
        });
        btnThree.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            
        });
        btnFour.addEventListener("click", function(eventOne) {
            eventOne.preventDefault();
            
        });
    }   
