/*
 * Steps:
 * 1. I need to generate a random number.
 * 2. I need to ask player the guess a number.
 * 3. If number is close, answer is hot, if far, answer is cold.
 */

let bodyContainer = document.getElementById("container");
let input         = document.getElementById("guessedNumber");
let button        = document.getElementById("guessedNumberSubmit");
let printResponse = document.getElementById("printResponse");

let randomNumberLength = 100;
let randomNumber = Math.floor(Math.random() * (randomNumberLength + 1));
let guessed;
let distanceBetweenRandomNumberAndGuessed;

let winPosition;
let superHotPosition;
let hotPosition;
let coldPosition;
let superColdPosition;
let frozenPosition;

function startGame() {
	button.addEventListener("click", function (event) {
		guessed = document.getElementById("guessedNumber").value;
		distanceBetweenRandomNumberAndGuessed = Math.abs(
			randomNumber - guessed
		);
		console.log("guessed: " + guessed);
		console.log("randomNumber: " + randomNumber);
		console.log(
			"(randomNumber - guessed) ==> " + distanceBetweenRandomNumberAndGuessed
		);
		isGuessedNumberHotOrCold();
	});
}

// If guessed number is === randomNumber === YOU WIN!
// If guessed number is <= 5% of distance === SUPER HOT
// If guessed number is <= 10% of distance === HOT
// If guesses number is > 10% of distance === COLD
// If guessed number is >= 30% of distance === SUPER COLD
// If guessed number is >= 50% of distance === FROZEN

/*
function getPercentDistance(percentToGet) {
	let percent = (percentToGet / 100) * randomNumberLength;

	let winPosition       = (0 / 100) * randomNumberLength;
	let superHotPosition  = (5 / 100) * randomNumberLength;
	let hotPosition       = (10 / 100) * randomNumberLength;
	let coldPosition      = (10 / 100) * randomNumberLength;
	let superColdPosition = (30 / 100) * randomNumberLength;
	let frozenPosition    = (50 / 100) * randomNumberLength;
}
*/

function isGuessedNumberHotOrCold() {
	winPosition 	  = (0 / 100) * randomNumberLength;
	superHotPosition  = (5 / 100) * randomNumberLength;
	hotPosition 	  = (10 / 100) * randomNumberLength;
	coldPosition 	  = (10 / 100) * randomNumberLength;
	superColdPosition = (30 / 100) * randomNumberLength;
	frozenPosition 	  = (50 / 100) * randomNumberLength;

    if (guessed.length === 0) {
        printResponse.innerHTML = "Is empty!";
    } /*else if (guessed.length < randomNumberLength || guessed.length > randomNumberLength) {
        printResponse.innerHTML = "Out of range";
    } */ else if (distanceBetweenRandomNumberAndGuessed === winPosition) {
		printResponse.innerHTML = "You Win!!";
        bodyContainer.className = "";
        bodyContainer.classList.add("container-winner");
	} else if (distanceBetweenRandomNumberAndGuessed <= superHotPosition) {
		printResponse.innerHTML = "Super Hot";
        bodyContainer.className = "";
        bodyContainer.classList.add("container-super-hot");
	} else if (distanceBetweenRandomNumberAndGuessed <= hotPosition) {
		printResponse.innerHTML = "Hot";
        bodyContainer.className = "";
        bodyContainer.classList.add("container-hot");
	} else if (distanceBetweenRandomNumberAndGuessed > coldPosition) {
		printResponse.innerHTML = "Cold";
        bodyContainer.className = "";
        bodyContainer.classList.add("container-cold");
	} else if (distanceBetweenRandomNumberAndGuessed >= superColdPosition) {
		printResponse.innerHTML = "Super Cold";
        bodyContainer.className = "";
        bodyContainer.classList.add("container-super-cold");
	} else if (distanceBetweenRandomNumberAndGuessed >= frozenPosition) {
		printResponse.innerHTML = "Frozen";
        bodyContainer.className = "";
        bodyContainer.classList.add("container-frozen");
	}

}

startGame();
