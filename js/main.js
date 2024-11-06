// # Selecting DOM Elements
const generateSingleEmail = document.querySelector("#generateSingleEmail");
const generateListEmail = document.querySelector("#generateListEmail");
const emailListEl = document.querySelector("#emailList");

// # Var Init
const emailNumber = 10;

// # Fn
function requestSingleEmail() {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      emailListEl.innerHTML += `
                <li class="list-group-item text-bg-secondary border-dark">${data.response}</li>
                `;
    })
    .catch((error) => {
      console.error(error);
    });
}

function requestListEmail() {
  for (let i = 0; i < emailNumber; i++) {
    requestSingleEmail();
  }
}

// # On Load
addEventListener("load", requestListEmail);

// # Email Generation Via Button
generateSingleEmail.addEventListener("click", () => {
  emailListEl.innerHTML = "";
  requestSingleEmail();
});

generateListEmail.addEventListener("click", () => {
  emailListEl.innerHTML = "";
  requestListEmail();
});
