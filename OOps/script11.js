var firstName = "ninad"
var lastName = "dani"

let chinmay = {
    firstName : "chinmay",
    lastName : "deshpande",
    displayName : function(){

    // this ------> chinmay
    console.log(this.firstName + this.lastName)

    // this ------> window
    function displayName2(){
     console.log(this.firstName + this.lastName)
    }

    displayName2()

    }

}
chinmay.displayName()


//

let om = {
    firstName : "om",
    lastName : "deshpande",

    
        displayName : function(){
          // this -------> om
          console.log(this.firstName + this.lastName)


          let displayName2 = ()=> {
        //  this ------> parent ----- om
        console.log(this.firstName + this.lastName)

          }

          displayName2

        }
        
    }
    om.displayName()


    // this --------> window

    let pratik = {
        firstName : "pratik",
    lastName : "deshpande",

       displayName :() =>{
        //this --- pratik ---- window
        console.log(this.firstName + this.lastName)

        let displayName2 = () => {
            // this ----- displayName ----- window
            console.log(this.firstName + this.lastName)
        }

        displayName2()

       }

    }
    pratik.displayName()

    //

    let amol = {
        firstName : "amol",
        lastName : "rao",
        displayName : () => {

            // this -------> window
            console.log(this.firstName + this.lastName)

            let displayName2 = () => {
                // this ====== window
                console.log(this.firstName + this.lastName)
            }

            displayName2()
        }

    }
    amol.displayName()