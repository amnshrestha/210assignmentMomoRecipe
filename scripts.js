// don't execute any JS until after the DOM is loaded
counterIngredients = -1;
counterInstruction = -1;
document.addEventListener("DOMContentLoaded", function () {

	// create "handles" on the buttons from the HTML
	var showIngredients = document.getElementById("showIngredients");
	var showInstruction = document.getElementById("showInstruction");
	var hideIngredients = document.getElementById("hideIngredients");
	var hideInstructions = document.getElementById("hideInstructions");

	// create "handles" on the lists
	var listOfIngredients = document.getElementById("listOfIngredients");
	var listOfInstructions = document.getElementById("listOfInstructions");

	// get the lengths of the lists
	legthOfIngredients = listOfIngredients.children.length;
	legthOfInstructions = listOfInstructions.children.length;


	initiateDisplayNone(legthOfIngredients, listOfIngredients);
	initiateDisplayNone(legthOfInstructions, listOfInstructions);

	showStuff(showIngredients, legthOfIngredients, listOfIngredients);
	showStuff(showInstruction, legthOfInstructions, listOfInstructions);


	hideStuff(hideIngredients, listOfIngredients);
	hideStuff(hideInstructions, listOfInstructions);

});

function initiateDisplayNone(length, obj) {
	for (var i = 0; i < length; i++) {
		obj.children[i].style.display = "none";
	}
}

function showStuff(button, lengthOfStuff, listOfStuff) {

	button.addEventListener("click", function () {
		var counter = button.value === "displayIngredients" ? counterIngredients : counterInstruction;
		if (counter < lengthOfStuff - 1) {
			counter++;
			listOfStuff.children[counter].style.display = "revert";
		}
		if (counter >= lengthOfStuff) counter = lengthOfStuff - 1;
		if (button.value === "displayIngredients") {
			counterIngredients = counter;
		} else {
			counterInstruction = counter;
		}
	});
}

function hideStuff(button, listOfStuff) {

	button.addEventListener("click", function () {
		var counter = button.value === "removeIngredients" ? counterIngredients : counterInstruction;
		console.log(counter);
		if (counter >= 0) {
			listOfStuff.children[counter].style.display = "none";
			console.log(listOfStuff.children[counter]);
			counter--;
		}
		if (counter < 0) counter = -1;
		if (button.value === "removeIngredients") {
			counterIngredients = counter;
		} else {
			counterInstruction = counter;
		}
	});
}