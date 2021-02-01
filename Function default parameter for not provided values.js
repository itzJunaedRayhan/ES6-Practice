function add(num1, num2 = 20){
    // if(num2 == undefined){
    //     num2 = 8;
    // }
    // num2 = num2 || 20;
    return num1 + num2;
}
const total = add(12, 8);
console.log(total);