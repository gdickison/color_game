var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var gameName = document.getElementById("gameName");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		})
	};
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		//Add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of picked square
			var clickedColor = this.style.background;
			//compare color to picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				gameName.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	};
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	//pick a color from the new color array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change the colors of the squares on the page
	for (var i = 0; i < squares.length; i++) {
		//Add initial colors to squares
		if(!colors[i]){
				squares[i].style.background = colors[i];
				squares[i].style.visibility = "hidden"
			} else {
				squares[i].style.visibility = "visible";
			};
		squares[i].style.background = colors[i];
	};
	gameName.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
		//generate new colors
		// colors = generateRandomColors(numberOfSquares);
		// //pick a color from the new color array
		// pickedColor = pickColor();
		// //change color display to match picked color
		// colorDisplay.textContent = pickedColor;
		// //change the colors of the squares on the page
		// for (var i = 0; i < squares.length; i++) {
		// 	//Add initial colors to squares
		// 	squares[i].style.background = colors[i];
		// };
		// gameName.style.background = "steelblue";
		// resetButton.textContent = "New Colors";
		// messageDisplay.textContent = "";
})

function generateRandomColors(num){
	//make an array
	var arr = [];
	//generate num colors for the array
	for (var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	//return the array
	return arr;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function changeColors(color){
	//loop through the squares and change each color to the picked color
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
