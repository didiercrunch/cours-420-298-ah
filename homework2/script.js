document.getElementById("main-title").innerText = "Les Bases De La Programmation";


function exo2() {
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = userInput;
}

document.getElementById("button-1").onclick = exo2;


function getMessageForExo3(userInput) {
    if (userInput.startsWith("a")) {
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
    if (userInput2.length < userInput3.length) {
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

function allEquals(a, b, c, d) {
    return a === b && b === c && c === d
}

function getMessageForExo5(userInput1, userInput2, userInput3, userInput4) {
    if (allEquals(userInput1, userInput2, userInput3, userInput4)) {
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

function isNumber(x) {
    return x !== "" && !isNaN(x);
}

function getMessageForExo6(userInput) {
    if (!isNumber(userInput)) {
        return "impossible de calculer";
    }
    return (parseFloat(userInput) - 32) * 1.8
}

function exo6() {
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = getMessageForExo6(userInput);
}

document.getElementById("button-5").onclick = exo6;


function getMessageForExo7(userInput) {
    if (!isNumber(userInput)) {
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
    if (isNumber(userInput)) {
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

function valueOrZeroIfNegative(value){
    if(value < 0){
        return 0;
    }
    return value;
}

function getMessageForExo9(userInput1, userInput2, userInput3, userInput4) {
    return valueOrZeroIfNegative(parseFloatOr0(userInput1))
        + valueOrZeroIfNegative(parseFloatOr0(userInput2))
        + valueOrZeroIfNegative(parseFloatOr0(userInput3))
        + valueOrZeroIfNegative(parseFloatOr0(userInput4));
}

function exo9() {
    let userInput1 = document.getElementById("input-1").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    let userInput4 = document.getElementById("input-4").value;
    document.getElementById("result-box-4").innerText = getMessageForExo9(userInput1, userInput2, userInput3, userInput4);
}

document.getElementById("button-8").onclick = exo9;


function translate(word) {
    if (word === 'Lapin') {
        return 'Kuniklo';
    }
    if (word === 'Lapinne') {
        return 'Kuniklino';
    }
    if (word === 'Téléphone Cellulaire') {
        return 'Poŝtelefono';
    }
    if (word === 'Ville') {
        return 'Urbo';
    }
    return 'mot non trouvé';
}

function exo10() {
    let userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = translate(userInput);
}

document.getElementById("button-9").onclick = exo10;


function numberSizeMessage(userInput) {
    if (!isNumber(userInput)) {
        return "N'est pas un nombre";
    }
    if (parseFloat(userInput) >= 1000) {
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


function allNumbers(userInput1, userInput2, userInput3, userInput4) {
    return isNumber(userInput1)
        && isNumber(userInput2)
        && isNumber(userInput3)
        && isNumber(userInput4);
}

function areSorted(number, number2, number3, number4) {
    return number <= number2 && number2 <= number3 && number3 <= number4;
}

function getMessageForExo12(userInput1, userInput2, userInput3, userInput4) {
    if (!allNumbers(userInput1, userInput2, userInput3, userInput4)) {
        return "les données ne sont pas ordonnées";
    }
    const areAllSorted = areSorted(parseFloat(userInput1),
        parseFloat(userInput2),
        parseFloat(userInput3),
        parseFloat(userInput4));
    if(!areAllSorted){
        return "les données ne sont pas ordonnées";
    }
    return "les données sont ordonnées";
}

function exo12() {
    let userInput1 = document.getElementById("input-1").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    let userInput4 = document.getElementById("input-4").value;
    document.getElementById("result-box-3").innerText = getMessageForExo12(userInput1, userInput2, userInput3, userInput4);
}

document.getElementById("button-11").onclick = exo12;


function getMinNumericalValue(userInput1, userInput2, userInput3, userInput4) {
    let minValue = 99999999999999;
    if(isNumber(userInput1) && parseFloat(userInput1) < minValue){
        minValue = parseFloat(userInput1);
    }
    if(isNumber(userInput2) && parseFloat(userInput2) < minValue){
        minValue = parseFloat(userInput2);
    }
    if(isNumber(userInput3) && parseFloat(userInput3) < minValue){
        minValue = parseFloat(userInput3);
    }
    if(isNumber(userInput4) && parseFloat(userInput4) < minValue){
        minValue = parseFloat(userInput4);
    }
    return minValue;
}

function getMaxNumericalValue(userInput1, userInput2, userInput3, userInput4) {
    let maxValue = -99999999999999;
    if(isNumber(userInput1) && parseFloat(userInput1) > maxValue){
        maxValue = parseFloat(userInput1);
    }
    if(isNumber(userInput2) && parseFloat(userInput2) > maxValue){
        maxValue = parseFloat(userInput2);
    }
    if(isNumber(userInput3) && parseFloat(userInput3) > maxValue){
        maxValue = parseFloat(userInput3);
    }
    if(isNumber(userInput4) && parseFloat(userInput4) > maxValue){
        maxValue = parseFloat(userInput4);
    }
    return maxValue;
}

function getMinMaxMessage(userInput, minValue, maxValue){
    if(!isNumber(userInput)){
        return "Pas un nombre";
    }
    if(parseFloat(userInput) === minValue){
        return "Minima";
    }
    if(parseFloat(userInput) === maxValue){
        return "Maxima";
    }
    return "Ni minima, ni maxima";
}

function exo13() {
    let userInput1 = document.getElementById("input-1").value;
    let userInput2 = document.getElementById("input-2").value;
    let userInput3 = document.getElementById("input-3").value;
    let userInput4 = document.getElementById("input-4").value;
    const minValue = getMinNumericalValue(userInput1, userInput2, userInput3, userInput4);
    const maxValue = getMaxNumericalValue(userInput1, userInput2, userInput3, userInput4);


    document.getElementById("result-box-1").innerText = getMinMaxMessage(userInput1, minValue, maxValue);
    document.getElementById("result-box-2").innerText = getMinMaxMessage(userInput2, minValue, maxValue);
    document.getElementById("result-box-3").innerText = getMinMaxMessage(userInput3, minValue, maxValue);
    document.getElementById("result-box-4").innerText = getMinMaxMessage(userInput4, minValue, maxValue);
}

document.getElementById("button-12").onclick = exo13;

