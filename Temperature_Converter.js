function celsiusToFahrenheit(celsius){
    if(typeof celsius !== "number"){
        return `Esto es no es un valor numérico, esto es un ${typeof celsius}`
    }else{
        return (celsius * 1.8) + 32
    }
};

function fahrenheitToCelsius(fahrenheit){
    if(typeof fahrenheit !== "number"){
        return `Esto es no es un valor numérico, esto es un ${typeof celsius}`
    }else{
        return (fahrenheit - 32) / 1.8
    }

};

function formatTemperature(value, unit){
    return `${value} ${unit}`;
    
};

//EXAMPLES OF THIS PROGRAM.

const fahrenheit = celsiusToFahrenheit(25);
const celsius = fahrenheitToCelsius(68);
const freezingFahrenheit = celsiusToFahrenheit(0);
const freezingCelsius = fahrenheitToCelsius(32);


console.log(formatTemperature(fahrenheit, 'F'));
console.log(formatTemperature(celsius, 'C'));
console.log(formatTemperature(freezingFahrenheit, 'F'));
console.log(formatTemperature(freezingCelsius, 'C'));
