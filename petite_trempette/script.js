

function add(a, b){
    return a + b;
}
alert(add(103, 198));

function multiply(a, b){
    return a * b;
}
alert(multiply(31, 42));


function convertFahrenheitToCelcius(f){
    return (f - 32) / 1.8;
}

alert(convertFahrenheitToCelcius(100));


function convertCelsiusToKelvin(c){
    return c + 274.15;
}

alert(convertCelsiusToKelvin(75));


function convertFahrenheitToKelvin(f){
    let c = convertFahrenheitToCelcius(f);
    return convertCelsiusToKelvin(c);
}

alert(convertFahrenheitToKelvin(455));


function absolutValue(val){
    if(val < 0){
        return -1 * val;
    }
    return val;
}

alert(absolutValue(32));
alert(absolutValue(-76));

function isMinor(age){
    if(age < 18){
        return ""
    }
    if(age < 21){
        return "la personne est mineur au états-unis";
    }
    return "la personne est majeur"
}

alert(isMinor(16));
alert(isMinor(20));
alert(isMinor(56));


function canRetire(age, experienceYear){
    if(age + experienceYear >= 80){
        return "peut prendre ça retraite";
    }
    if(age + experienceYear >= 70){
        return "presque là";
    }
    return "nope";
}

alert(canRetire(60, 25));
alert(canRetire(50, 25));
alert(canRetire(40, 20));


function trivialFizzBuzz(n){
    if(n < 0){
        return "fizz";
    }
    if(n > 0){
        return "buzz";
    }
    return "fizzBuzz"
}

alert(trivialFizzBuzz(-13));
alert(trivialFizzBuzz(0));
alert(trivialFizzBuzz(52));


function miniFizzBuzz(n){
    if(n % 15 === 0){
        return "fizzBuzz";
    }
    if(n % 3){
        return "fizz";
    }
    if(n % 5){
        return "buzz"
    }
    return ""
}

alert(miniFizzBuzz(6));
alert(miniFizzBuzz(25));
alert(miniFizzBuzz(45));