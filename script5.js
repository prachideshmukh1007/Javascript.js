// switch case

let city = "pune"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
         console.log("RJ")
    case "bhopal" :
        console.log("MP")
     default:
        console.log("incorrect city name")     
}

//switch case with break

let city2 = "bhopal"
switch(city2){
    case "nagpur":
        console.log("MH")
        break
     case ("jaipur"):
        console.log("RJ") 
        break
        default:
            console.log("incorrect city name")  
}

//multiple cases same output

let city3 = "jaipur"

switch(city3){
    case "pune":
    case "nagpur":
         console.log("MH")
         break 
     case "bhopal":
     case  "indore": 
     case   "ujjain":  
          console.log("MP")
          break
      case "jaipur":
      case  "udaipur":
          console.log("RJ")
           break
       dafault:
       console.log("incorrect city name")  
}

//program
let x1 = 10
let x2 = 5
let x3 = 3

let greatest = true

switch(greatest){

    case x1 > x2 && x1 > x2:
       console.log("x1 is greatest")
       break
    case x2 > x3 && x2 > x1:
        console.log("x2 is greatest")
        break
    default :
        console.log("x3 is greatest")
}


//array

let a = 10
console.log(a)

//define an array
//            0   1  2  3  4
let numbers = [11,22,33,44,55]
//              0          1        2    3
let names = ["chinmay", "shirish", "raj", "satish"]

let studentsGrade = [true,false,true,true]
//              0          1             3        4
let info = ["chinmay", "deshpande" , 7709192441,23,true]

//program
//                0          1           2         3        4
let country = ["India", "Srilanka", "Pakistan", "China", "Bhutan"]
//retrive the value
console.log(country[0])
console.log(country[1])

//program
 //            0          1         2          3         4
let City = ["nagpur", "mumbai", "kolkata", "chennai" ,"raipur"]
//object ----- properties and methods
console.log(City.length)

for (let i = 0 ; i < 5 ;i ++){ //1//2//3//4//5
    //console.log(i) //0//1//2//3//4
    console.log(City[i])
}
 //              0       1        2        3
let fruit = ["apple", "mango", "grapes","chikoo"]

for (let i = 0 ; i < 4 ; i ++){
   // console.log(i)
   console.log(fruit[i])
}

//program
 //                  0        1         2          3
let vegetable = ["tomato", "potato" ,"bringal" ,"onion"]
    
for (let i = 0 ;  i < 4 ; i ++){
     // console.log(i)
      console.log(vegetable[i])
}

for (let i = vegetable.length-1; i >= 0 ;i --){
   // console.log(i)
    console.log(vegetable[i])
}

//while

let i1 = 0
while(i1 < 4){
    console.log(vegetable[i1])
    i1 = i1 + 1
}
 

let i2 = vegetable.length -1
while(i2 >=0){
    console.log(vegetable[i2])
    i2 = i2 - 1
}









  






