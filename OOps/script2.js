// incorrect way
// program 1

// class Students {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     age  = 23
// }

// class Teacher {

//     firstName = "chinmay"
//     lastName = "deshpande"
//     age  = 23
//     salary = 1000

// }
// let amolB = new Teacher()
// console.log(amolB.firstName)
// console.log(amolB.lastName)
// console.log(amolB.age)
// console.log(amolB.salary)


// program 2

class Student {
    firstName = "chinmay"
    lastName = "deshpande"
    age  = 34
}

class Teacher extends Student{
    salary = 1000
}

let chinmayT = new Teacher()
console.log(chinmayT.firstName)
console.log(chinmayT.lastName)
console.log(chinmayT.age)
console.log(chinmayT.salary)