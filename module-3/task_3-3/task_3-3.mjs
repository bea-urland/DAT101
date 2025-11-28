"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(norwegianDate);
}

// Call the function to print the date
printTodaysDate();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const today = new Date();
const releaseday = new Date("May 14, 2025");

printOut(releaseday.getTime());

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleProperties(radius) {
    // Calculate the diameter
    const diameter = 2 * radius;
    // Calculate the circumference
    const circumference = 2 * Math.PI * radius;
    // Calculate the area
    const area = Math.PI * radius * radius;

     // Print the results
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
   
}

const radius = 5;
printCircleProperties(radius);

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let rectangle = {
    width: 10,
    height: 5,
}

function printRectangleProperties(dimensions) {
    const { width, height } = dimensions;


    // Calculate the circumference (perimeter)
    const circumference = 2 * (width + height);
    // Calculate the area
    const area = width * height;

    // Print the results
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}
printRectangleProperties(rectangle);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*
Fahrenheit = (Kelvin − 273.15) × 9/5 + 32
Celsius = Kelvin − 273.15
Celsius = (Fahrenheit − 32) × 5/9
*/
const ETempType = {
    Kelvin: 1,
    Celsius: 2,
    Fahrentheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
    let kelvin = 0, celsius = 0, fahrenheit = 0;

    switch(aTempType){
        case ETempType.Kelvin:
            kelvin = aTemp;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        break;
        case ETempType.Celsius:
            celsius = aTemp
            kelvin = celsius + 273.15;
            fahrenheit = (celsius * 9/5) + 32;
        break;
        case ETempType.Fahrentheit:
            fahrenheit = aTemp;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
        break;
      
    }
    printOut('Convert from %{aTemp} ${ETempType[aTempType]}:');
    printOut('Kelvin: ${kelvin.toFixed(2)}');
    printOut('Celsius: ${celsius.toFixed(2)}');
    printOut('Fahrenheit: ${fahrenheit.toFixed(2)}');
    printOut("");

}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrentheit);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Formula: net = (100 * gross) / (vat + 100)
function Part6CalculateNetAmount(aGrossAmount, aTaxGroup){
    const taxGroup = aTaxGroup.toLowerCase();
    let taxRate = 0;
    printOut(taxGroup);
    switch(taxGroup){
        case "normal": //colon for the case
            break;
        case "food":
            break;
        case "hotel":
        case "transport":
        case "cinema":
            taxRate = 10;
            break;
        default:
            printOut("Error: Unknown tax group!");
            return;

    }
const netAmount = (100* aGrossAmount) / (taxRate + 100);
printOut ('Gross amount: &{aGrossAmount.toFixed(2)}');
printOut ('Tax Group: ${aTaxGroup}, Tax rate: ${taxRate}%');
printOut ('Net amount: ${netAmount.toFixed(2)}');
printOut("");

}

Part6CalculateNetAmount (100,"hotel")
Part6CalculateNetAmount (100,"transport")
Part6CalculateNetAmount (100,"cinema")
Part6CalculateNetAmount (100,"normal")


console.log("hei ");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
