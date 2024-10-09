// async vs sync

// function addition(){
//       console.log('add 1')
// }

// function addition(){
//     console.log('add 2')
// }
// addition()
// addition2()

// program 2

// function addThree(){
//       setTimeout(function(){
//         console.log('add 3')
//       },3000)
// }

// function addFour(){
//     console.log('add 4')
// }

// addThree()
// addFour()

// program 3

// usercreation------ userid------- userinfo

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


// program 4
// async ----- synchronously execute

// call back hell
// code tightly coupled not resuable

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


