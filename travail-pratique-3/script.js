document.getElementById("main-title").innerText = "Travail Pratique III";


const cities = [
    {"name": "Montreal", "population": 1762949, "country": "Canada"},
    {"name": "Toronto", "population": 2794356, "country": "Canada"},
    {"name": "Vancouver", "population": 662248, "country": "Canada"},


    {"name": "Bogota", "population": 8034649, "country": "Colombie"},
    {"name": "Medellin", "population": 8034649, "country": "Colombie"},


    {"name": "Alger", "population": 3154792, "country": "Algerie"},
    {"name": "Oran", "population": 803329, "country": "Algerie"},

    {"name": "Mexico", "population": 9209944, "country": "Mexique"}

];

const persons = [
    {"name": "Maurice Vachon", "city": "Montreal"},
    {"name": "Jane Munro", "city": "Vancouver"},
    {"name": "Eckhart Tolle", "city": "Vancouver"},
    {"name": "Ingrid Betancourt", "city": "Bogota"},
    {"name": "DJ Pope", "city": "Medellin"},
    {"name": "Djaffar Bensetti", "city": "Oran"}

];

function isNumber(x) {
    return x !== "" && !isNaN(x);
}

function isPositiveInteger(text) {
    return isNumber(text) && parseInt(text) >= 0;
}

function isStrictlyPositiveInteger(text){
    return isPositiveInteger(text) && parseInt(text) !== 0;
}

function sumUpTo(n){
    let sum = 0;
    for(let i = 0; i <= n; i ++){
        sum = sum + i;
    }
    return sum;
}

function sumUpToByStep(step, limit){
    let sum = 0;
    for(let i = 0; i <= limit; i = i + step){
        sum = sum + i;
    }
    return sum;

}

function exo2Message(userInput){
    if(!isPositiveInteger(userInput)){
        return "Entré invalide";
    }
    return sumUpTo(parseInt(userInput));
}

function exo2(){
    const userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = exo2Message(userInput);
}


document.getElementById("button-1").onclick = exo2;

function exo3Message(stepUserInput, limitUserInput){
    if(!isStrictlyPositiveInteger(stepUserInput)){
        return "Entré invalide";
    }
    if(!isStrictlyPositiveInteger(limitUserInput)){
        return "Entré invalide";
    }
    return sumUpToByStep(parseInt(stepUserInput), parseInt(limitUserInput));
}

function exo3(){
    const stepUserInput = document.getElementById("input-1").value;
    const limitUserInput = document.getElementById("input-2").value;
    document.getElementById("result-box-2").innerText = exo3Message(stepUserInput, limitUserInput);
}


document.getElementById("button-2").onclick = exo3;


function exo4Message(city) {
    return getCityByName(city)?.country??"ville non trouvée";
}

function exo4(){
    const userInput = document.getElementById("input-3").value;
    document.getElementById("result-box-3").innerText = exo4Message(userInput);
}


document.getElementById("button-3").onclick = exo4;



function findNumberOfCitiesInCountry(countryName) {
    let n = 0;
    for(let city of cities){
        if(city.country === countryName){
            n = n + 1;
        }
    }
    return n;
}

function exo6(){
    const userInput = document.getElementById("input-1").value;
    document.getElementById("result-box-1").innerText = findNumberOfCitiesInCountry(userInput);
}


document.getElementById("button-5").onclick = exo6;


function findPopulationOfCitiesInCountry(countryName) {
    let population = 0;
    for(let city of cities){
        if(city.country === countryName){
            population = population + city.population;
        }
    }
    return population;
}

function exo7(){
    const userInput = document.getElementById("input-2").value;
    document.getElementById("result-box-2").innerText = findPopulationOfCitiesInCountry(userInput);
}


document.getElementById("button-6").onclick = exo7;

function getCitiesInCountry(country) {
    const ret = [];
    for(const city of cities){
        if(city.country == country){
            ret.push(city);
        }

    }
    return ret;
}

function getLargestCity(cities){
    let largestCity;
    let largestCityPopulation = -1;
    for(const city of cities){
        if(city.population > largestCityPopulation){
            largestCity = city;
            largestCityPopulation = city.population;
        }
    }
    return largestCity;

}

function findLargestCitiesInCountry(country){
    const citiesInCountry = getCitiesInCountry(country);
    if(citiesInCountry.length === 0){
        return "aucune ville trouvée";
    }
    const largestCity = getLargestCity(citiesInCountry);
    return largestCity.name;

}

function exo8(){
    const userInput = document.getElementById("input-3").value;
    document.getElementById("result-box-3").innerText = findLargestCitiesInCountry(userInput);
}


document.getElementById("button-7").onclick = exo8;


function getPersonByName(personName) {
    for(const person of persons){
        if(personName === person.name){
            return person;
        }
    }
}

function getCityByName(cityName) {
    for(const city of cities){
        if(city.name === cityName){
            return city;
        }
    }
    return {};
}

function findCountryOfOrigin(personName){
    const person = getPersonByName(personName);
    if(!person){
        return "aucune personne trouvée";
    }
    return getCityByName(person.city).country
}


function exo9(){
    const userInput = document.getElementById("input-4").value;
    document.getElementById("result-box-4").innerText = findCountryOfOrigin(userInput);
}


document.getElementById("button-8").onclick = exo9;



