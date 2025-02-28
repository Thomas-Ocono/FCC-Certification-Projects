const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const message = document.getElementById("result");

checkButton.addEventListener("click", () => {
  let toCheck = textInput.value;
  if (toCheck == "") {
    message.innerHTML = "Input something....";
    alert("Please input a value");
  } else {
    let reversed = "";
    for (let i = 1; i < toCheck.length + 1; i++) {
      reversed += toCheck[toCheck.length - i];
    }
    //change both strings to lowercase for accurate comparison, capitals were breaking it
    let checked = toCheck.toLowerCase();
    reversed = reversed.toLowerCase();

    //remove punctuation and spaces from the strings for accurate checking
    //had to use 2 regex because i couldn't remove spaces and punctuation at the same time for some reason
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const regex2 = /\s/g;

    checked = checked.replace(regex, "");
    reversed = reversed.replace(regex, "");
    checked = checked.replace(regex2, "");
    reversed = reversed.replace(regex2, "");

    //check if original string and reversed string match
    if (reversed == checked) {
      message.innerHTML = toCheck + " is a palindrome";
    } else {
      message.innerHTML = toCheck + " is not a palindrome";
    }
  }
});
