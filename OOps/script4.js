//  parent has constructor also child has constructor

// class Student {

//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 1000
//     displaysalary(){
//         console.log(this.salary)
//     }
// }

// let amol = new Teacher("amol","rao")
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()

// program 

// parent has constructor and child no constructor

// class Student {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

//  class Teacher extends Student {
//     constructor(fn,ln,sal){
//         super(fn,ln)
//         this.salary = sal
//     }

//     displaysalary(){
//         console.log(this.salary)
//     }
// }

// let amolTT = new Teacher("amolTT","RaoTT",34)

// console.log(amolTT.firstName)
// console.log(amolTT.lastName)
// console.log(amolTT.salary)

// amolTT.displayName()
// amolTT.displaysalary()

// program 

// Multi level inheritance

// class GrandFather{

//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayGName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class  Father extends GrandFather {

//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname =ffn
//     }

//     displayFName(){
//         console.log(this.fname + this.lastName)
//     }
// }

// class  Son extends Father{

//     constructor(fn,ln,ffn,ssn){
//         super(fn,ln,ffn)
//         this.sname = ssn
//     }

//     displaySName(){
//         console.log(this.sname + this.lastName)
//     }
// }

// let chinmay = new Son("manohar","deshpande","shirish","chinmay")
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.sname)
// console.log(chinmay.fname)

// chinmay.displayFName()


// program

// herarchical interitance 

class Mother {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayMName(){
        console.log(this.firstName + this.lastName)
    }
}

class Son extends Mother {

    constructor(fn,ln,ssn){
        super(fn,ln)
        this.sname = ssn
    }

}

class Daughter extends Mother {
    constructor(fn,ln,ddn){
        super(fn,ln)
        this.dname = ddn

}

displayDName(){
    console.log(this.dName + this.lastName)
  }

}

let chinmayE = new Son("kanchan","deshpande","chinmay")
let gauriE = new Daughter("kanchan","deshpande","chinmay")
