
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    //Call/Invoking newGame function
    newGame();

    /* Call/invoke newGame function on button click */
    $(".new").click(newGame());

});

    /* Call/Invoking randomNumber function with our range parameters for between 1-100, and setting it as a variable */
    var randomNumberSelected = randomNumber(1,100);

    /* Validate user guess is between 1 and 100 */
    function guessValidation () {
      if ($("#userGuess").val() > 100 || $("#userGuess").val() < 1) {
      alert("Please enter a number between 1 - 100");
      }
    }

  	/* Declaring newGame function */
  	function newGame (){
  		//Resets the guess entry input
  		$(".text").reset();
  		//Resets guess counter
  		$("#count").reset();
  		//Removes list of guessed numbers
  		$("#guessList").remove("li")
      //Clears any feedback types from old games
      $("#feedbackExact").hide();
      $("#feedbackHot").hide();
      $("#feedbackCold").hide();
  	}

  	/* Declaring randomNumber function */
  	function randomNumber (min, max){
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
  	}

  	/* Feedback function on submit*/
  	$("#guessButton").submit(function(event){
      //Since we aren't submitting to a server
  		event.preventDefault();
      /* Set userNumEntry variable to the user's guessed number, also convert value from string to integer with + symbol, could use parseInt() as an alternative*/
      var userNumEntry = +($("#userGuess").val());
      /* Validate user's guess is between 1-100, if not alert them */
      if (userNumEntry < 1 || userNumEntry > 100) {
        alert("Please enter a number between 1-100");
      }
      else {
        $("#feedback").hide();
        if (((userNumEntry - randomNumberSelected).abs()) = 0) {
          $("#feedbackExact").show();
        }
        else if (((userNumEntry - randomNumberSelected).abs()) > 0 && ((userNumEntry - randomNumberSelected).abs()) <= 10) {
          $("#feedbackHot").show();
        }
        else if (((userNumEntry - randomNumberSelected).abs()) >= 11) {
          $("#feedbackCold").show();
        }
      }

  	});












