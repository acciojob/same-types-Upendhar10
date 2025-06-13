function isSameType(value1, value2) {

	// convert Strings into actual types
	const actualVal1 = parseInput(value1);
	const actualVal2 = parseInput(value2);
	

	// check for NaN explicitly
	if(Number.isNaN(actualVal1) || Number.isNaN(actualVal2)){
		return Number.isNaN(actualVal1) && Number.isNaN(actualVal2);
	}

	// Check if both types are the same
	return typeof(value1) === typeof(value2);
}

function parseInput(value){

	// special handling for NaN
	if(value === "NaN") return NaN;

	try {
		return JSON.parse(value);
	} catch (error) {
		// if it can't be parsed, return as a string
		return value;
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
