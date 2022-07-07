for (let i = 0; i <10; i++) {
 var H1=document.createElement("H1")
 H1.textContent=("Hello World")
 document.body.append(H1)
};


const names = [
  "Steve",
   "Larry", 
   "Joe",
    "Shirley",
     "Steph",
      "Nate",
       "Rick", 
       "Emily"
]

// let nameList="nameList";
// for (let i=0; i<names.length; i++){
//   const name=document.getElementById("demo").innerHTML = nameList;
//   nameList+=names[i]
// }
// const nameList=document.getElementById("name")
// for (const i=0;i<names.lenght; i++){
//   nameList.innerHTML+='<li>'+nameList[i]+'</li>'
// }

let text="Name List:";
for(const x of names){
  text +=x + "<br>";
}
document.getElementById("name").innerHTML = text;