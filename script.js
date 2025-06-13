function isSameType(value1, value2) {

	// check for NaN explicitly
	if(Number.isNaN(value1) && Number.isNaN(value2)){
		return true;
	}

	// Check if both types are the same
	return typeof(value1) === typeof(value2);
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
