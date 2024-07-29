let ullist = document.querySelector('ul')
let inputE = document.querySelector('input')
let buttonOne = document.querySelector('#One')

console.log(ulList)
console.log(inputT)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    let fruitText = inputE.value
let newLi = document.createElement('li') //<li></li>
newLi.textContent = fruitText //<li></li>
 creatButtons(newLi)
 uilist.appenChild(newLi)
 input.value = ""
})

ulList.addEventListener('click',function(event){
//    console.log(event.target)
//    console.log(event.target.tagName)
//    console.log(event.target.ClassNme)
    if(event.target.tagName == "BUTTON"){

        if(event.target.ClassName == "remove"){
           let li = event.target.prentElement
           let ulList = li.parentElement
           ulList.removeChild(li)
        }
        else if(event.target.ClassName == "up"){
          let li = event.target.parentElement
          let prevLi = li.previousElementSibling
          let ulList = li.parentElement
          ulList.insertBefore(li,prevLi)  
        }
        else if(event.target.ClassName == "down"){
           let li = event.target.parentElement
           let nextLi = li.nextElementSibling
           let ulList = li.parentElement
           if(nextLi){
            ulList.insertBefore(nextLi,li)
           }
        }
    }
    
})

 function creatButtons(li){
     let r = document.createElement('button') //<button></button>
    r.textContent = "Remove"  //<button>Remove</button>
    r.classList.add('remove') //button class = "remove">Remove</button>
     li.appendChild(r)
 

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)
    

    let d = document.createElement('button')
     d.textContent = "Down"
    d.classList.add('down')
     li.appendChild(d)
 }  
