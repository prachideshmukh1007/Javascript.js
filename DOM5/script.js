//<h1>Pratik</h1>

let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')

headOne.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.style.background = "pink"
headOne.textContent = headOne.textContent.toUpperCase()
})
