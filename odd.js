function isOdd(num) {
    return num % 3 === 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));


function ageCalculator(name,yearOfBirth,currentYear){
	var h = currentYear - yearOfBirth;
    return `${name} is ${h} years old.`
    
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

console.log('--------------------------------')

function howManyHundreds(num){
	var h = num / 100;
	return Math.floor(h);
	}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
