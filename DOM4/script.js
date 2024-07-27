let headOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

console.log(headOne)
console.log(buttonC)

buttonC.addEventListener('click',function(){
    headOne.textContent = "Onkar"
    headOne.style.color = "blue"
    headOne.style.background = "yellow"
})

let info = {
    fullName : "Onkar",
    parent :{
        mother : "aparna deshmukh",
        father :"popat deshmukh"
    }
};
info.parent.mother = "aparna s deshmukh"
info['parent']['mother'] = "aparna s  deshmukh"