//  object

// let amol = {
//     firstname : "amol",
//     lastName : "rao",
//     age : 23,
//     rollNo : 34
// }

// let chinmay = {
//     firstname : "chinmay",
//     lastName : "deshpande",
//     age : 12,
//     rollNo : 45
// }

// // 100 object - 400

// class Person {
//     firstname : undefined
//     lastName : undefined
//     age : undefined
//     rollNo : undefined
// }

// let amolA = new Person()
// console.log(amolA)
// amolA.firstname = "amolA"
// amolA.lastName = "raoA"
// amolA .age = 34
// amolA .rollNo = 45
// console.log(amolA)

//constructor

class Person {

    constructor(fn,ln,ag,rn){
        this.firstname = fn
        this.lastName = ln
        this.age = ag
        this.rollno = rn
    }

}

    let students = [
         new Person("amol","rao",34,55),
         new Person("amolB","raoB",33,53),
         new Person("amolC","raoC",33,56),
         new Person("amolD","raoD",33,55)

    ]

    //console.log(students[2].lastname)
    students.forEach(function(el){
        console.log(el.firstName + el.lastName)
    })

    // average age of all students
    let total = students.reduce(function(acc,el){
        return acc + el.age
    },0)
    console.log(total / students.length)

    // let amolC = new Person("amolC",'raoC',34,55)
    //let chinmayC = new Person("chinmayC","deshpande",34,55)
    //console.log(amolC)