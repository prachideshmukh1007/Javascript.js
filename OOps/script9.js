// lift up state
// derived state

// closures

function cal(){
    console.log("hello")
    let a = 10
    let b = 30
    return a + b
    console.log(a+b)
}
cal(23,4)

 function CalculateDiscount(numT){
    if(numT > 0 && numT <= 5){
        return "10 % discount"
    }

    else if(numT > 5 && numT <= 10){
        return "10 % discount"
    }

    else if(numT > 10){
        return "15 % discount"
    }
}

CalculateDiscount(5)

function Calc(){
    let a = 10
    let b = 5
}

return function(){
    console.log(a + b)
}

//let and const and var


//assigment

let a = 10 
console.log(a)
a = 100
console.log(a)

var h = 8
h = 50
console.log(h)

const j = 33
console.log(j)
j = 888

// scope

// let and const are blocked scope

let b = 10 
{
    let a =100
    console.log(b) //100
}
console.log(b) // 10

// program

let c = 399
{
    c = 900
    console.log(c) // 900
}
console.log(c) // 900

let n = 1000
{
    console.log(n) // 99
    n = 9000
    console.log(n) // 9000
}
console.log(n) // 1000
n = 888
console.log(n) // 888


// program

// const are blocked scope

const h = 100
{
    h = 999
    console.log(h) // 999
}
console.log(h) // 999


// program

const h = 100
{
    const h = 999
    console.log(h) // 999
}
console.log(h) // 100
