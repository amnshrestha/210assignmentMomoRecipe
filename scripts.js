// don't execute any JS until after the DOM is loaded
// counterIngredients = -1;
// counterInstruction = -1;
// document.addEventListener("DOMContentLoaded", function () {

// 	// create "handles" on the buttons from the HTML
// 	var showIngredients = document.getElementById("showIngredients");
// 	var showInstruction = document.getElementById("showInstruction");
// 	var hideIngredients = document.getElementById("hideIngredients");
// 	var hideInstructions = document.getElementById("hideInstructions");

// 	// create "handles" on the lists
// 	var listOfIngredients = document.getElementById("listOfIngredients");
// 	var listOfInstructions = document.getElementById("listOfInstructions");

// 	// get the lengths of the lists
// 	legthOfIngredients = listOfIngredients.children.length;
// 	legthOfInstructions = listOfInstructions.children.length;


// 	initiateDisplayNone(legthOfIngredients, listOfIngredients);
// 	initiateDisplayNone(legthOfInstructions, listOfInstructions);

// 	showStuff(showIngredients, legthOfIngredients, listOfIngredients);
// 	showStuff(showInstruction, legthOfInstructions, listOfInstructions);


// 	hideStuff(hideIngredients, listOfIngredients);
// 	hideStuff(hideInstructions, listOfInstructions);

// });

// function initiateDisplayNone(length, obj) {
// 	for (var i = 0; i < length; i++) {
// 		obj.children[i].style.display = "none";
// 	}
// }

// function showStuff(button, lengthOfStuff, listOfStuff) {

// 	button.addEventListener("click", function () {
// 		var counter = button.value === "displayIngredients" ? counterIngredients : counterInstruction;
// 		if (counter < lengthOfStuff - 1) {
// 			counter++;
// 			listOfStuff.children[counter].style.display = "revert";
// 		}
// 		if (counter >= lengthOfStuff) counter = lengthOfStuff - 1;
// 		if (button.value === "displayIngredients") {
// 			counterIngredients = counter;
// 		} else {
// 			counterInstruction = counter;
// 		}
// 	});
// }

// function hideStuff(button, listOfStuff) {

// 	button.addEventListener("click", function () {
// 		var counter = button.value === "removeIngredients" ? counterIngredients : counterInstruction;
// 		if (counter >= 0) {
// 			listOfStuff.children[counter].style.display = "none";
// 			counter--;
// 		}
// 		if (counter < 0) counter = -1;
// 		if (button.value === "removeIngredients") {
// 			counterIngredients = counter;
// 		} else {
// 			counterInstruction = counter;
// 		}
// 	});
// }


$(document).ready(function () {

	//Previous assignment recreated
	var counterIngredients = -1;
	var counterInstruction = -1;

	var extraIngredients = 0;
	var extraCounter = 0;

	var dynLengthIngredients = 0;
	var dynLengthInstructions = 0;

	$("#addButton").click(function (event) {//adding the click function
		var toAdd = $("#newIngredient").val();//get the value
		if (toAdd.length > 0) {//check if length works
			$("#listOfIngredients").append('<li>' + toAdd + '</li>');//create an li element and append
			$("#newIngredient").val("");//replace with blank
			dynLengthIngredients++;
			extraIngredients++;
		}
		return false;
	})

	$("#addIns").click(function (event) {//adding the click function
		var toAdd = $("#newInstruction").val();//get the value
		if (toAdd.length > 0) {//check if length works
			$("#listOfInstructions").append('<li>' + toAdd + '</li>');//create an li element and append
			$("#newInstruction").val("");//replace with blank
			dynLengthInstructions++;
			counterInstruction++;
		}
		return false;
	})





	//Get the DOM object using the id from jquery methods
	var showIngredients = $("#showIngredients");
	var showInstruction = $("#showInstruction");
	var hideIngredients = $("#hideIngredients");
	var hideInstructions = $("#hideInstructions");


	// create "handles" on the lists
	var listOfIngredients = $("#listOfIngredients");
	var listOfInstructions = $("#listOfInstructions");

	// get the lengths of the lists
	dynLengthIngredients = listOfIngredients.children().length;
	dynLengthInstructions = listOfInstructions.children().length;

	initiateDisplayNone(listOfIngredients);
	initiateDisplayNone(listOfInstructions);

	//tried to add the function directly but it would execute it because of sending arguments
	showIngredients.click(function (event) {//calls appropriate function with unique id
		showStuff("displayIngredients", listOfIngredients);
	});

	showInstruction.click(function (event) {//calls appropriate function with unique id
		showStuff("displayInstruction", listOfInstructions);
	});

	hideIngredients.click(function (event) {//calls appropriate function with unique id
		hideStuff("removeIngredients", listOfIngredients)
	});

	hideInstructions.click(function (event) {//calls appropriate function with unique id
		hideStuff("removeInstruction", listOfInstructions)
	});


	function initiateDisplayNone(obj) {//calls children elements and hides them
		$(obj.children()).hide();
	}

	function showStuff(valueOfString, listOfStuff) {
		var counter = valueOfString === "displayIngredients" ? counterIngredients : counterInstruction;//checks which list
		var lengthOfStuff = valueOfString === "displayIngredients" ? dynLengthIngredients : dynLengthInstructions;//checks which list
		if (counter < lengthOfStuff - 1) {
			counter++;
			$(listOfStuff.children().get(counter)).show();
		}
		if (counter >= lengthOfStuff) counter = lengthOfStuff - 1;
		if (valueOfString === "displayIngredients") {
			counterIngredients = counter;
		} else {
			counterInstruction = counter;
		}
	}


	function hideStuff(buttonID, listOfStuff) {
		var counter = buttonID === "removeIngredients" ? counterIngredients : counterInstruction;
		if (counter >= 0) {
			$(listOfStuff.children().get(counter)).hide();
			counter--;
		}

		if (counter < 0) {
			$(listOfStuff.children()).hide();//remove all added elements at once
			counter = -1;
		}
		if (buttonID === "removeIngredients") {
			counterIngredients = counter;
		} else {
			counterInstruction = counter;
		}
	}


});

