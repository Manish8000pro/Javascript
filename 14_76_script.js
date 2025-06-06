// async function getData() {
      //simulate geeting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

// settle means resolve or reject 
// resolve means promise has settled succesfully 
// reject means promise has not settled succesfully

async function getData() {
    // simulate geeting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json()
    //   console.log(data)
      return data
}

async function main() {

    console.log("loading modules")

    console.log("Do somthing else")

    console.log("load data")

    let Data = await getData()

    console.log(Data)

    console.log("process data")

    console.log("task 2")
}
main()


//     console.log("process data")
//     console.log("task 2")
// Data.then((v) => {
//     console.log(Data)
//     console.log("process data")
//     console.log("task 2")
// })
