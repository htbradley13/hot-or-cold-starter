
$(document).ready(function(){
	
     /* Declaring randomNumber function */
    function randomNumber (min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /* Declaring newGame function */
    function newGame (){
      //Resets the guess entry input
      $("form")[0].reset();

      //Resets guess counter
      $("#count").text(0);

      //Removes list of guessed numbers
      $("#guessList").empty();

      //Clears any feedback types from old games
      $("#feedbackExact").hide();
      $("#feedbackHot").hide();
      $("#feedbackCold").hide();

      //Show original message
      $("#feedback").show();
    }

    /* Declaring guessCount running total function */
    function guessCountTally (x) {
          var newTally = x + 1;
          $("#count").text(newTally);
    }

    /* Declare function to ensure user guess is between 1-100, if not alert them */
    function guessValidation () {
      if (+($("#userGuess").val()) > 100 || +($("#userGuess").val()) < 1) {
      alert("Please enter a number between 1 - 100");
      }
    }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    //Invoke newGame function
    newGame();

    /* Call/invoke newGame function on button click  */
    $(".new").mousedown(function() {
      newGame();
    });

    /* Call/Invoking randomNumber function with our range parameters for between 1-100, and setting it as a variable */
      var randomNumberSelected = randomNumber(1,100);

      /* Feedback function on submit*/
    $("form").submit(function(event){

        //Since we aren't submitting to a server
        event.preventDefault();

        /* Hide feedback from previous guesses */
      $("#feedbackExact").hide();
      $("#feedbackHot").hide();
      $("#feedbackCold").hide();

        //Invoke guess validation
        guessValidation();

        /* Set userNumEntry variable to the user's guessed number, also convert value from string to integer with + symbol, could use parseInt() as an alternative*/
        var userNumEntry = +($("#userGuess").val());

        /* Setting user count total variable, convert to number from string as well */
        var userGuessCountTotal = +($("#count").text());

        /* Invoke user guess tally function and hide current feedback showing*/
        guessCountTally(userGuessCountTotal);

        /* Add each guess to the li for user guesses */
        $("#guessList").append("<li>" + userNumEntry + "</li>")

        $("#feedback").hide();

        /* Set variable to make it easier to do the if statement afterwards */
        var dif = Math.abs(userNumEntry - randomNumberSelected);

        /* Then show feedback based on the below */
        if (dif === 0) {
          $("#feedbackExact").show();
        }
        else if ((dif > 0) && (dif <= 10)) {
          $("#feedbackHot").show();
        }
        else if (dif >= 11) {
          $("#feedbackCold").show();
        }

        /* Set the user guess input field back to blank */
        $("#userGuess").val("");
    });

});

   

  	














