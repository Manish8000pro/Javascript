// let obj = {
//     a: 1 ,
//     b: "Harry"
// }
// console.log(obj)

// let aninmal = {
//     eats: true
// };

// let rabbit = {
//     jump:true
// };

// rabbit._proto_ = animal; //sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Objected is created...")
    }
    eats() {
        console.log("Khaa rha hoon")
    }
    jumps() {
        console.log("Kood rha hoon")
    }
}

class lion extends Animal{
    constructor(name) {
        super(name)
        console.log("Objected is created and he is a lion...")
    }

    eats() {
        super.eats()
        console.log("Khaa rha hoon roar")
    }
}

let a = new Animal("Bunyy");
console.log(a)

let l = new lion("Shera")
console.log(l)