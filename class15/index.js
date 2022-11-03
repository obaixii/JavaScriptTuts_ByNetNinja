var myAge = 21

// AND Logical Operator
// This operator needs both conditions to be true
if (myAge>=18 && myAge<=30) {
    console.log("(AND says)You are eligible for event")
} else {
    console.log("Sorry, you are not eligible for event")
}

// OR Logical Operator
// This operator need only one condition to be true
if (myAge>=78 || myAge<=32) {
    console.log("(OR says)You are eligible for event")
} else {
}

// NOT Logical Operator
if (myAge>=18 || myAge<=30) {
    console.log("(NOT says)You are eligible for event")
} else {
}
// Ternary Operator
// Works same as if else
//variable = (condition) ? expressionTrue : expressionFalse;
var age = 21
console.log((age < 18) ? "Too young":"Old enough")
