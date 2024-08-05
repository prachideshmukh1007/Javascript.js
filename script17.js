// object literal

let amol = {
    firstName :"amol",
    lastName :"rao",
    age :  23,
    city :"pune"
}
console.log(amol)

let chinmay = {
    firstName :"chinmay",
    lastName : "deshpande",
    age   : 34,
    city  : "mumbai"
}
console.log(chinmay)

// class

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    city = undefined
}

let amolB = new Person()
let chinmayB = new Person()
console.log(amolB)
console.log(chinmayB)

// object literais

let aryan = {
    firstName : "aryan",
    lastName :"patil" ,
    age : 22,
    rollNo :33
}

let akash = {
     firstName : "akash",
     lastName : "deshmukh",
     age : 25,
     rollNo :36
}

// user defined data type

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}

let akash12 = new Person()
let akash13 = new Person()

console.log(akash12)

akash12.firstName = "akash12"
akash12.lastName = "deshmukh"
akash12['age'] = 25
akash12[rollno] = 36

console.log(akash12)

