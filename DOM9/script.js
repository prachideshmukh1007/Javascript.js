{/* id <h1 id = "one" class = "two" name = "nm">fruits</h1>
    <ul>
    <li class = "fr" name = "nm">Pumkin</li>
    <li class = "fr" name = "nm">Cherry</li>
    <li class = "fr" name = "nm">Banana</li>
    <li class = "fr" name = "nm">Orange</li>
</ul>*/}    

// click , dbclick , mouseover,mousein,mouseout

//why javascript?
// to creat the element
// to update the element
// to retrive the element
// to delete the element

// retrive
// id <h1 id = "one" class = "two" name = "nm">fruits</h1>

let ulList = document.querySelector('ul')
let byId = document.querySelector('#one')
let byClassName = document.querySelector('. two')
let byTagName = document.querySelector('h1')
let byAttr = document.querySelector('h1[name="nm"]')

console.log(byId)
console.log(byClassName)
console.log(byTagName)
console.log(byAttr)

let liOne = document.querySelector('li')
console.log(liOne)

let allLiElement = document.querySelectorAll('li')
console.log(allLiElement)

let allLiElements =document.querySelectorAll('[name = "nm"]')
console.log(allLiElements)

// program 2
// for (let i = 0 ;i < allLiElement.length;i++){
//      // console.log(i)
//       console.log(allliElement[i].textContent)
//       allLielement[i].style.color = "red"
//}
//})

// program 3
// for (let i = 0 ; i < allLiElement.length ; i++){

//   if(i % 2 == 0){
//          allLiElements[i].style.color = "red"
//    }
//   else {
//        allLiElement[i].style.color = "green"
//    }

//  }



// to add the attribute
// to retrive the attribute
// to update the attribute
// to remove the attribute


