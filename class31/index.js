var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545,10,28,10,30,15);
console.log(myPastDate)
var myFutureDate = new Date(2032,10,28,10,30,15);
console.log(myFutureDate)


var birthday = new Date(1985,10,28,11,15,25)
console.log(birthday)

//Gets the month of the date (0-11) 
console.log(birthday.getMonth())

// Gets the full year (YYYY)
console.log(birthday.getFullYear())

// Get the date of the month (1-31)
console.log(birthday.getDay())

// Get the day of the month (1-7)
console.log(birthday.getHours())

// Get the number of milliseconds since 1st jan 1970
console.log(birthday.getTime())