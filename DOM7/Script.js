let inputT = document.querySelector('input')
let ullist = document.querySelector('ul')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
 let fruitsN = inputT.value
let newE = document.createElement('li') //<li></li>
newE.textContent = fruitsN //<li>papaya</li>
ullist.appendChild(newE)
inputT.value = ""
})