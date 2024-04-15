
//callback function => function pass as an argument
function great(name, callbackName) {
    console.log('hello ' + name);
    callbackName();
}

//simple function
function callMe() {
    console.log("Good morning software engineer .. ");
}

// callMe();

great("roshan", callMe);


// // *********  another example   ***************
const calculator = (a, b, operation) => {
    return operation(a, b);
}

function sum(a, b) {
    return a + b;
}
function min(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}


console.log('sum of 7 , 3 is : ', calculator(7, 3, sum));
console.log('min of 7 , 3 is : ', calculator(7, 3, min));
console.log('mul of 7 , 3 is : ', calculator(7, 3, mul));
console.log('div of 7 , 3 is : ', calculator(7, 3, div));
