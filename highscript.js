var listElement = document.getElementById("highscorelist");
// create input for new initial
// create click even listenter for form
// apend new initials to list
   var scores = [];
   var scoreCount = 0;
   init(); 

   function renderScores() {
        // console.log(scores)
        // listEL.innerHTML = "";
        // listEl.textContent = scores.length
        
        listElement.textContent = "";
        // Render a new li for each score
        for (var i = 0; i < scores.length; i++) {
          var li = document.createElement("li");
          li.textContent = JSON.stringify(scores[i]);
          listElement.appendChild(li);
        }
    //   console.log(scores);
    }

      function init() {
        // Get stored scores from localStorage
        // Parsing the JSON string to an object
        var scoresArray = JSON.parse(localStorage.getItem("score"));
        // console.log(scoresArray)
        
       
        if (scoresArray!== null) {
          scores = scoresArray;
        }
        // console.log(scores)
        // Render scores to the DOM
        renderScores();

      }
    