var socialMedia= [
    "Instagram","YouTube", "Twitter","Viber","WhatsUp",
]
// var MediaList =document.getElementById("media")
for (var i=0; i<socialMedia.length; i++){
    // MediaList.innerHTML+= '<h2>' +socialMedia[i] + '</h2>'
    var h2=document.createElement("h2")
    h2.textContent= socialMedia[i]
document.body.append(h2)
h2.className="border"

h2.style.color = "cornflowerblue";
h2.style.fontSize ="20px";
h2.style.fontWeight="lighter";
h2.style.fontFamily="sans-serin";
}