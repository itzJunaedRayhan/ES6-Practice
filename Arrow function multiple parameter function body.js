function doubleIt1(num){
    return num * 2;
}
console.log(doubleIt1(2));


const doubleIt2 = function(num){
    return num * 2;
}
console.log(doubleIt2(3));

//  Arrow Function
const doubleIt3 = num => num * 2;
console.log(doubleIt3(5));

const add = (x, y) => x + y;
const result = add(40, 60);
console.log(result);

const give5 = () => 5;
const result2 = give5();
console.log(result2);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);