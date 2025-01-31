document.write("<pre>");
document.write("FOR LOOP Forward Printing\n");
for (var i = 0; i < 3; i++) {
    document.write(i + "\t");
}
document.write("</pre>");


console.log("FOR LOOP Forwward Printing");
for(var i=0; i<3; i++){
    console.log(i);
}

document.write("<pre>");
document.write("FOR LOOP Reverse Printing\n");
for (var i = 3; i > 0; i--) {
    document.write(i + "\t");
}
document.write("</pre>");

console.log("FOR LOOP Reverse Printing");
for (var i = 3; i > 0; i--) {
    console.log(i);
}

console.log("While Loop Forward Printing");
var j = 0;
while(j<3){
    console.log(j);
    j++
}

console.log("While Loop Reverse Printing");
var j = 3;
while(j>0){
    console.log(j);
    j--;
}

// console.log("Eval Function");
// var d = prompt("Enter the summary");
// console.log(eval(d));

console.log("isNaN Function");
console.log(!isNaN(12));

// console.log("The Prompting value and sum of values");
// var a = prompt("Enter a value: ");
// var b = prompt("Enter a value: ");
// var c = parseInt(a)+parseInt(b);
// console.log(c);


function sayHello(){
    console.log("Calling a Function")
}

sayHello();

// arrow function
var add = (a, b) => a + b;
var answer1 = add(3, 8);
console.log("Two value Addition Function: ",answer1);

// arrow function method overloading
var add = (a,b,c) => a+b+c;
var answer2 = add(3,4,2);
console.log("three value Addition Function: ",answer2);

// function creation
function addition(val1, val2, val3, val4){
    return val1+val2+val3+val4;
}
var answer3 = addition(3,4,2,4);
console.log("Four value Addition Function: ",answer3);

const addElements = (myArray) => {
    let sum = 0
    myArray.forEach(i => {
        sum +=i;
    })
    return sum;
}
console.log(addElements([2,3,4,2,1]));

var arr = [2,3,4,5,3]
console.log("map function")
let compute1 = arr.map(i =>i+1 )
console.log(compute1)
console.log(arr)

console.log("filter function")
let compute2 = arr.filter(i=>i<4)
console.log(compute2)

console.log("some function")
let compute3 = arr.some(i=>i<5)
console.log(compute3)

let testObj = {name:"jhon", age:23}
console.log(testObj.name, testObj.age)

console.log("Spread Operator or Rest Operator")
let arr1 = [...arr, 6,7]
console.log(arr1)

function rest(...value){
    let sum = 0
    value.forEach(i => { sum += i})
    return sum;
}
console.log("Rest Function", rest(arr))

