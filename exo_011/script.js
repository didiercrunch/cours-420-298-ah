console.log("hello world")


// question 1.b

let livre = {
    nom: "JS the good part",
    year: 2008,
    price: 19.75,
    publisher: "O reilly"
};

console.log(livre);

function getAttribute(object, key, defaultValue){
    if(Object.hasOwn(object, key)){
        return object[key];
    }
    return defaultValue;
}

let key = "age"
let object = {age: 100};
let defaultValue = 0;
console.log("2.a >> " + getAttribute(object, key, defaultValue)) // 100
console.log("2.a >> " + getAttribute({name: "claudette"}, "name", 0)) // claudette

console.log("2.a >> " + getAttribute({age: 100}, "name", "no name")) // no name
console.log("2.a >> " + getAttribute({name: "claudette"}, "age", 0)) // 0
