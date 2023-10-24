document.getElementById("main-title").innerText = "Input Output";

function exo1b(){
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = userInput;
}

function getInputEqualityMessage(input1, input2){
    if(input1 === input2){
        return "input-1 = input-2";
    }
    return "input-1 != input-2";
}

function exo1c(){
    let input1 = document.getElementById("input-1").value;
    let input2 = document.getElementById("input-2").value;

    document.getElementById("result-box-2").innerText = getInputEqualityMessage(input1, input2);
}

function isNumber(str) {
    return str !== "" && !isNaN(str);
}

function getIsNumberMessage(input) {
    if(isNumber(input)){
        return "Number!";
    }
    return "n'est pas un nombre";
}

function exo1d(){
    let input1 = document.getElementById("input-3").value;

    document.getElementById("result-box-3").innerText = getIsNumberMessage(input1);
}

function getSizeMessage(n) {
    if(n < 1000){
        return "plus plus petit que 1000";
    }
    return "plus plus grand que 1000";
}

function getSafeSizeMessage(input) {
    if(!isNumber(input)){
        return "n'est pas un nombre";
    }
    return getSizeMessage(parseInt(input));

}

function exo1e(){
    let input1 = document.getElementById("input-4").value;

    document.getElementById("result-box-4").innerText = getSafeSizeMessage(input1);
}
