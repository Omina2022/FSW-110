var form=document.getElementById("MyInfo")
form.addEventListener("submit",myFunction)
function myFunction(event){
    event.preventDefault()
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    // document.getElementById("firstName").innerHTML=i
 
    
    var radio=form["decision"]
    // document.getElementById("decision").innerHTML=i
    console.log(form["decision"])
    //  console.log(radio.value)
    
    
     var age=document.getElementById("myAge").value;
    // document.getElementById("demo").innerHTML=i
    
     
    var dietDiv=document.getElementById("dietary").children;
    // document.getElementById("dietary").innerHTML=i
    console.log(dietDiv)
    var dietList=[]
    for (var i=0; i<dietDiv.length; i++){
        var checkbox=dietDiv[i]
        if(checkbox.checked){
            dietList.push(checkbox.value)
        }
        //     var h2=document.createElement("h2")
        //     h2.textContent= MyInfo[i]
        // document.body.append(h2)
    }

var result=`
Fist Name:${firstName}
Last Name:${lastName}
Previous Customer:${radio.value}
Age:${age}
Diet:${dietList}
`
alert(result)


    }


