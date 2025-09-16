"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let x = 2 + 3 * (2 - 4) * 6;
printOut("Original expression: 2 + 3 * 2 - 4 * 6");
printOut("Modified expression: 2 + 3 * (2 - 4) * 6 = " + x); 
printOut(newLine); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimetresPerMetre = 1000;
const millimetresPerCentimetre = 10;
const millimetresPerInch = 25.4;
 x = ((2 * millimetresPerMetre) + (3 * millimetresPerCentimetre))/25.4;
printOut(x);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const minutesPerHour = 60; // 1 hour = 60 minutes
const minutesPerDay = 24 * minutesPerHour; // 1 day = 1440 minutes
const secondsPerMinute = 60; // 1 minute = 60 seconds
const days = 3; // 3 days
const hours = 12; // 12 hours
const minutes = 14; // 14 minutes
const seconds = 45; // 45 seconds

x = (((days * minutesPerDay) + (hours * minutesPerHour) + minutes) * 60 + seconds)/60;

printOut(x);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalMinutes = 6322.52;
const part4days = Math.floor(totalMinutes / minutesPerDay);
totalMinutes = totalMinutes - (Math.floor(part4days) * minutesPerDay);
const part4hours = Math.floor(totalMinutes / minutesPerHour);
totalMinutes = totalMinutes - (Math.floor(part4hours) * minutesPerHour);
const part4minutes = Math.floor(totalMinutes);
totalMinutes = totalMinutes - Math.floor(totalMinutes);
const part4seconds = Math.floor(totalMinutes * secondsPerMinute);


printOut("6,322.52 minutes is: " + part4days.toString() + " days, " + part4hours.toString() + " hours, " + part4minutes.toString() + " minutes and " + part4seconds.toString() + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const usdToNokRate = 76 / 8.6; // 1 USD to NOK
const usdAmount = 54; // 54 USD
const usdToNok = Math.round(usdAmount * usdToNokRate);
const nokToUSD = Math.round(usdToNok / usdToNokRate);

printOut(usdAmount.toString() + " USD  = " + usdToNok.toString() + " NOK");
printOut(usdToNok.toString() + " NOK = " + nokToUSD.toString() + " USD ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let string = "There is much between heaven and earth that we do not understand.";
let length = string.length;

let char = string.charAt(19);
printOut(char);
let part = string.substr(35, 8);
printOut(part); 

let indexOfEarth = string.indexOf("earth");
printOut("the index of earth" + indexOfEarth);

printOut(length);
printOut(newLine); 



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numb1 = "5";
let numb2 = "3";
let result = numb1 > numb2;
printOut("Is 5 greater than 3?" + result);

numb1 = 7
numb2 = 7
result = numb1 >= numb2;
printOut("Is 7 greater than or equal to 7?" + result);
printOut(newLine);

numb1 = "a"
numb2 = "b"
result = numb1 < numb2;
printOut("Is a greater than b?" + result);

numb1 = 1
numb2 = "a"
result = numb1 < numb2;
printOut("Is 1 less than a?" + result);

numb1 = 2500
numb2 = "abcd"
result = numb1 < numb2;
printOut("Is 2500 less than abcd?" + result);   

numb1 = "arne"
numb2 = "thomas"
result = "arne" !== "thomas";
printOut("Is arne not equal to thomas?" + result);

numb1 = 2
numb2 = 5
result = numb1 === numb2;
printOut("Is 2 equal to 5?" + result);

numb1 = "abcd"
numb2 = "bcd"
result = "abcd" > "bcd";
let isfalse = !result;
printOut("Is abcd greater than bcd?" + result);
printOut("Is abcd not greater than bcd?" + isfalse);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
numb1 = "254";
result = Number("254"); 
printOut(result);

numb1 = "57.23";
result = Number("57.23");
printOut(result);

numb1 = "25 kroner";
result = Number("25 kroner");
printOut(result);

printOut(newLine);
printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
result = r > 1 ; r < 360;
printOut("Random number between 1 and 360: " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const daysInAWeek = 7;

const weeks = Math.floor(totalDays / daysInAWeek);
const remainingDays = totalDays % daysInAWeek;

result = (totalDays + " days = " + weeks + " week(s) and " + remainingDays + " day(s).");

printOut(result);
printOut(newLine);