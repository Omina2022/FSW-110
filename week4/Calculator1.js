// let myNumber1=25;
// let myNumber2=35;
let oneNum2= document.getElementById('1Num2')
oneNum2.addEventListener('click',function(){
    let one=document.getElementById ("myNumber1")
    let two =document.getElementById("myNumber2")
let result=document.getElementById("addResult")
let add=Number(one.value)+Number(two.value)

result.textContent+=add
})
let threeNum4= document.getElementById('3Num4')
threeNum4.addEventListener('click',function(){
   let three=document.getElementById("myNumber3")
   let four=document.getElementById("myNumber4")
   let result =document.getElementById("subResult")
   let sub =Number(three.value)-Number(four.value)
   result.textContent+=sub
})
let fiveNum6= document.getElementById('5Num6')
fiveNum6.addEventListener('click',function(){
   let five=document.getElementById("myNumber5")
   let six=document.getElementById("myNumber6")
   let result =document.getElementById("multiplyResult")
   let multiply =Number(five.value)*Number(six.value)
   result.textContent+=multiply
})


let sevenNum8= document.getElementById('7Num8')
sevenNum8.addEventListener('click',function(){
   let seven=document.getElementById("myNumber7")
   let eight=document.getElementById("myNumber8")
   let result =document.getElementById("divResult")
   let div =Number(seven.value)/Number(eight.value)
   result.textContent+=div
})





