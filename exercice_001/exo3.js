document.getElementById("main-title").innerText = "Los Statisticos";

function isNumber(str) {
    return str !== "" && !isNaN(str);
}

function isInputBoxANumericValue(maxIdValue) {
    let userInput = document.getElementById("input-" + maxIdValue).value;
    return isNumber(userInput);
}

function booleanToNumber(trueOrFalse) {
    if (trueOrFalse) {
        return 1;
    }
    return 0;
}

function countNumberOfNumericValuesInInputBoxes(maxIdValue) {
    const ret = booleanToNumber(isInputBoxANumericValue(maxIdValue));
    if (maxIdValue === 1) {
        return ret;
    }
    return ret + countNumberOfNumericValuesInInputBoxes(maxIdValue - 1);
}

function getInputValueAsNumber(maxIdValue) {
    let userInput = document.getElementById("input-" + maxIdValue).value;
    if(isNumber(userInput)){
        return parseFloat(userInput);
    }
    return 0;

}

function sumNumericValuesInInputBoxes(maxIdValue) {
    if(maxIdValue === 1){
        return getInputValueAsNumber(maxIdValue);
    }
    return getInputValueAsNumber(maxIdValue) + sumNumericValuesInInputBoxes(maxIdValue - 1);
}

function sumOfSquareOfNumericValuesInInputBoxes(maxIdValue){
    let ret = getInputValueAsNumber(maxIdValue) * getInputValueAsNumber(maxIdValue);
    if(maxIdValue === 1){
        return ret;
    }
    return ret + sumOfSquareOfNumericValuesInInputBoxes(maxIdValue - 1);
}

function averageNumericValuesInInputBoxes(maxIdValue) {
    let sum = sumNumericValuesInInputBoxes(maxIdValue);
    let n = countNumberOfNumericValuesInInputBoxes(maxIdValue);
    return sum / n;
}

function averageSquareOfNumericValuesInInputBoxes(maxIdValue) {
    let sumOfSquare = sumOfSquareOfNumericValuesInInputBoxes(maxIdValue);
    let n = countNumberOfNumericValuesInInputBoxes(maxIdValue);
    return sumOfSquare / n;
}

function standardDeviationOfNumericValues(maxIdValue){
    let avg = averageNumericValuesInInputBoxes(maxIdValue);
    let avgOfTheSquare = averageSquareOfNumericValuesInInputBoxes(maxIdValue);
    return Math.sqrt(avgOfTheSquare - avg * avg);
}


function exo1b() {
    let numericValuesInInputBoxes = countNumberOfNumericValuesInInputBoxes(4);
    document.getElementById("result-box-1").innerText = numericValuesInInputBoxes;
}

function exo1c() {
    let avg = averageNumericValuesInInputBoxes(4)
    document.getElementById("result-box-2").innerText = avg;
}

function exo1d() {
    let standardDeviation = standardDeviationOfNumericValues(4)
    document.getElementById("result-box-3").innerText = standardDeviation;
}
