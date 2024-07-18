//Destructing of object and array
//               0        1     2      3
let names = ["chinmay","amol","raj","satish"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])


//program
//            0        1    2       3
names =  ["chinmay","amol","raj","satish"]
let[a1,a2,a3,a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

//program

fruits = ["apple","mango", "banana","grapes"]
let[b1,b2,b3,b4] = fruits
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)

//program
//             
//                     0                    1                    2
//                 0       1           0        1           0         1
let states = [["nagpur","wardha"],["jaipur","udaipur"],["kanpur","lucknow"]]

console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][0])

let [[a11,a22],[a33,a44],[a55,a66]] = states
console.log(a55)
console.log(a22)

//program

let info = {
    "firstName":"chinmay",
    "lastName" :"deshpande"

}
let{firstName,lastName}= info
console.log(firstName)
console.log(lastName)







