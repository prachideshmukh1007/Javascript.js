//array

//array stores the by index
//crud operation - retrive,update,add,delete
let fruits = ["grapes","cherry","pumkin","apple"]

//retrive
console.log(fruits[0])

//update
fruits[0] = "cherry"
console.log(fruits)

//add
fruits.push("chikoo")
console.log(fruits)

//delete
fruits.pop()
console.log(fruits)

//program
//               0        1        2          3
vegetables= ["potato","carrot","cucumber","beetroot"]

//retrive
console.log(vegetables[0])

//update
vegetables[0] = "onion"
console.log(vegetables)

//add
vegetables.push("radish")
console.log(vegetables)

//delete
vegetables.pop()
console.log(vegetables)

//program
//               0      1       2     3
let animals = ["cat","dog","horse","cow"]
console.log(animals.length)
console.log(animals[0])
console.log(animals[1]) 
console.log(animals[2])
console.log(animals[3])

//forward loop
for (let i = 0; i < animals.length; i++)
//    console.log(i)
console.log(animals[i])
