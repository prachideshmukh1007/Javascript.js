let a = 10
console.log(a)

//array
//              0          1        2      3      4
let names = ["chinmay","sarika","poorva","ram","sham"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

//Array ------ Objects-------properties and method

let q = names.length
console.log(q)

//program
//               0        1       2        3
let fruits = ["apple","mango","banana","orange"]
console.log(fruits.length)
console.log(fruits.length-1)

for (let i = 0 ;i < 4 ; i++){
    console.log(i)  //0,1,2,3
    console.log(fruits[i])
}

for (let i = fruits.length -1;i >= 0; i--){
   console.log(i)
   console.log(fruits[i]) 
}

//program
//                    0         1         2
let vegetables = ["bringal","cabbage","cauliflower"]

for (let i = 0; i = vegetables.length; i ++){
    console.log(i)
     console.log(vegetables[i])
}


for (let i = vegetables.length-1; i <= 0; i--){
    console.log(i)
    console.log(vegetables[i])

}

//while loop

let country = ["india","srilanka","cuba","india"]

let i1 = 0
while(i1 < country.length){
    console.log(i)
    console.log(country[i1])
    i1 = i1 + 1
}
