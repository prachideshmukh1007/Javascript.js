let inputT = document.querySelector('input')
let ullist = document.querySelector('ul')
let buttonA = document.querySelector('button')

console.log('inputT')
console.log('ullist')
console.log('buttonT')

buttonA.addEventListener('click',function(){
 let fruitsText = inputT.value //<li>papaya</li>
let newLi = document.createElement('li') //<li></li>
newLi.textContent = fruitsText //<li>papaya</li>
ullist.appendChild(newLi)
inputT.value = ""
})