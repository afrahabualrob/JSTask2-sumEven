const numbers = document.getElementById("numbers");
const calculateButton = document.getElementById("calculat");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

calculateButton.addEventListener("click", (event) => handleCalculte(event));
clear.addEventListener("click", (event) => clearFields(event));

const handleCalculte = (e) => {
  e.preventDefault();
  nums = numbers.value;
  let res = nums
    .split(",")
    .filter((ele) => ele % 2 == 0)
    .reduce((acc, curr) => acc + Number(curr), 0);
  console.log(res);
  result.innerHTML = e = res;
};

const clearFields = (e) => {
  e.preventDefault();
  console.log("begfor", numbers.value);
  numbers.value = "";
  result.innerText = "";
  console.log("After", numbers.value);
};

// result.addEventListener("click",()=>{console.log("Hello")})
