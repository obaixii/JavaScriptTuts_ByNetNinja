function getAverage(a,b){
    var average = (a+b) /2; // local variable
    console.log(average)
    return average;
}
var myResult = getAverage(7,11);//Global variable

function logResult(){
    console.log("The average is " + myResult + " inside the funtion")
    // console.log("The average is " + average + " inside the funtion") // output error due to local scope
}
logResult()