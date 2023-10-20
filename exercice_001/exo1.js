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