"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculaterClick(){
  const txtTask1Output = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = parseInt(txtRectHeight.value);
  const width = parseInt(txtRectWidth.value);
  const area = height * width;
  const perimeter = 2 * (height + width);
  txtTask1Output.innerHTML = `width: ${width}, height: ${height}`;
  txtTask1Output.innerHTML += `<br/>area: ${area}, perimeter: ${perimeter}`;
}

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.onclick = cmbTask1CalculaterClick;

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function txtTask2WordKeyPress (aEvent){
  //txtTask2Output.innerHTML = 'You pressed: ${aEvent.key}';
  if (aEvent.key === "Enter"){
    const word = txtTask2Word.value;
    task2Words.push(word);
    txtTask2Output.innerHTML = `You have entered ${task2Words.length} words: <br/>`
    txtTask2Output.innerHTML += txtTask2WordKeyPress.join(" ");
    txtTask2Word.value = "";
}
} 
const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
const task2Words = [];

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");

function cmbTask3CheckAnswerClick(){
  for(let i = 0; i < chkTask3.length; i++){
    const chkBox = chkTask3[i];
    const text = `chkTask3[${i}].checked = ${chkTask3[i].checked}`;
    txtTask3Output.innerHTML += text + "<br/>";
  
  }
}
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function rdbCarNameSelect(aEvent){
  const txtTask40Output = document.getElementById("txtTask4Output");
  txtTask40Output.innerHTML = 
  `User selected car type number: ${aEvent.target.value}`
  console.log(aEvent.target)
}

for(let i = 0; i < CarTypes.length; i++){
  const car = CarTypes[i];
  const inpRadio = document.createElement("input");
  inpRadio.type = "radio";
  inpRadio.name = "rdbCarName";
  inpRadio.value = car.value;
  const lblRadio = document.createElement("label");
  inpRadio.id = "rdbCarName" + i.toString();
  inpRadio.addEventListener("click", rdbCarNameSelect);

  const lblCaption = document.createElement("label");
  lblCaption.for = inpRadio.id;
  lblCaption.appendChild(document.createTextNode(car.caption));
  divTask4Cars.appendChild(inpRadio);
  divTask4Cars.appendChild(lblCaption);
  divTask4Cars.appendChild(document.createElement("br"));
 
  console.log('CarTypes[${i}].value = ${car.value}, CarTypes[${i}].caption = ${car.caption}');

}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const textTask5Output = document.getElementById("textTask5Output");

function SelectedTask5AnimalsChange(){
  const animalValue = selectTask5Animals.value;
  tetTask50Output.innerHTML = "User selected animal number: " + animalValue;
 
}
selectTask5Animals.addEventListener("change", SelectedTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
