const userInput = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

check.addEventListener("click", () => {
  let input = userInput.value;
  if (input == "") {
    alert("Please provide a phone number");
  }

  const regex = /\D/g;
  let cleanInput = input.replace(regex, "");

  if (cleanInput[0] == 1 && cleanInput.length == 11) {
    let result = document.createElement("h2");
    result.innerHTML = "Valid US number: " + input;
    results.appendChild(result);
  } else if (cleanInput.length != 10) {
    let result = document.createElement("h2");
    result.innerHTML = "Invalid US number: " + input;
    results.appendChild(result);
  } else {
    let result = document.createElement("h2");
    result.innerHTML = "Valid US number: " + input;
    results.appendChild(result);
  }
});
clear.addEventListener("click", () => {
  results.innerHTML = "";
});
