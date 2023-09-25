/* exo1 */

/* function validateForm() {
  const form = document.forms["exo3form"];
  const inputs = ["name", "email"];

  let valid = true;

  for (const input of inputs) {
    if (form[input].value === "") {
      alert("${input} ne peux etre vide");
      valid = false;
    }
  }

  let checkbox = document.getElementById("checkbox");

  if (!checkbox.checked) {
    alert("il daut cocher la case");
    valid = false;
  }

  if (valid === true) {
    let valName = document.getElementById("name").value;
    let valEmail = document.getElementById("email").value;
    console.log(valName);
    console.log(valEmail);
  }
} */

/* EXO 3  */
/* function textChangeSelect() {
  let pToChange = document.querySelector(".textToReplace");
  let choice = document.querySelector('#choix');
  let selectedChoice = choice.value;  // Initialisation de selectedChoice

  choice.addEventListener('change', () => {
    selectedChoice = choice.value;
    updateText(pToChange, selectedChoice);
  });

  // Met à jour le texte en fonction du choix sélectionné
  updateText(pToChange, selectedChoice);
} */

/* function updateText(element, choice) {
  if (choice === "option2") {
    element.innerHTML = 'Option 2';
  } else if(choice === "option1") {
    element.innerHTML = 'Option 1';
  }
}  */

/* EXO 4 AUTO COMPLETION */

/* Create the table with possible matches */
/* const data = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", "brown"];
  */
/* Get the results */
/* const autocomplete = document.getElementById("autocomplete");
const resultsHTML = document.getElementById("results");
  */
/*  Output any data matching the users search query into the results list */
/*  autocomplete.oninput = function () {
  
  let results = [];
  const userInput = this.value;
  resultsHTML.innerHTML = "";
  if (userInput.length > 0) {
    results = getResults(userInput);
    resultsHTML.style.display = "block";
    for (i = 0; i < results.length; i++) {
      resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
    }
  }
};  */

/* Get the user input */
/* function getResults(input) {
  const results = [];
  for (i = 0; i < data.length; i++) {
    if (input === data[i].slice(0, input.length)) {
      results.push(data[i]);
    }
  }
  return results;
} 
 */
/* Change the input to the selected autocomplete value */
/* resultsHTML.onclick = function (event) {
  const setValue = event.target.innerText;
  autocomplete.value = setValue;
  this.innerHTML = "";
};  */

/* EXO 5 */

/* let deleteButton = querySelector('#delete'); */
/* let addButton = querySelector('#add');


function addTextField() {
  const form = document.getElementById("formAddRemove");
  form.innerHTML += '<input id="text" type="text"/> <label id="labelText" for="text">Text</label>';
};

function deleteTextField() {
  document.querySelector('#text').remove();
  document.querySelector('#labelText').remove();
}
 */
/* EXO 6 */

let currentStep = 1;

function showStep(step) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    step.classList.remove('active');
    if (index + 1 === currentStep) {
      step.classList.add('active');
    }
  });
}

function nextStep() {
  if (validateStep(currentStep)) {
    if (currentStep === 2) {
      recap();  // Update the recap on the third step
    }
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
}

function validateStep(step) {
  // Add validation logic for each step here
  if (step === 1) {
    const name = document.getElementById('name').value;
    if (!name) {
      alert('Veuillez saisir votre nom.');
      return false;
    }
  } else if (step === 2) {
    const email = document.getElementById('email').value;
    if (!email || !email.includes('@')) {
      alert('Veuillez saisir une adresse email valide.');
      return false;
    }
  }
  return true;
}

function recap() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const summary = `Nom: ${name}<br>Email: ${email}`;
  document.getElementById('summary').innerHTML = summary;
}

function submitForm() {
  alert("You submitted the form!")
}

showStep(currentStep);