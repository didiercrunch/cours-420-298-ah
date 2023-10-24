document.getElementById("main-title").innerText = "Le Respectable Rectangle";

function isNumber(str) {
    return str !== "" && !isNaN(str);
}

function changeHeight() {
    let inputHeight = document.getElementById("height").value;
    if(isNumber(inputHeight)){
        document.getElementById("rect").style.height = inputHeight + 'px';
    }
}

function changeWidth() {
    let inputWidth = document.getElementById("width").value;
    if(isNumber(inputWidth)){
        document.getElementById("rect").style.width = inputWidth + 'px';
    }
}

function getRectangleWidth() {
    return document.getElementById("rect").offsetWidth;
}

function getRectangleHeight() {
    return document.getElementById("rect").offsetHeight;
}

function computeArea(width, height) {
    return width * height;
}

function computePerimeter(width, height) {
    return 2 * width + 2 * height;
}

function setRectangleArea(area) {
    document.getElementById("area").innerText = area;
}

function changeArea(){
    let width = getRectangleWidth();
    let height = getRectangleHeight();
    let area = computeArea(width, height);
    setRectangleArea(area);
}

function setRectanglePerimeter(perimeter) {
    document.getElementById("perimeter").innerText = perimeter;
}

function changePerimeter() {
    let width = getRectangleWidth();
    let height = getRectangleHeight();
    let perimeter = computePerimeter(width, height);
    setRectanglePerimeter(perimeter);
}

function changeRectangle(){
    changeHeight();
    changeWidth();
    changeArea();



    changePerimeter();
}