console.log("Main loaded")
console.log("werkt")

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getRandomDiceNumber() {
	return getRandomIntInclusive(1, 6);
}

const result1 = getRandomDiceNumber();
const result2 = getRandomDiceNumber();
const result3 = getRandomDiceNumber();
const result4 = getRandomDiceNumber();
console.log("Gegooide dobbelsteen 1:", result1);
console.log("Gegooide dobbelsteen 2:", result2);
console.log("Gegooide dobbelsteen 3:", result3);
console.log("Gegooide dobbelsteen 4:", result4);

