// # Selecting DOM Elements
const generateSingleEmail = document.querySelector("#generateSingleEmail");
const generateListEmail = document.querySelector("#generateListEmail");
const inputEmailNumber = document.querySelector("#inputEmailNumber");
const emailListEl = document.querySelector("#emailList");

// # Var Init
const emailNumber = 10;
let emailIndex = 1;
inputEmailNumber.value = emailNumber;

// # Fn
function requestSingleEmail() {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      emailListEl.innerHTML += `
                <li class="list-group-item text-bg-secondary border-dark">Email Numero ${emailIndex}: ${data.response}</li>
                `;
      emailIndex++;
    })
    .catch((error) => {
      console.error(error);
    });
}

function requestListEmail() {
  for (let i = 0; i < inputEmailNumber.value; i++) {
    requestSingleEmail();
  }
}

function resetList() {
  emailListEl.innerHTML = "";
  emailIndex = 1;
}

// # On Load
addEventListener("load", requestListEmail);

// # Email Generation Via Button
generateSingleEmail.addEventListener("click", () => {
  resetList();
  requestSingleEmail();
});

generateListEmail.addEventListener("click", () => {
  resetList();
  requestListEmail();
});
