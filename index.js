function clr(){
    document.querySelector("#textval").value = ""
}

function display(obj){
    document.querySelector("#textval").value += obj
}

function evaluate(){
    let x = document.getElementById("textval").value
    let y = eval(x)
    document.getElementById("textval").value = y
}