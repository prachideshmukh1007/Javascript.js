let inputT = document.querySelector('input')
let headOneT = document.querySelector('h1')
let buttonT = document.querySelector('button')

console.log(inputT)
console.log(headOneT)
console.log(buttonT)

buttonT.addEventListener('click',function(){
    let colorText = inputT.value
    headOneT.style.color = colorText
    inputT.value = ""
})