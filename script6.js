//array 
//array stores the by index
//                0       1       2         3
let  fruits = ["mango","banana","orange","chikoo"]

//array stores the index
//retrive
console.log(fruits[0])

//update
fruits[0] = "banana"
console.log(fruits)

//add
fruits.push("papaya")
console.log(fruits)

//delete
//  ["mango","banana","orange","chikoo","papaya"]
fruits.pop()
console.log(fruits)



//program
//                0       1       2       3      
let animals = ["lion","tiger","rabbit","snake",]
console.log(animals.length)

//for = forword loop

for(let i = 0 ; i < animals.length ; i++){
   // console.log(i)
    console.log(animals[i])
}

//for = reverse loop
//             0       1        2       3
//animals = ["lion","tiger","rabbit","snake"]

for (let i = animals.length - 1 ; i >= 0 ; i --){
   // console.log(i)
   console.log(animals[i])
}

//object
//object --- properties and methodes
//methodes = push,pop,shift,unshift,includes
//properties = length
//              0       1      2       3
let names = ["amol","rahul","sanket","ninad"]
let q1 = names.length
console.log(q1)

//push()
//action - add the element to the last
//return - now length of array
//
let q2 = names.push("nisha")
console.log(q2)
console.log(names)

//unshift()
//action - at the element at the start of array
//return - new length of array

let village = ["pune","mumbai","nagpur","thane"]
let q3 = village.unshift("solapur")
console.log(village)
console.log(q3)

//pop()
//action - removes the last element of array
//return - same element

let vegetable = ["tomato","potato","brinjal","cauliflower"]
let q4 = vegetable.pop()
console.log(q4)
console.log(vegetable)

//shift()
//action - remove the first element of array
//return - same element

let numbers = [111,222,333,444]
let q5 = numbers.shift()
console.log(q5)
console.log(numbers)

//includes()
//action - search the element inside array
//return boolean ---- true if found else false

let cities = ["pune","banglore","kolkata","chennai"]
let q6 = cities.includes("Pune")
console.log(q6)








  






