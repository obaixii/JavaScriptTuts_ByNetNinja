var links = document.getElementsByTagName("a");

for( let i = 1 ; i <= links.length ; i++){
    console.log("This is Link number " + i)
}
document.write("<br>"+"All links are looped")


var cars = ["BMW","FORD","AUDI","NISSAN",]
console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])

for (let i = 0; i < cars.length; i++) {
    console.log( "Car Looped through FOR LOOP is " + cars[i]);
}
