// let numbers = [11,22,33,44,55]
// let a1 = numbers.every(function(el){
//     return el > 20
// })
// console.log(a1)

//let a2 = numbers.some(function(el){
   // return el > 200
//})
//console.log(a2)

// slice()
//               0      1        2        3       4
let fruits = ["apple","mango","banana","orange","grapes"]
//              -5      -4       -3      -2        -1
//fuits.slice(startIndex,endIndex(not included))   // array

//  let q1 = fruits.slice(1)
//  let q2 = fruits.slice(-3)
 console.log(q1)
console.log(q2)
console.log(fruits.slice(1,4))
console.log(fruits.slice(-4,-1))
 console.log(fruits.slice(0,-1))
 console.log(fruits.slice(-4,4))
console.log(fruits.slice(-1,-4))


//splice()
//                0       1        2       3
let fruitsB = ["apple","mango","banana","orange"]
 fruitsB.pop()
 fruitsB.shift()
 console.log(fruitsB)

//fruits.splice(startIndex,numberofToBeDeleted)
 fruitsB.splice(1,1)
 console.log(fruitsB)
 //                 0          1             2        3
 let vegetables = ["potato","cauliflower","brinjal","cucumber"]
 vegetables.splice(2,1,"cabbeg")
 console.log(vegetables)


// sort()

 let names = ["chinmay","ram","abhay","binay","cando"]
 names.sort()
 console.log(names)


// reverse()

let surnames = ["deshpande","dani","deshmukh","dande"]
 surnames.reverse()
console.log(surnames)


//fill()
//            0  1  2  3  4  5  6
//let marks = [97,96,95,94,93,92,91]
//let marks.fill("fill",startIndex,endIndex(not included))
//let q7 = marks.fill("not selected",2,5)
console.log(q7)

//join()

let info = ["chinmay","deshpande","7709192441"]
let q3 = info.join('-')
console.log(q3)


// //concat()

// let marks = [11,22,33]
// let marksB = [44,55,66]

let marksC =marksB.concat(marks)
 console.log(marksC)


//at()   indexOf()
//              0       1         2        3
 let cities = ["pune","nagpur","mumbai","kolkata"]
 let c1 = cities.indexOf('nagpur')
let c2 = cities.indexOf('Nagpur')
console.log(c1)
console.log(c2)

let c3 = cities.at(2)
console.log(c3)

//flat()
//                    0                   1                   2
//               0         1         0         1          0         1
let state = [["mumbai","nagpur"],["jaipur","udaipur"],["lucknow","kanpur"]]

console.log(state[0][1])
console.log(state[2][1])
console.log(state[1][1])
let q4 = state.flat()
console.log(q4)