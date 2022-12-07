let bulb = document.getElementById('bulb')
let btn = document.getElementById('btn')


btn.addEventListener('click', togleBtn)
function togleBtn(){
    if(btn.textContent.includes('On')){
        bulb.src = "./images/ONbulb.png"
        btn.innerHTML = "Turn Off Light"
    }else{
        bulb.src = "./images/OFFbulb.png"
        btn.innerHTML = "Turn On Light"

    }

}


// var myName = "Amar Mishra"
// // String Method
// console.log(myName.includes('Rajan'))
