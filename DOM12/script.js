{/*<h1 id = "one" class = "two" name = "nm">Hello</h1>
    <ul>
        <li class ="fr" name = "nm">Cherry</li>
        <li class ="fr" name = "nm">Grapes</li>
        <li class ="fr" name = "nm">Orange</li>
    </ul>
    <input type ="text">
    <button>AddE</button>*/}

    let byId = document.querySelector('#one')
    let byClassName = document.querySelector('.two')
    let headingOne = document.querySelector('h1')
    let byAtt =  document.querySelector("[Name = 'nm']")

    let allLiTag = document.querySelectorAll('li') //nodeList
    let allEbyC = document.querySelectorAll('.fr') //nodeList
    let allElementbyName = document.querySelectorAll("[name = 'nm']")//nodeList

    document.getElementById('one') //html collection
    document.getElementsByClassName('fr')//html collection
    document.getElementsByName('nm') //node List
    document.getElementsByTagName('li')//html collection

    // how to create the element
    // how to retrive the element
    // how to update the element
    // how to delete the element

//<h1 id = "one" class = "two" name = "nm">Hello</h1>

let eleOne = document.querySelector('h1')
console.log(eleOne.className)
eleOne.classList.add('one')
eleOne.classList.add('three')
eleOne.classList.remove('one')
eleOne.classList.toggle('one')

// retrive the attribute's value
// update the attribute's value
// delete the attribute
// add the attribute

let q1 = eleOne.getAttribute('id')
console.log(q1)
let q2 = ele.getAttribute('name')
console.log(q2)

let q3 = ele.setAttribute('id',"four")
console.log(q3)

let q4 = ele.setAttribute('cy',"one")
console.log(q4)

ele.removeAttribute('id')
