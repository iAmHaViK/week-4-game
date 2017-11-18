$(document).ready(function () {
	//declaring the current score variable
	var currentScore;
	startGame();
	var wins = 0;
	var losses = 0;
	function startGame(){
	//create random number between 19-120
	var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) +19;
	console.log(randomNum);
	//sets a target score for the user
	$('#numberHere').html(randomNum);
	//starting current score will always be 0
	currentScore = 0;
	//this dynamically makes current score 0
	$("#currentScore").html(0);
	//numbers for each color are randomly generated
	var blue = Math.floor(Math.random()*12) + 1 ;
	var purple = Math.floor(Math.random()*12) + 1 ;
	var green = Math.floor(Math.random()*12) + 1 ;
	var yellow = Math.floor(Math.random()*12) + 1 ;
	//All validation is done here............................................................
	var validation = blue+purple+green+yellow;
	console.log("blue is:"+blue+"purple is:"+purple+"green is:"+green+"yellow is:"+yellow);
	console.log("sum of all colors is:"+validation);
	//validation ends here...................................................................
	//displays the initial wins and losses in the counter div
	$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
	//each box gets a different value
		$("#blue").attr("value", blue);
	var blueCrystal = $("#blue").attr("value");
	console.log(blueCrystal);

	$("#purple").attr("value", purple);
	var purpleCrystal = $("#purple").attr("value");
	console.log(purpleCrystal);

	$("#green").attr("value", green);
	var greenCrystal = $("#green").attr("value");
	console.log(greenCrystal);

	$("#yellow").attr("value", yellow);
	var yellowCrystal = $("#yellow").attr("value");
	console.log(yellowCrystal);
	// when any crystal is clicked
	$('#blue').on('click', function(){

		var test1 = $(this).attr('value');

		console.log(test1);

		if(test1 = blue){

			currentScore += blue;

			$("#currentScore").html(currentScore);
			if (currentScore === randomNum){
				wins++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else if (currentScore > randomNum){
				losses++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else {
				console.log('Game is not complete yet');
			}

		}
	});

	$('#purple').on('click', function(){

		if (test1 = purple){

			currentScore += purple;

			$("#currentScore").html(currentScore);
			if (currentScore === randomNum){
				wins++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else if (currentScore > randomNum){
				losses++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else {
				console.log('Game is not complete yet');
			}
		}
	})

	$('#green').on('click', function(){

		if (test1 = green){

			currentScore += green;

			$("#currentScore").html(currentScore);
			if (currentScore === randomNum){
				wins++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else if (currentScore > randomNum){
				losses++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else {
				console.log('Game is not complete yet');
			}
		}
	})


	$('#yellow').on('click', function(){
		if (test1 = yellow){
			currentScore += yellow;
			$("#currentScore").html(currentScore);
			if (currentScore === randomNum){
				wins++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else if (currentScore > randomNum){
				losses++;
				$("#counter").html("<p>Wins:"+(wins)+"<br><br>Losses:"+(losses)+"</p>");
				startGame()
			} else {
				console.log('Game is not complete yet');
			}
		}
	})
}	
	function reset(){

		startGame();
	}
});
