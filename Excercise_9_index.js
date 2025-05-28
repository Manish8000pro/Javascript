/* create a faulty calculator using Javascript
This faulty calculator does following:

1. It takes two numbers as input from the user
2. It performs wrong oprations as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong oprations 10% of the times 

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter the first number ")
let c = prompt("Enter the opration ")
let b = prompt("Enter the second number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1){
    // performs correct calculation
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
     // performs wrong oorations 

    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}



// second Method

// let a = parseFloat(prompt("enter your 1st number :")) 
// let ops = prompt("enter your operation + - * / :")
// let b = parseFloat (prompt("enter your 2nd number :"))
// let sum = 0;

// console.log(a)
// console.log(ops)
// console.log(b)

// let ran = Math.random();

// if (ran < 0.1) {
//   if (ops =="*") {
//     sum = a + b;
//   } else  if (ops =="+") {
//     sum = a - b;
//   } else if (ops =="-") {
//     sum = a / b;
//   } else if (ops == "/"){
//     sum = a ** b;
//   }
// }



// else{
//     if (ops == "*") {
//         sum = a * b;
//       } else if (ops == "+") {
//         sum = a + b;
//       } else if (ops == "-") {
//         sum = a - b;
//       } else  if (ops=='/'){
//         sum = a / b;
//       }
// }

// console.log(ran)
// alert("answer is " + sum )
// console.log(sum)