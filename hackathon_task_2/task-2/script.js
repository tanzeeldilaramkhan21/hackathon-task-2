let form = document.getElementById("number-form");
let numbersInput = document.getElementById("numbers");
let resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numbers = numbersInput.value.split(",").map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    resultDiv.textContent = `Minimum: ${min}, Maximum: ${max}`;
});