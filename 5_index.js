function nice(name) {
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are good!")
    console.log("Hey "+ name + " your tshirt is nice!")
    console.log("Hey "+ name + " your behaviour is Good to !")
}

 function sum(a,b,c=3) { //c is default value in two sums
    // console.log(a+b)
    console.log(a,b,c)
    return a+b+c
}
result1=sum(3,6)
result2=sum(2,6)
result3=sum(1,5)
result4=sum(3,12,1)

console.log("The sum of these numbers is = ", result1)
console.log("The sum of these numbers is = ", result2)
console.log("The sum of these numbers is = ", result3)
console.log("The sum of these numbers is = ", result4)


const func1 = (x)=>{
    console.log("I am an arrow function ",x)

}

func1(23);
func1(82);
func1(47);