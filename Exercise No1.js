function cleanTheRoom(ArrayFromAbove) {
// Declaring variables
let sortedArray = ArrayFromAbove.sort((a, b) => a - b);
let subArray = [];
let mainArray = [];
let completedArray = [];

// Filtering out numbers and strings

let stringArr = sortedArray.filter((item) => typeof item === 'string');
let numberArr = sortedArray.filter((item) => typeof item === 'number');


	for (var i = 0; i < numberArr.length; i++) {  	//iterating every single array item
		if (numberArr[i] === numberArr[i + 1]) { 	//comparing item to the next one, one by one
			subArray.push(numberArr[i]); 					//pushing the similar items into subArray
		}
		else if (numberArr[i] === numberArr[i - 1]) { //checking the last similar item with the one behind it
			subArray.push(numberArr[i]);					  
			mainArray.push(subArray)					  //pushing subArrays into the main
			subArray = []								  //emptying the subArray to check for other similar items
		} else {
			mainArray.push(numberArr[i])				 //pushing non-similar, single items into the main array
		} 
	}
completedArray.push(mainArray);
completedArray.push(stringArr);

console.log(completedArray);
}