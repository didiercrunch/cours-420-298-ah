document.getElementById("main-title").innerText = "Los Statisticos (sans loop)";

function isNumber(str) {
    return str !== "" && !isNaN(str);
}

function countNumberOfNumericValues(value1, value2, value3, value4){
    let ret = 0;
    if(isNumber(value1)){
        ret = ret + 1;
    }
    if(isNumber(value2)){
        ret = ret + 1;
    }
    if(isNumber(value3)){
        ret = ret + 1;
    }
    if(isNumber(value4)){
        ret = ret + 1;
    }
    return ret;
}

function sumSquareOfNumberOfNumericValues(value1, value2, value3, value4){
    let ret = 0;
    if(isNumber(value1)){
        ret = ret + parseFloat(value1) * parseFloat(value1);
    }
    if(isNumber(value2)){
        ret = ret + parseFloat(value2) * parseFloat(value2);
    }
    if(isNumber(value3)){
        ret = ret + + parseFloat(value3) * parseFloat(value3);
    }
    if(isNumber(value4)){
        ret = ret + + parseFloat(value4) * parseFloat(value4);
    }
    return ret;
}
function sumNumberOfNumericValues(value1, value2, value3, value4) {
    let ret = 0;
    if(isNumber(value1)){
        ret = ret + parseFloat(value1);
    }
    if(isNumber(value2)){
        ret = ret + parseFloat(value2);
    }
    if(isNumber(value3)){
        ret = ret + + parseFloat(value3);
    }
    if(isNumber(value4)){
        ret = ret + + parseFloat(value4);
    }
    return ret;
}

function averageNumericValues(value1, value2, value3, value4) {
    let n = countNumberOfNumericValues(value1, value2, value3, value4);
    let sum = sumNumberOfNumericValues(value1, value2, value3, value4);
    return sum / n;
}

fun

function averageSquareOfNumericValues(value1, value2, value3, value4) {
    let n = countNumberOfNumericValues(value1, value2, value3, value4);
    let sumOfSquare = sumSquareOfNumberOfNumericValues(value1, value2, value3, value4);
    return sumOfSquare / n;
}

function standardDeviationOfNumericValues(value1, value2, value3, value4) {
    let avg = averageNumericValues(value1, value2, value3, value4);
    let avgOfTheSquare = averageSquareOfNumericValues(value1, value2, value3, value4);
    return Math.sqrt(avgOfTheSquare - avg * avg);

}

function exo1b() {
    let input1 = document.getElementById("input-1").value;
    let input2 = document.getElementById("input-2").value;
    let input3 = document.getElementById("input-3").value;
    let input4 = document.getElementById("input-4").value;


    let numericValuesInInputBoxes = countNumberOfNumericValues(input1, input2, input3, input4);
    document.getElementById("result-box-1").innerText = numericValuesInInputBoxes;
}


function exo1c() {
    let input1 = document.getElementById("input-1").value;
    let input2 = document.getElementById("input-2").value;
    let input3 = document.getElementById("input-3").value;
    let input4 = document.getElementById("input-4").value;


    let avg = averageNumericValues(input1, input2, input3, input4);
    document.getElementById("result-box-2").innerText = avg;
}


function exo1d() {
    let input1 = document.getElementById("input-1").value;
    let input2 = document.getElementById("input-2").value;
    let input3 = document.getElementById("input-3").value;
    let input4 = document.getElementById("input-4").value;


    let standardDeviation = standardDeviationOfNumericValues(input1, input2, input3, input4);
    document.getElementById("result-box-3").innerText = standardDeviation;
}
