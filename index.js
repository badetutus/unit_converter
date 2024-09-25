
const convertBtn=document.getElementById("convert")

let number = 0
let length = document.getElementById("length1")
let volume = document.getElementById("volume1")
let mass = document.getElementById("mass1")


convertBtn.addEventListener("click",function () {
    number = document.getElementById("number").value
  
    length.innerHTML = ` ${number} meter = ${ (3.2808399*number).toFixed(3)} feet | ${number} feet = ${ (number/3.2808399).toFixed(3)} meter`
    volume.innerHTML =  ` ${number} liters = ${ (0.264172052*number).toFixed(3)} gallons | ${number} gallons = ${ (number/0.264172052).toFixed(3)} liters`
    mass.innerHTML = ` ${number} kilos = ${ (2.20462262*number).toFixed(3)} pounds | ${number} pounds = ${ (number/2.20462262).toFixed(3)} kilos`

})