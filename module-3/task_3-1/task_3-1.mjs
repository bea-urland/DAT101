"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const wakeUpTime = 9;


 
printOut("Task 1, 2 and 3");
if (wakeUpTime === 7) {
  printOut("I can catch the bus to school.");
}else if (wakeUpTime === 8) {
  printOut("I have to take the train to school.");
}  else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 5; 

if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero"); // Handles the case where the number is 0
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor(Math.random() * 8) + 1; // Math.random() generates a number between 0 and 1

// Print the simulated image size
printOut("Uploaded image size: " + imageSize + "MP");

if (imageSize >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (imageSize >= 6) {
  printOut("Image is too large");
} else if (imageSize >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"
];
const noOfMonth = monthList.length;

// Randomly select a month from the list
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

// Print the randomly selected month
printOut("Selected month: " + monthName);

// Check if the month name contains the letter "r"
if (monthName.toLowerCase().includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) {
case "January":
case "March":
case "May":
case "July":
case "August":
case "October":
case "December":
  printOut("31 days");

break;
case "February":
  printOut("28 days");

break;
case "April":
case "June":
case "September":
case "November":
  printOut("30 days");
  break;
default:
  printOut("Invalid month");
  break;

}


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "March" || monthName === "April" || monthName === "May") {
  printOut("Gallery closed");
  if (monthName === "April") {
    printOut("temporary premises in the building next door");
  }
}else {
  printOut("Gallery open");
}
printOut(newLine);
