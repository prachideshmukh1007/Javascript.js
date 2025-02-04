// async vs sync

function additionA(){
           console.log("A")
     }
    
     function additionB(){
         console.log("B")
     }
     additionA()
     additionB()

// program 2

function additionC(){
           setTimeout(() => {
            console.log("C")
          },3000);
     }
    
     function additionD(){
         console.log("D")
     }
    
     additionC()
     additionD()

// program 3

function getInfo(){

    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
         console.log("getId")
     },2000)

     setTimeout(function(){
         console.log("getInfo")
     },1000)

 }
 getInfo()

 
 function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function (){
            console.log("getId")
             setTimeout(function (){
                console.log("getInfo")
             },1000)

        },2000)

    },3000)
}
getInfo()




// program 4

// promises() ------ pending resolve reject

let pro = new Promise(function(resolve, reject) {
    let a = 20
    let b = 20
    if(a == b) {
        resolve("hello")
    }
    else {
        console.log('reject')
        reject("bye")
    }
})

// consumuing the promise
pro.then(function(str){
    console.log(str)

},function(str){
    console.log(str)
})

// program 

let pro2 = new Promise(function(resolve,reject){
    let a = 20
    let b = 20
    if(a == b){
        resolve(11,22,33)
    }
    else {
        reject({firstName : "chinmay"})
    }
})
// consumuing the promise
pro2
.then(function(a){
    console.log(a)  // "hello"
})
.catch(function(b){
    console.log(b) // "bye"
})

// program

let pro3 = new Promise(function(resolve,reject){
    let a = 20
    let b = 2
    if(a == b){
        resolve(11,22,33)
    }
    else {
        reject({firstName : "chinmay"})
    }
})
// consumuing the promise
pro3
.then(function(a){
    console.log(a)  // "hello"
})
.catch(function(b){r
    console.log(b) // "bye"
})


// program 

let pro4 = new Promise(function(resolve,reject){
    let a = 20
    let b = 2
    if(a == b){
        resolve([11,22,33])
    }
    else {
        reject({firstName : "chinmay"})
    }
})
// consumuing the promise
pro4
.then(function(a){
    console.log(a) 
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log("i will always execute...")
})

// program 

let pro5 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve([["NAGPUR","WARDHA",],["PUNE","MUMBAI"],["JAIPUR","UDAIPUR"]])
    }
    else {
        reject("bye")
    }
})

pro5
.then(function(s){
    console.log(s) 
    return s[0]
})

.then(function(s){
    console.log(s) 
    return s[0]
})
.then(function(s){
    console.log(s) 
})
.then(function(b){
    console.log(b) 
})
.finally(function(){
    console.log("i ")
})


