// numbers , boolean , string , array , object

// program
//              0        1       2       3        3
let names = ["sarika","rohit","rahul","sachin","saurav"]
console.log(names)
let[n1,n2,n3,n4,n5] = names
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)

let fruits = ["apple","banana","grapes","orange"]
let [f1,f2] = fruits
console.log(f1)
console.log(f2)

let states =  
[["Nagpur","Mumbai"],["Kanpur","Lucknow"],["Jaipur","Udaipur"]]
let [[c1,c2],[c3,c4],[c5,c6]] = states
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)
console.log(c5)
console.log(c6)

// program

let info =  {
    firstName : "chinmay",
    lastName  : "deshpande",
    age  : 23
}

let {firstName,lastName,age} = info
//console.log(firstName)
//console.log(lastName)
//console.log(age)

let {firstName: fn ,lastName:ln,age:ag} = info
console.log(fn)
console.log(ln)
console.log(ag)

// program

let student = {
    studentOne : {
        firstName : "amol",
        lastName : "rao"
    },
    studentTwo :{
        firstName : "rasika",
        lastName :"ubale",
    }
}

let {studentOne: {firstName:f11,lastName:l11},studentTwo:{firstName:f22,lastName:l22}} = student
console.log(f11)
console.log(f22)

// program

let studentss = [
    {
        firstName : "chinmay",
        lastName : "deshpande"
    },
    {
        firstName : "sarika",
        lastName : "pansare"
    }

]

let [{firstName:q1,lastName:r1},{firstName:q2,lastName:r2}] = studentss
console.log(q1)
console.log(r1)
console.log(q2)
console.log(r2)

// program

let info5 = {
    firstName : "chinmay",
    lastName : "deshpande",
    skills : ["python","js"]
}

let {firstName:q11,lastName:lnn,skills:[l1,l2]} = info5
console.log(l1)
console.log(l2)

    
