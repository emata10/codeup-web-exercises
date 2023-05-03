"use strict";

//1. Warmup:
function seven() {
	return 7;
}

console.log(seven());
console.log(seven());

//2. Write a function that takes in a number and returns an array of numbers that are divisible within the argument.
// If the value provided is not a number, the function should return false.

function findFactors(num) {
	if (typeof num === "number" && !isNaN(num)) {
		let bucket = [];
		for (let i = 1; i <= num; i++) {
			if (num % i === 0) {
				bucket.push(i);
			}
		}
		return bucket;
	} else {
		return false;
	}
}

console.log(findFactors(6)); // returns [1,2,3,6];
console.log(findFactors(16)); // returns [1,2,4,8,16];
console.log(findFactors(0)); // returns [];
console.log(findFactors(true)); // returns false;
console.log(findFactors("13")); // returns false;
console.log(findFactors([54, 72, 144])); // returns false;
console.log(findFactors()); // returns false;

//3. May 2.
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument.
// The count should be case insensitive. If the string does not contain any'e's it should return 0. If the
// argument is not a string it should return false.

function countEs(str) {
	let(str){} string.toLowerCase()
	{
		return undefined;
	}
	let normalizedStr = str.toLowerCase()
	for (let i = 0; i < str.length; i++) {
		if (normalizedStr.charAt(i) === "e") {
			count++;
		}
	}
	return count;

}


console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

// 4. May 3,2023 // Write a function that takes in a string and counts the instances of the letter 'e' within the argument.
// The count should be case-insensitive. If the string does not contain any 'e's it should return 0. If the argument is
// not a string it should return false.
function containsE(str) {
	if(countEs(str) === false) {
		return false
	} else {
		return countEs(str) > 0
	}
}



console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

