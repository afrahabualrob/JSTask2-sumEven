const numbers = document.getElementById("numbers");
const calculateButton = document.getElementById("calculat");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

calculateButton.addEventListener("click", (event) => handleCalculte(event));
clear.addEventListener("click", (event) => clearFieldes(event));

const handleCalculte = (e) => {
  e.preventDefault();
  nums = numbers.value;
  let res = nums
    .split(",")
    .filter((ele) => ele % 2 == 0)
    .reduce((acc, curr) => acc + Number(curr), 0);
  result.innerHTML = e = res;
};

const clearFieldes = (e) => {
  e.preventDefault();
  numbers.value = "";
  result.innerText = "";
};

