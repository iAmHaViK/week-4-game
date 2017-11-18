/*
Player will guess numbers using crystal images
Random number between 19-120 will appear in the numberHere id
each crystal image will have a number value between 1-12
eveerytime player clicks a crystal image, the score is added to currentScore id
when the currentScore id === numberHere id, the player will win
when the currentScore id > numberHere id, the player will loose
counter id keeps track of wins and losses
the game restarts whenever player wins or looses.*/

$("document").ready(function() {

	var currentScore, targetScore, operatorClicked;
	var wins = 0;
	var losses = 0;
	numberHere = $("#numberHere");

	startGame();

	function startGame(){

		var blue = 0;
		var purple = 0;
		var green = 0;
		var yellow = 0;

		currentScore = 0;

		blue = Math.floor(Math.random()*12) + 1 ;
		purple = Math.floor(Math.random()*12) + 1 ;
		green = Math.floor(Math.random()*12) + 1 ;
		yellow = Math.floor(Math.random()*12) + 1 ;
		targetScore = Math.floor(Math.random()*101) + 19 ;
		operatorClicked = false;

		//////////////////////////////////////////////////////////////////////////////////////////////
		var validation = blue+purple+green+yellow;
		console.log("blue is:"+blue+"purple is:"+purple+"green is:"+green+"yellow is:"+yellow);
		console.log("sum of all colors is:"+validation);
		//////////////////////////////////////////////////////////////////////////////////////////////

		$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");

		//Current score always starts with 0
		$("#currentScore").text(0);
		//Target score is generated here
		numberHere.text(targetScore);
		

		$("#blue").on('click', function(){

			operatorClicked = true;

			if(operatorClicked === true){

				currentScore += blue;

				$("#currentScore").text(currentScore);
			//if the current score is exactly like the targeted score
			if (currentScore === targetScore){
			//player will get 1 win
			++wins;
			//the counter will get updated with that win
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			//current score becomes 0
			//new game starts
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();
			}
			//if the current score goes higher than the targeted score
			if (currentScore > targetScore){
			//player will get 1 loss
			++losses;
			// the counter will get updated with that loss
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			//current score becomes 0
			//new game starts
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();

			}

				operatorClicked = false;

				return currentScore;
			}

		});

		$("#purple").on('click', function(){

			operatorClicked = true;

			if(operatorClicked === true){

				currentScore += purple;

				$("#currentScore").text(currentScore);

			if (currentScore === targetScore){

			++wins;
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();
			}

			if (currentScore > targetScore){

			++losses;
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();

			}

				operatorClicked = false;

				return currentScore;
			}

		});

		$("#green").on('click', function(){

			operatorClicked = true;

			if(operatorClicked === true){

				currentScore += green;

				$("#currentScore").text(currentScore);

			if (currentScore === targetScore){

			++wins;
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();
			}

			if (currentScore > targetScore){

			++losses;
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();

			}

				operatorClicked = false;

				return currentScore;
			}

		});

		$("#yellow").on('click', function(){

			operatorClicked = true;

			if(operatorClicked === true){

				currentScore += yellow;

				$("#currentScore").text(currentScore);

			if (currentScore === targetScore){

			++wins;
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();
			}

			if (currentScore > targetScore){

			++losses;
			$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
			blue = 0;
			purple = 0;
			green = 0;
			yellow = 0;
			newGame();

			}

				operatorClicked = false;

				return currentScore;
			}

		});

	}

	function newGame (){
		startGame();
	}


})

