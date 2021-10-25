/*
 * Steps:
 * 1. I need to generate a random number.
 * 2. I need to ask player the guess a number.
 * 3. If number is bigger, answer is hot, if smaller, answer is cold.
 */

// Game States:
// 1. game starts
// 2. ask a guess
// 3. If wrong or not exit, go to 2.
// 4. Right guess, show you win
// 5. Do you want to exit, yes

// Note: Prompt, Alert and Confirm is clocking the UI of the browser. Use carefully.
let randomNumberLength = 100;
let randomNumber = Math.floor(Math.random() * randomNumberLength);
let guessed;
let distanceBetweenRandomNumberAndGuessed;
//let percent;
let bodyContainer = document.getElementById("container");
let input         = document.getElementById("guessedNumber");
let button        = document.getElementById("guessedNumberSubmit");
let printResponse = document.getElementById("printResponse");

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
			"randomNumber - guessed: " + distanceBetweenRandomNumberAndGuessed
		);
		isGuessedNumberHotOrCold();
	});
}

// If guessed number is <=10% of distance === HOT
// If guessed number is <=5% of distance === SUPER HOT
// If guesses number is >10% of distance === COLD
// If guessed number is >=25% of distance === SUPER COLD
// If guessed number is >= 60% of distance === FROZEN
// If guessed number is === randomNumber === YOU WIN!

function getPercentDistance(percentToGet) {
	let percent = (percentToGet / 100) * randomNumberLength;

	/*let winPosition       = (0 / 100) * randomNumberLength;
            let superHotPosition  = (10 / 100) * randomNumberLength;
            let hotPosition       = (20 / 100) * randomNumberLength;
            let coldPosition      = (21 / 100) * randomNumberLength;
            let superColdPosition = (50 / 100) * randomNumberLength;
            let frozenPosition    = (90 / 100) * randomNumberLength;*/
}

function isGuessedNumberHotOrCold() {
	let winPosition = (0 / 100) * randomNumberLength;
	let superHotPosition = (5 / 100) * randomNumberLength;
	let hotPosition = (10 / 100) * randomNumberLength;
	let coldPosition = (10 / 100) * randomNumberLength;
	let superColdPosition = (50 / 100) * randomNumberLength;
	let frozenPosition = (90 / 100) * randomNumberLength;

	
    if (guessed.length == 0) {
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
