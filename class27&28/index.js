// Syntax/Notation of Object
// var objectName = {
//     name/key/property : value
// }

// Using the JavaScript Keyword new to Create an Object

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.eyeColor)
console.log(person)

// For readability, simplicity and execution speed, object literal method is preferred.

var myObject = {
    carDriverName : "Obaid",
    carName : "Audi",
    carMaxSpeed : 70,
    carDrive : function(){console.log("Drive car");},
    carAvailable : true ,
    carOwner : undefined ,
    carRenew : null
}

console.log(myObject.carDriverName)
console.log(myObject.carName)
console.log(myObject.carMaxSpeed)
console.log(myObject.carDrive)
console.log(myObject.carAvailable)
console.log(myObject.carOwner)
console.log(myObject.carRenew)
console.log(myObject)
