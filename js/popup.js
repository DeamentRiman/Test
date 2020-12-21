let correctPersons = document.querySelectorAll(".yellow-button");
var deletePerson = document.querySelector(".red-button");
var addPerson = document.querySelector(".button-add");
var correctBlock = document.querySelector(".page-fix-employee");
var addBlock = document.querySelector(".page-add-employee");
var backToListFix = document.querySelector(".page-fix-employee-back");
var backToListAdd = document.querySelector(".page-add-employee-back");
var saveAddPerson = document.querySelector(".button-fix");
var saveNewPerson = document.querySelector(".button-save");
var pageTable = document.querySelector(".page-table");
var addForm = document.querySelector(".page-add-employee-form");

for (let correctPerson of correctPersons) {
    correctPerson.onclick = function (){
    correctBlock.classList.remove("visually-hidden");
  };
}

backToListFix.addEventListener("click", function (evt) {
  evt.preventDefault();
  correctBlock.classList.add("visually-hidden");
});

addPerson.addEventListener("click", function (evt){
  evt.preventDefault();
  addBlock.classList.remove("visually-hidden");
});

backToListAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  addBlock.classList.add("visually-hidden");
});

addForm.onsubmit = function (evt) {
  evt.preventDefault();
  
  let newPerson = document.createElement("tr");
  newPerson.classList.add('page-table-line');
  pageTable.append(newPerson);
  var name1;
  var surname;
  var buttons;
  name1 = document.getElementById('firstname').value;
  surname = document.getElementById('lastname').value;
  buttons = document.getElementsByName('button');
  var tbody = document.getElementsByTagName("tbody");
  var td1 = document.createElement("td");
  td1.classList.add('page-table-line-first_name');
  var td2 = document.createElement("td");
  td2.classList.add('page-table-line-last_name');
  var td3 = document.createElement("td");
  td3.classList.add('page-table-line-button');

  var yellowButton = document.createElement("button");
  yellowButton.classList.add('button');
  yellowButton.classList.add('yellow-button');
  var redButton = document.createElement("button");
  redButton.classList.add('button');
  redButton.classList.add('red-button');


  newPerson.appendChild(td1);
  newPerson.appendChild(td2);
  newPerson.appendChild(td3);
  td3.appendChild(yellowButton);
  td3.appendChild(redButton);

  td1.innerHTML = name1;
  td2.innerHTML = surname;
  td3.innerHTML = yellowButton+''+redButton;
  };






