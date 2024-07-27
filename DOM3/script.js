//<h1 Id = "one" class="two" name = "three">Pratik</h1>

let byTagName = document.querySelector('h1')
let byId = document.querySelector('#one')
let byClass = document.querySelector('.two')
let byName = document.querySelector('h1[name="three"]')

console.log(byTagName)
console.log(byId)
console.log(byClass)
console.log(byName)

//updating name 
//console.log(byName.textContent)
//byName.textContent = "tanmay"

//updating name on useraction

byClass.addEventListener('click',function(){
    byClass.textContent = "tanmay"
})



//info = {
 //   firstName : "onkar",
 //   lastName : "deshmukh"
//}

//info.firstName = "tanmay"

