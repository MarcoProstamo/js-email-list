// # Selecting DOM Elements
const emailListEl = document.querySelector("#emailList");

// # Var Init
const emailNumber = 10;
let emailHtml = ``;

for (let i = 0; i < emailNumber; i++) {
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
