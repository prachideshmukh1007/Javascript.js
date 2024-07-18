//array methods
//    push() , unshift() ,pop() , shift()

//            0        1       2    3
let names= ["ninad","vijeet","ram","raj"]
let q1 = names.push("amol")
console.log(names)
console.log(q1)

//               0         1         2          3
let cities = ["pune","mumbai","bangalore","kolkata"]
let q2 = cities.unshift("nagpur")
console.log(cities)
console.log(q2)

//program

let country = ["india","pakistan","srilanka","bangladesh"]
let q3 =country.pop()
console.log(country)
console.log(q3)

//program

let q4 = country.shift()
console.log(country)
console.log(q4)

//particular elements yes or no...
//program

let namesB = ["chinmay","sarika","amol","amit"]
let q5 = namesB.includes("sarika")
console.log(q5)