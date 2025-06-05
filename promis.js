console.log('This is promises');

let prom1 = new Promise((resolve, rejct) => {
    let a = Math.random();
    if (a < 0.5) {
        rejct("No random number are not supporting you")
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Manish")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, rejct) => {
    let a = Math.random();
    if (a < 0.5) {
        rejct("No random number are not supporting you2")
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Manish 2")
        }, 1000);
    }
})

let p3 = Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a)
})
.catch((err)=>{
    console.log(err)
})