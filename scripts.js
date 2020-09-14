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

		for (var i = 0; i < $(listOfStuff.children()).length; i++) {//loop through everything and find one that's not visible
			if (!$(listOfStuff.children().get(i)).is(":visible")) {
				$(listOfStuff.children().get(i)).show();//show that one
				break;
			}
		}
	}


	function hideStuff(buttonID, listOfStuff) {

		for (var i = 0; i < $(listOfStuff.children()).length; i++) {//loop through everything and find one that's visible
			if ($(listOfStuff.children().get(i)).is(":visible")) {
				$(listOfStuff.children().get(i)).hide();//hide that oen
				break;
			}
		}

	}


});

