/* bodyContainer used for change background color */
let bodyContainer = document.getElementById("app-container");

/* input for get number for game, will be the lenght of the random number */
let lengthInput   = document.getElementById("app-number-length");
let controls      = document.getElementById("app-controls");
let guessInput    = document.getElementById("app-number-guess");
let gameButton    = document.getElementById("app-game-button");
let result		  = document.getElementById("app-game-result");

let randomNumber;
let isGameStarted = false;
let isToReset = false;

console.log('STARTER VALUES')
console.log('gameLength... ==> ' + lengthInput.value)
console.log('randomNumber... ==> ' + randomNumber)
console.log('---------------------------------------')
console.log(' ')

function randomNumberGenerator() {
	randomNumber = Math.floor(Math.random() * lengthInput.value + 1)
}

function isColdOrHot() {
	let gameLength = lengthInput.value;
	let guessed = guessInput.value;
	let distanceRandomGuessed = Math.abs(randomNumber - guessed);

	//console.log('gameLength... ==> ' + gameLength)
	//console.log('randomNumber... ==> ' + randomNumber)

	let winPosition 	  = parseInt((0 / 100) * gameLength);
	let superHotPosition  = parseInt((5 / 100) * gameLength);
	let hotPosition 	  = parseInt((10 / 100) * gameLength);
	let coldPosition 	  = parseInt((10 / 100) * gameLength);
	let superColdPosition = parseInt((30 / 100) * gameLength);
	let frozenPosition 	  = parseInt((50 / 100) * gameLength);

	let containerClass;

	console.log('gameLength... --> ' + lengthInput.value)
	console.log('randomNumber... --> ' + randomNumber)
	console.log('guessed... --> ' + guessed)
	console.log('distanceRandomGuessed... --> ' + distanceRandomGuessed)
	console.log('..................................................')
	console.log(' ')
	console.log(' ')
	
	if (distanceRandomGuessed === winPosition) {
		result.innerHTML = "You Win!";
		gameButton.innerHTML = "Reset";
		isToReset = true;
		containerClass = "container-winner";
	} else if (distanceRandomGuessed <= superHotPosition) {
		result.innerHTML = "Super Hot";
		containerClass = "container-super-hot";
	} else if (distanceRandomGuessed <= hotPosition) {
		result.innerHTML = "Hot";
		containerClass = "container-hot";
	} else if (distanceRandomGuessed > coldPosition) {
		result.innerHTML = "Cold";
		containerClass = "container-cold";
	} else if (distanceRandomGuessed > superColdPosition) {
		result.innerHTML = "Super Cold";
		containerClass = "container-super-cold";
	} else if (distanceRandomGuessed > frozenPosition) {
		result.innerHTML = "Frozen"
		containerClass = "container-frozen";
	}

	bodyContainer.className = "";
	bodyContainer.classList.add(containerClass);
}

gameButton.addEventListener("click", function (event) {
	if (!lengthInput.value) {
		result.innerHTML = "Enter a number"
	} else if (lengthInput.value < 0 || lengthInput.value > 100) {
		result.innerHTML = "From 0 to 100";
	}else if (!isGameStarted && lengthInput.value) {
		isGameStarted = true;
		controls.classList.toggle("hidden");
		gameButton.innerHTML = "Guess";
		result.innerHTML = ""
		randomNumberGenerator()
	} else if (isToReset) {
		isGameStarted = false;
		isToReset = false;
		controls.classList.toggle("hidden");
		gameButton.innerHTML = "Start Game";
		result.innerHTML = "";
		lengthInput.value = "";
		guessInput.value = "";

	} else {
		isColdOrHot();
	}
})
