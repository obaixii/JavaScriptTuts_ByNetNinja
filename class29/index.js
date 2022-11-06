
var myCar = {
    Driver : "Obaid",
    carName : "Audi",
    MaxSpeed : 70,
    Drive : function(speed,time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("Driver name is ".concat(this.Driver))
    }
};

console.log(myCar);
console.log(myCar.MaxSpeed);

myCar.Drive(50,3);
myCar.logDriver();
