let switchOnOff = false
let newNumber = "";
function clickBtn(number) {
    if (switchOnOff) {
        ((display.innerHTML == '0.') || (display.innerHTML == 0 && number=='.')|| (display.innerHTML!=0) )?display.innerHTML +=number:display.innerHTML = number
    }
}
function calculate() {
    if (switchOnOff) {
        let answer = eval(display.innerHTML)
        displayanswer.innerHTML = answer
        localStorage.setItem("number", answer)
    }
    else {
        displayanswer.innerHTML=""
    }
}
function cubeRoot(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.cbrt(display.innerHTML)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function squareRoot(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.sqrt(display.innerHTML)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function on() {
    switchOnOff = true
    display.innerHTML = 0
}
function off() {
    switchOnOff = false
    display.innerHTML = ""
    displayanswer.innerHTML = ""
}
function powerBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.pow(display.innerHTML,2)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function cubePowerBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.pow(display.innerHTML,3)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function powerBtnNegative(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.pow(display.innerHTML,-1)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function sinBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.sin(display.innerHTML * Math.PI/180)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function cosBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.cos(display.innerHTML * Math.PI/180)
        localStorage.setItem("number",displayanswer.innerHTML)
        if (display.innerHTML==90) {
            displayanswer.innerHTML="0"
            localStorage.setItem("number",displayanswer.innerHTML)
        }
    } else {
        display.innerHTML=""
    }
}
function tanBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.tan(display.innerHTML * Math.PI/180)
        localStorage.setItem("number",displayanswer.innerHTML)
        if (display.innerHTML==90) {
            displayanswer.innerHTML="Math Error"
        }
    } else {
        display.innerHTML=""
    }
}
function logBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=Math.log10(display.innerHTML)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function percentBtn(){
    if (switchOnOff) {
        displayanswer.innerHTML=(display.innerHTML/100)
        localStorage.setItem("number",displayanswer.innerHTML)
    } else {
        display.innerHTML=""
    }
}
function sinInverseBtn(){
    if (switchOnOff) {
        let result=Math.asin(display.innerHTML)
        displayanswer.innerHTML=(result*180/Math.PI)
        localStorage.setItem("number",displayanswer.innerHTML)
        if (display.innerHTML<-1 || display.innerHTML>1) {
            displayanswer.innerHTML="Math Error"
        }
    } else {
        display.innerHTML=""
    }
}
function cosInverseBtn(){
    if (switchOnOff) {
        let result=Math.acos(display.innerHTML)
        displayanswer.innerHTML=(result*180/Math.PI)
        localStorage.setItem("number",displayanswer.innerHTML)
        if (display.innerHTML<-1 || display.innerHTML>1) {
            displayanswer.innerHTML="Math Error"
        }
    } else {
        display.innerHTML=""
    }
}
function tanInverseBtn(){
    if (switchOnOff) {
        let result=Math.atan(display.innerHTML)
        displayanswer.innerHTML=(result*180/Math.PI)
        localStorage.setItem("number",displayanswer.innerHTML)
        if (display.innerHTML<-1 || display.innerHTML>1) {
            displayanswer.innerHTML="Math Error"
        }
    } else {
        display.innerHTML=""
    }
}
function pieBtn(){
    if (switchOnOff) {
        if (display.innerHTML==0) {
            display.innerHTML= Math.PI
            localStorage.setItem("number",display.innerHTML)
        }
        else if (display.innerHTML) {
            display.innerHTML += Math.PI
        } 
        else {
            display.innerHTML=Math.PI
        }
    } else {
        display.innerHTML=""
    }
}
function del() {
    if (switchOnOff) {
        let newValues = display.innerHTML.slice(0, -1)
        if (newValues.length == 0) {
            newValues = 0
        }
        display.innerHTML = newValues
    } else {
        display.innerHTML=""
    }
}
function ac() {
    if (switchOnOff) {
        display.innerHTML = 0
        displayanswer.innerHTML=""
    } else {
        display.innerHTML=""
    }
}
function ans() {
    if (switchOnOff) {

        display.innerHTML =localStorage.getItem("number")
        displayanswer.innerHTML ="" 
    } else {
        localStorage.getItem("number")
        displayanswer.innerHTML =""
        display.innerHTML=""
    }
}
function clock(){
    count=0
    setInterval(() => {
        const d=new Date()
        count++
        document.getElementById("calclock").innerHTML= `<div class="fw-bold text-center mt-2">${d.getHours()>12?d.getHours()-12:d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} </div>`
    }, 1000);
}