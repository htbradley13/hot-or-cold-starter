
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
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

  	

});




