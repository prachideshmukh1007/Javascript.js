//for loop and while loop

//for(intialization;conditioncheck,increment/decrement){
    //statement
//}

// increment the value of 1 by 1 ----> 1++
//decrement the value of i by 1 ---> i--

for (let i = 1 ; i <= 5 ; i ++){ //2//3//4//5//6
    console.log(i) //1//2//3//4//5
}

//break statement
 
for (let i = 5 ; i >= 1 ; i--){ //4//3
    if(i == 3){
        break
    }
    console.log(i)//5//4
}

//continue with for loop

for(let i = 1 ; i <= 5 ; i++){ //2//3//4//5//6
    if(i == 3){
        continue
    }
    console.log(i) //1//2//4//5
}

//print table of 2 using for loop

for(let i = 2 ; i <= 20 ; i = i + 2){ //4//6//8//10//12//14//16//18//20//22
    console.log(i) //2//4//6//8//10//12//14//16//18//20
}

//print 1 to 5

for(let i = 1 ; i <=5 ; i++){ //2//3//4//5//6
    console.log(i) //1//2//3//4//5
}

//print 3 to 1

for(let i = 3 ; i >= 1 ; i --){ //2//1//0
console.log(i) //3//2//1
}
    
//while loop

//intialization
//while(conditioncheck){
//statement
//increment/decrement
//}

let i5 = 5

while(i5 >= 1){
    console.log(i5) //5//4//3//2//1
    i5 = i5 - 1 //4//3//2//1//0
}

// break statement

let i6 = 1

while(i6 <= 5){
    console.log(i6) //1//2//3
    if(i6 == 3){
        break
    }
    i6 = i6 + 1 //2//3
}

let i7 = 1

while (i7 <= 5){
    if(i7 == 3){
        break
    }
    console.log(i7) //1//2
    i7 = i7 + 1 //2//3
}

//continue with while loop

let i8  = 1 
while(i8 <= 5){
    if(i8 == 3){ //4
        i8 = i8 + 1 //1//2//4//5
        continue
    }
    console.log(i) //2//3//4//5//6
    i8 = i8 + 1
}

//print table of 2

let i4 = 2
while(i4 <= 20){
    console.log(i4) //2//4//6//8//10//12/14//16//18//20
    i4 = i4 + 2 //4//6//8//10//12//14//16//18//20//22
}




