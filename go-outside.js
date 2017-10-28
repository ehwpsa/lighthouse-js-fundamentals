var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");




function whichSchool(age){
  if (age < 13){
  	return "Elementary School"
  } else if (age < 18 || age >= 13){
  	return "Secondary School"
  } else {
  	return "Lighthouse Labs"
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

console.log("---------------------------------------------");

function calculateRectangleArea(length, width){
	if (length < 0 || width < 0){
		return undefined;
	} else {
	return length * width;
}
}
function calculateTriangleArea(base, height){
	if (base < 0 || height < 0){
		return undefined;
	} else{
	return base * height / 2;
}
}
function calculateCircleArea(radius){
	if (radius < 0){
		return undefined;
	} else {
	return Math.PI * (radius * radius)
}
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined





