// polymorphism
//inheritance
// encapsulation ----

// program 

// class Human {
//     talk(){
//         console.log("hello hi")
//       }
// }
// class Duck {
//        talk(){
//         console.log("Quack Quack")
//        }
// }

// function call_talk(obj){
//     obj.talk()
// }   

// let amol = new Human()
// let animalOne = new Duck()

// call_talk(amol)
//call_talk(animalOne)

// program 

class Human {
    talk(){
      console.log("hello hi")
    }
}
class Duck {
     talk(){
      console.log('quack quack')
     }
}
class Dog {
  bark(){
   console.log("bow bow")
  }
}

function call_talk(obj){
    if(typeof obj.talk === "function"){
        obj.talk()
    }
    else if(typeof obj.bark === "function")
        obj.bark()
}

let amol2 = new Human()
let animalOne2 = new Duck()
let dogOne = new Dog()

call_talk(amol2)
call_talk(animalOne2)
call_talk(dogOne)

// function declartion

function addition(x ,y) {
    return x + y
}

let a = addition(12 ,4)
console.log(a)

// function expression

let addition2 = function (x , y) {
    return x + y
}

let a2 = addition2(23 ,4)
console.log(a2)

// arrow function

let addition3 = (x ,y) => {
    return x + y
}

let q3 = addition3(23 ,4)
console.log(q3)

// if only 1 statement

let addition4 = (x ,y) => x + y
let q4 = addition4 (3 ,4)
console.log(q4)

// if only one statements one parameter

let addition5 = x => x + x
let q5 = addition5 (3)
console.log(q5)

// lexical scope

function addition() {
    let a = 10
    let b = 20
    console.log(a + b)

    function addition2() {
        let c = 8
        let d = 4
        console.log(c + d)

     function addition3() {
        let e = 19
        console.log(a + b + c + d + e)
     } 
     addition3

    }
    addition2

}
addition()