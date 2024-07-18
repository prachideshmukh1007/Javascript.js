let students = [
    {
        firstName : "chinmay",
        lastName : "deshpande",
        age    : 34,
        skills :["sql"]
    },
    {
        firstName : "poorva",
        lastName : "vyas",
        age    : 29,
        skills :["javascript","django","cpp"]
    },
    {
        firstName : "amol",
        lastName : "rao",
        age    : 32,
        skills :["python","javascript","sql","power BI"]
    },
    {
        firstName : "amit",
        lastName : "bhure",
        age    : 28,
        skills :["python","jquery"]
    }


    ]
    //console.log(student[0]).firstName)
    //print all firstName

    students.forEach(function(el){
        console.log(el.firstName)
    })

     // print firstName: numbersof skills

      students.forEach(function(el){
         console.log(`${el.firstName}:${el.skills.length}`)
     })

    
     //print firstName of people age < 30
     students.forEach(function(el){
        if(el.age < 30){
            console.log(el.firstName)
        }
     })

      //country : india

       students.forEach(function(el){
     el.country = "india"
     })

     console.log(students)

     //print firstName and lastName

     students.forEach(function(el){
     console.log(`${el.firstName}${el.lastName}`)
    })

    //print name of student with python

    students.forEach(function(el){
     if(el.skills.includes("python")){
         console.log(el.firstName)
     }
    })

    students.forEach(function(el){
     if(el.skills.includes("python")  || el.skills.includes("javascripts")){
         console.log(el.firstName)
     }
    })

    //add htmal skills to every user

    students.forEach(function(el){
        el.skills.push("html")
    })
    console.log(students)
    