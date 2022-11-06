
var myCar = {
    driver : "Obaid",
    carName : "Audi",
    maxSpeed : 70,
    drive : function(speed,time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("Driver name is ".concat(this.driver))
    }
};

var Car = function(driver,carName,maxSpeed){
    this.driver = driver;
    this.carName = carName;
    this.maxSpeed = maxSpeed;
    this.drive = function(speed,time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("Driver name is ".concat(this.driver))
    };
}

var myCar2 = new Car("Ninja",myCar.carName,170)
var myCar3 = new Car("Sham","Nissan",333)
var myCar4 = new Car("Zeeshan","BMW",333)

console.log(myCar)
console.log(myCar2)
console.log(myCar3.maxSpeed +" "+ myCar3.driver)
console.log(myCar4.maxSpeed +" "+ myCar4.driver)
