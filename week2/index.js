var newH1=document.createElement("h1")
newH1.textContent="“Welcome to my JS site”"
newH1.style.textAlign="center"
document.body.appendChild(newH1)

var newP = document.createElement("p")
newP.textContent = "“All of this was created with Javascript”"
newP.style.textAlign="center"
document.body.appendChild(newP)

var newListItem= document.createElement("ol")
newListItem.textContent=("List")
document.body.appendChild(newListItem)

var newLiItem1=document.createElement("li")
newLiItem1.textContent=("Practice")
newListItem.appendChild(newLiItem1)

var newLiItem2=document.createElement("li")
newLiItem2.textContent=("Practice")
newListItem.appendChild(newLiItem2)

var newLiItem3=document.createElement("li")
newLiItem3.textContent=("Practice")
newListItem.appendChild(newLiItem3)
