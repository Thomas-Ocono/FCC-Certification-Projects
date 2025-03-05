const convertButton = document.getElementById("convert-btn");
const textInput = document.getElementById("number");
const output = document.getElementById("outputi");

convertButton.addEventListener("click", () => {
  let number = textInput.value;
  let answer = "";
  if (number == "") {
    answer = "Please enter a valid number";
  } else if (number < 1) {
    answer = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    answer = "Please enter a number less than or equal to 3999";
  } else {
    while (number >= 1000) {
      number -= 1000;
      answer += "M";
    }
    while (number >= 900) {
      number -= 900;
      answer += "CM";
    }
    while (number >= 500) {
      number -= 500;
      answer += "D";
    }
    while (number >= 400) {
      number -= 400;
      answer += "CD";
    }
    while (number >= 100) {
      number -= 100;
      answer += "C";
    }
    while (number >= 90) {
      number -= 90;
      answer += "XC";
    }
    while (number >= 50) {
      number -= 50;
      answer += "L";
    }
    while (number >= 40) {
      number -= 40;
      answer += "XL";
    }
    while (number >= 10) {
      number -= 10;
      answer += "X";
    }
    while (number >= 9) {
      number -= 9;
      answer += "IX";
    }
    while (number >= 5) {
      number -= 5;
      answer += "V";
    }
    while (number >= 4) {
      number -= 4;
      answer += "IV";
    }
    while (number >= 1) {
      number -= 1;
      answer += "I";
    }
  }
  output.innerHTML = answer;
});
