"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtLine1 = "";
let txtLine2 = "";
let b =10;
for (let a = 1, b = 10; a <= 10; a++, b--) {
    txtLine1 += " "+ a.toString();
    txtLine2 += " "+ b.toString();
}
printOut(txtLine1 + newLine);
printOut(txtLine2 + newLine);

printOut(newLine);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let targetNumber = 45; // The number to guess
let guessedNumber = 0; // Initialize guessed number

while (guessedNumber !== targetNumber) {
  guessedNumber = Math.floor(Math.random() * 60) + 1; // Generate a random number between 1 and 60
}
printOut(guessedNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
targetNumber = Math.floor(Math.random() * 1000000) + 1;
guessedNumber = 0; // Initialize guessed number
let startTime = Date.now(); // Start time tracking
while (guessedNumber !== targetNumber) {
  guessedNumber = Math.floor(Math.random() * 1000000) + 1; // Generate a random number between 1 and 1,000,000
}
let endTime = Date.now(); // End time tracking
let timeTaken = endTime - startTime; // Calculate the time taken in milliseconds
printOut(guessedNumber);
printOut("Time taken: " + timeTaken + " milliseconds");

printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let num = 2; num < 200; num++) { // Loop through numbers from 2 to 199
  let isPrime = true; // Assume the number is prime
  let divisor = 2; // Start checking divisors from 2

  while (divisor <= Math.sqrt(num)) { // Only check divisors up to the square root of the number
    if (num % divisor === 0) { // If divisible by any number other than 1 and itself
      isPrime = false; // Set isPrime to false
      break; // Exit the while loop early
    }
    divisor++; // Increment the divisor
  }

  if (isPrime) {
    printOut(num); // Print the number if it's prime
  }
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r = 1; r <= 7; r++) { // Outer loop for rows (R1 to R7)
  let row = ""; // Initialize an empty string for the current row
  for (let k = 1; k <= 9; k++) { // Inner loop for columns (K1 to K9)
    row += `K${k}, R${r}  `; // Append "Kx, Ry" to the row string
  }
printOut(row.trim()); // Print the row after trimming trailing spaces
}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let student1_grade = Math.floor(Math.random() * 236) + 1;
let student2_grade = Math.floor(Math.random() * 236) + 1;
let student3_grade = Math.floor(Math.random() * 236) + 1;
let student4_grade = Math.floor(Math.random() * 236) + 1;
let student5_grade = Math.floor(Math.random() * 236) + 1;

let student1_percentage = (student1_grade / 236) * 100;
let student2_percentage = (student2_grade / 236) * 100;
let student3_percentage = (student3_grade / 236) * 100;
let student4_percentage = (student4_grade / 236) * 100;
let student5_percentage = (student5_grade / 236) * 100;

let student1_letterGrade =
  student1_percentage >= 89
    ? "A"
    : student1_percentage >= 77
    ? "B"
    : student1_percentage >= 65
    ? "C"
    : student1_percentage >= 53
    ? "D"
    : student1_percentage >= 41
    ? "E"
    : "F";

let student2_letterGrade =
  student2_percentage >= 89
    ? "A"
    : student2_percentage >= 77
    ? "B"
    : student2_percentage >= 65
    ? "C"
    : student2_percentage >= 53
    ? "D"
    : student2_percentage >= 41
    ? "E"
    : "F";

let student3_letterGrade =
  student3_percentage >= 89
    ? "A"
    : student3_percentage >= 77
    ? "B"
    : student3_percentage >= 65
    ? "C"
    : student3_percentage >= 53
    ? "D"
    : student3_percentage >= 41
    ? "E"
    : "F";

let student4_letterGrade =
  student4_percentage >= 89
    ? "A"
    : student4_percentage >= 77
    ? "B"
    : student4_percentage >= 65
    ? "C"
    : student4_percentage >= 53
    ? "D"
    : student4_percentage >= 41
    ? "E"
    : "F";

let student5_letterGrade =
  student5_percentage >= 89
    ? "A"
    : student5_percentage >= 77
    ? "B"
    : student5_percentage >= 65
    ? "C"
    : student5_percentage >= 53
    ? "D"
    : student5_percentage >= 41
    ? "E"
    : "F";

    printOut(`Student 1: Grade = ${student1_grade}, Percentage = ${student1_percentage.toFixed(2)}%, Letter Grade = ${student1_letterGrade}`);
    printOut(`Student 2: Grade = ${student2_grade}, Percentage = ${student2_percentage.toFixed(2)}%, Letter Grade = ${student2_letterGrade}`);
    printOut(`Student 3: Grade = ${student3_grade}, Percentage = ${student3_percentage.toFixed(2)}%, Letter Grade = ${student3_letterGrade}`);
    printOut(`Student 4: Grade = ${student4_grade}, Percentage = ${student4_percentage.toFixed(2)}%, Letter Grade = ${student4_letterGrade}`);
    printOut(`Student 5: Grade = ${student5_grade}, Percentage = ${student5_percentage.toFixed(2)}%, Letter Grade = ${student5_letterGrade}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const d1 = Math.floor(Math.random() * 6) + 1;
const d2 = Math.floor(Math.random() * 6) + 1;
const d3 = Math.floor(Math.random() * 6) + 1;
const d4 = Math.floor(Math.random() * 6) + 1;
const d5 = Math.floor(Math.random() * 6) + 1;
const d6 = Math.floor(Math.random() * 6) + 1;

const diceThrow = d1.toString() + d2.toString() + d3.toString() + d4.toString() + d5.toString() + d6.toString();
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
for (let i = 0; i < diceThrow.length; i++) {
  if (diceThrow[i] === '1') {
    c1++;
  }else if (diceThrow[i] === '2') { 
    c2++;
  }else if (diceThrow[i] === '3') { 
    c3++;
  }else if (diceThrow[i] === '4') { 
    c4++;
  }else if (diceThrow[i] === '5') { 
    c5++;
  }else if (diceThrow[i] === '6') { 
    c6++;
  }
}
const countThrow = c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString();
printOut("Dice throw: " + diceThrow);
printOut("Count throw: " + countThrow);
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
