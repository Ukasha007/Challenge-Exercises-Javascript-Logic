// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns HEX.


function convertToBase(item1, item2, item3) {
	if (typeof item1 === 'string' &&
		typeof item2 === 'string' &&
		typeof item3 === 'string') {

		//Formula for converting hex to dec
		let num1 = parseInt(item1, 16);
		let num2 = parseInt(item2, 16);
		let num3 = parseInt(item3, 16);

		return (`rgb{${num1},${num2},${num3}}`)

	} else if (typeof item1 === 'number' &&
			   typeof item2 === 'number' &&
			   typeof item3 === 'number') {

		//Formula for converting dec to hex
		let num1 = item1.toString(16);
		let num2 = item2.toString(16);
		let num3 = item3.toString(16);

		return "#" + num1 + num2 + num3;

	}
}
