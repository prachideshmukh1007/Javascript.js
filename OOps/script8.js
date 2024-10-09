// closures 

function greet(){
    return function(){
        console.log("hello")
    }
}

let q1 = greet()
console.log(q1)

function addition() {
    console.log(9 +9) // 18
    return 9 + 9
    console.log("bye")
}

let q2 = addition()
console.log(q2) // 18

function additionD(){
    let a = 10
    let b = 5 
    return function() {
        console.log(a + b)

        }
    }
    let r1 = additionD()

    //let r1 = function(){
    //    console.log(a +b)
    //}
    r1()