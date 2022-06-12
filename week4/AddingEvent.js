const start= document.getElementById('start')
start.addEventListener('mousedown',function(){
start.style.backgroundColor="yellow"
})
start.addEventListener('mouseup', function(){
    start.style.backgroundColor="blue"
})
start.addEventListener('mouseover', function(){
    start.style.backgroundColor="green"
})
start.addEventListener('dblclick', function(){
    start.style.backgroundColor="red"
})
window.addEventListener("load", function() {
    start.style.backgroundColor = "black"
})
window.addEventListener("scroll", function() {
    start.style.backgroundColor = "purple"
})
for(var i=0;i<50;i++){
    var h1 =document.createElement("h1")
    h1.textContent="text"
document.body.append(h1)
}