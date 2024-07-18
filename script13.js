//methods

let city = "pune"
console.log(city)

// 0  1  2  3
// p  u  n  e
console.log(city[0])

//charAt()

let e1 = city.charAt(0)
console.log(e1)

//concat()

let str1 = "i am learning js"
let str2 = "and also learning python"
let str3 = str1.concat(str2)
console.log(str3)

//includes()

let city2 = "nagpur"
let str4 =city2.includes("nag")
let str5 =city.includes("n")
console.log(str4)
console.log(str5)

//indexOf()

let city4 = "wardha"

//0   1   2   3   4   5
//w   a   r   d   h   a
let e2 = city4.indexOf("A")
console.log(e2)
let e3 = city4.lastIndexOf("a")
console.log(e3)

//replace()

let info = "i am learning javascript"
e4 = info.replace("javascript", "python")
console.log(e4)

//slice()

let city5 = "chandrapur"
//0   1   2   3   4   5   6   7   8   9  
//c   h   a   n   d   r   a   p   u   r
//-10 -9  -8  -7 -6  -5  -4  -3  -2  -1
//city.slice(startIndex,endIndex(not included))

 console.log(city5.slice(2))
 console.log(city5.slice(2,8))
 console.log(city5.slice(-9,8))
 console.log(city5.slice(1,-3))
  console.log(city5.slice(-7))/ console.log(city5.slice(-1,-4))

// startswith()

 let fruits7 = "mango"
let e5 = fruits7.startsWith('m')
let e6 = fruits7.startsWith('Man')
let e7 = fruits7.startsWith('man')
 console.log(e5)
console.log(e6)
console.log(e7)

// endswith()

let city6 = "pune" 
 let e8 = city6.endsWith("e")
 let e9 = city6.endsWith("Ne")
 console.log(e8)
 console.log(e9)

// trim()

 let city7 = " goa " 
 let e10 = city7.trim()
 console.log(e10.length)

//trimstart()

city7 = " goa "
let e11 = city7.trimStart()
console.log(e11.length)

//trimEnd()

city7 = "goa "
let e12 = city7.trimEnd()
console.log(e12.length)

//toUppercase()

let city8 = "wardha"
let e13 = city8.toUpperCase()
console.log(e13)

//toLowercase()

let city9  = "NAGPUR"
let e14 = city9.toLowerCase()
console.log(e14)

//split()

let email ="chinmaydeshpande010@gmail.com"
let e15 = email.split('@')
console.log(e15)

let namee = "chinmaydeshpande"
let e16 = namee.split('a')
console.log(e16)











