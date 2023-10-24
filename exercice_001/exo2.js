document.getElementById("main-title").innerText = "Indirections";

function exo1b() {
    let userInput1 = document.getElementById("input-1").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    let userInput4 = document.getElementById("input-4").value;
    let output = userInput1 + userInput2 + userInput3 + userInput4;
    document.getElementById("result-box-1").innerText = output;
}


function exo1c() {
    let userInput = document.getElementById("input-2").value;
    let targetInput = document.getElementById("input-" + userInput).value;

    document.getElementById("result-box-2").innerText = targetInput;
}

function exo1d() {
    let userInput = document.getElementById("input-3").value;
    let target = document.getElementById("button-" + userInput).innerText;

    document.getElementById("result-box-3").innerText = target;
}

function getValueOrInnerHtml(htmlElement) {
    if (htmlElement.innerText !== '') {
        return htmlElement.innerText;
    }
    return htmlElement.value;
}


function exo1e() {
    let userInput = document.getElementById("input-4").value;
    let target = document.getElementById(userInput);

    document.getElementById("result-box-4").innerText = getValueOrInnerHtml(target);
}