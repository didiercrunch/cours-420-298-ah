
document.getElementById("main-title").innerText = "Les Bases De La Programmation";


function exo2() {
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = userInput;
}

document.getElementById("button-1").onclick = exo2;


function getMessageForExo3(userInput) {
    if(userInput.startsWith("a")){
        return "input-2 commence par la lettre 'a'";
    }
    return "input-2 ne commence pas par la lettre 'a'";
}

function exo3() {
    let userInput = document.getElementById("input-2").value;
    document.getElementById("result-box-2").innerText = getMessageForExo3(userInput);
}

document.getElementById("button-2").onclick = exo3;


function getMessageForExo4(userInput2, userInput3) {
    if(userInput2.length < userInput3.length){
        return "input-2 < input-3";
    }
    return "input-2 >= input-3";
}

function exo4() {
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    document.getElementById("result-box-3").innerText = getMessageForExo4(userInput2, userInput3);
}

document.getElementById("button-3").onclick = exo4;

function allEquals(a, b, c, d){
    return a === b && b === c && c === d
}
function getMessageForExo5(userInput1, userInput2, userInput3, userInput4) {
    if(allEquals(userInput1, userInput2, userInput3, userInput4)){
        return "Tout est pareil";
    }
    return "Rien n'est pareil";
}

function exo5() {
    let userInput1 = document.getElementById("input-2").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-2").value;
    let userInput4 = document.getElementById("input-3").value;
    document.getElementById("result-box-4").innerText = getMessageForExo5(userInput1, userInput2, userInput3, userInput4);
}

document.getElementById("button-4").onclick = exo5;

function isNumber(x){
    return x !== "" && !isNaN(x);
}

function getMessageForExo6(userInput) {
    if(!isNumber(userInput)){
        return "impossible de calculer";
    }
    return (parseFloat(userInput) -32) * 1.8
}

function exo6() {
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = getMessageForExo6(userInput);
}

document.getElementById("button-5").onclick = exo6;


function getMessageForExo7(userInput) {
    if(!isNumber(userInput)){
        return "impossible de calculer";
    }
    return Math.abs(parseFloat(userInput));
}

function exo7() {
    let userInput = document.getElementById("input-2").value;
    document.getElementById("result-box-2").innerText = getMessageForExo7(userInput);
}

document.getElementById("button-6").onclick = exo7;

function parseFloatOrDefault(userInput, default_) {
    if(isNumber(userInput)){
        return parseFloat(userInput);
    }
    return default_;
}

function parseFloatOr1(userInput) {
    return parseFloatOrDefault(userInput, 1);
}

function getMessageForExo8(userInput1, userInput2, userInput3, userInput4) {
    return parseFloatOr1(userInput1)
        * parseFloatOr1(userInput2)
        * parseFloatOr1(userInput3)
        * parseFloatOr1(userInput4);
}

function exo8() {
    let userInput1 = document.getElementById("input-1").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    let userInput4 = document.getElementById("input-4").value;
    document.getElementById("result-box-3").innerText = getMessageForExo8(userInput1, userInput2, userInput3, userInput4);
}

document.getElementById("button-7").onclick = exo8;



function parseFloatOr0(userInput) {
    return parseFloatOrDefault(userInput, 0);
}

function getMessageForExo9(userInput1, userInput2, userInput3, userInput4) {
    return parseFloatOr0(userInput1)
        + parseFloatOr0(userInput2)
        + parseFloatOr0(userInput3)
        + parseFloatOr0(userInput4);
}

function exo9() {
    let userInput1 = document.getElementById("input-1").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    let userInput4 = document.getElementById("input-4").value;
    document.getElementById("result-box-4").innerText = getMessageForExo9(userInput1, userInput2, userInput3, userInput4);
}

document.getElementById("button-8").onclick = exo9;


function translate(word){
    if(word === 'Lapin'){
        return 'Kuniklo';
    }
    if(word === 'Lapinne'){
        return 'Kuniklino';
    }
    if(word === 'Téléphone Cellulaire'){
        return 'Poŝtelefono';
    }
    if(word === 'Ville'){
        return 'Urbo';
    }
    return 'mot non trouvé';
}

function exo10() {
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = translate(userInput);
}

document.getElementById("button-9").onclick = exo10;



function numberSizeMessage(userInput){
    if(!isNumber(userInput)){
        return "N'est pas un nombre";
    }
    if(parseFloat(userInput) >= 1000){
        return "Est un grand nombre";
    }
    return "Est un petit nombre";
}

function exo11() {
    let userInput1 = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = numberSizeMessage(userInput1);

    let userInput2 = document.getElementById("input-2").value;
    document.getElementById("result-box-2").innerText = numberSizeMessage(userInput2);

    let userInput3 = document.getElementById("input-3").value;
    document.getElementById("result-box-3").innerText = numberSizeMessage(userInput3);

    let userInput4 = document.getElementById("input-4").value;
    document.getElementById("result-box-4").innerText = numberSizeMessage(userInput4);
}

document.getElementById("button-10").onclick = exo11;


