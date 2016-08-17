
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

  	/* newGame function */
  	function newGame (){
  		//Resets the guess entry input
  		$(".text").reset();
  		//Resets guess counter
  		$("#count").reset();
  		//Removes list of guessed numbers
  		$("#guessList").remove("li")
  	}

  	/* Call newGame function on button click */
  	$(".new").click(function newGame());

  	/* randomNumber function */
  	function randomNumber (min, max){
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
  	}
  	/* Set the randomNumberSelected variable using the above function and range of 1 - 100 */
  	var randomNumberSelected = function randomNumber(1, 100);

  	/* Validate user guess is between 1 and 100 */
  	function guessValidation () {
  		if ($("#userGuess").val() > 100 || $("#userGuess").val() < 1) {
  		alert("Please enter a number between 1 - 100");
  		}
  	}

  	/* Feedback function */
  	$("#guessButton").submit(function(event){
  		event.preventDefault();
  		$("#feedback").hide();
  		//randomNumberSelected Variable not global?
  		if ((($("userGuess") - randomNumberSelected).abs()) = 0) {
  			$("#feedbackExact").show();
  		}
  		else if ((($("userGuess") - randomNumberSelected).abs()) > 0 && ((($("userGuess") - randomNumberSelected).abs()) <= 10)) {
  			$("#feedbackHot").show();
  		}
  		else if ((($("userGuess") - randomNumberSelected).abs()) >= 11) {
  			$("#feedbackCold").show();
  		}

  	});












