// falsy value ========> undefined , null , 0 , "NaN" , 8 > 9
//  truthy value ======>  [ ] , { } , 5 > 3 , true , " " , " a " 


if(undefined){
    console.log("hello")

}
else {
    console.log("bye")

}

// shot circuit

// &&  -  AND

let val = 3 > 2 &&  5 == 6
console.log(val)

let val2 = "chinmay" &&  "deshpande"
console.log(val2)

let val3 = 12 + undefined &&  3 + 3
console.log(val3)

let val4 = 12 + 12  &&  3 + 3 
console.log(val4)

let val5 = "chinmay" &&  7 < 8
console.log(val5)

let index = 0

let val6 = 0 && "chinmay"
console.log(val6)

if(index == 0){
    console.log("chinmay")
}

// || - OR

let val8 = "deshpande"  ||  "chinmay"
console.log(val8)

let val9 = 3 > 4  || 9 > 7
console.log(val9)

let val10 =  0  || "no user"
console.log(val10)

let a
let val11 = 11 < 2 ??  "no user"
console.log(val11)


// null coales

// optional parmeter



// rest and spread


// call , bind apply