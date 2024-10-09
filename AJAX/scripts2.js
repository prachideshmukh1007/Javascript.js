// promises() ------ pending resolve reject
//asyn code------ sync ----- without call back hell

let pro1 = new Promise(function(resolve, reject) {
    let a = 10
    let b = 10
    if(a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

// consumuing the promise
pro1.then(function(str){
    console.log(str)

},function(str){
    console.log(str)
})


// program 2

let pro2 = new Promise(function(resolve,reject){
    let firstName = "chinmay"
    if(firstName.length >= 7){
        resolve([11,22,33])
    }
    else {
        reject([-11,-22,-33])
    }
})

pro2
.then(function(a){
    console.log(a[0])
},function(b){
    console.log(b[1])
})


// program 3

let pro3 = new Promise(function(resolve,reject){
    let a = 10
    let b = 100
    if(a == b){
        resolve("hello")
    }
    else {
        reject('bye')
    }
})

pro3
.then(function(str){
    console.log(str)  // "hello"
})
.catch(function(str){
    console.log(str) // "bye"
})

function addition(){

    if(a == 100){
        return 100
    }
    else if(a < 100){
        return "less than 100"
    }
    else {
        return 100
    }

}


// program 4

let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 1
    if(a == b){
        resolve("hello")
    }
    else {
        reject('bye')
    }
})

pro4
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})