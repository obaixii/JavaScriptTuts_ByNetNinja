var num = 1;

for(i=0; i < 10; i++){
    if(i===3 || i===5){
        continue;
    }
    console.log(i)

    if(i===7){
        break;   
    }
}
console.log("the loop is broken")
