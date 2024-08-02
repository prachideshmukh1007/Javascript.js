{/*<h1>Fruits</h1>
    <p Class = "one">Learning updates</p>*/}

// javascript element create
// javascript element update
// javascript element - retrive
// javascript element delete

// attribute

let para = document.querySelector('p')
console.log(para.className)
para.classList.add("two")
console.log(para)

para.classList.remove("one")
console.log(para)

para.classList.toggle("two")
para.classList.toggle("one")
console.log(para)

let idE1 = document.querySelector('#nk')
console.log(idE1)
// retrive the value of attribute
let idV = idE1.getAttribute('id')
let idC = idE1. getAttribute('class')
let idN = idE1 .getAttribute('name')

console.log(idV)
console.log(idC)
console.log(idN)

// update
idE1.setAttribute('id',"nk")
console.log(idE1)

//add
idE1.setAttribute('cy',"data")
console.log(idE1)

//remove
idE1.removeAttribute('id')
console.log(idE1)
