// program 1

// parent has constructor and child no constructor
// parent has constructor also child has constructor
// (single inheritance)
// multilevel interitance
// herarchical interitance 

// single lnheritance

// class Student {
//     constructor(fn,ln,){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolT = new Teacher("amol","rao")

// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.salary)
// amolT.displayName()
// amolT.displaySalary()

// program 2

class Student{

    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class  Teacher extends Student {

    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let amol = new Teacher("amol","rao",10000)
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.salary)

amol.displayName()
amol.displaySalary()