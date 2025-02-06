function getInputs() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    num1 = Number(num1);
    num2 = Number(num2);

    return [num1, num2];
}

// Function to display result
function displayResult(result) {
    const output = document.getElementById("calc-result");
    output.innerHTML = "Result: " + result;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function addNumbers() {
    let [num1, num2] = getInputs();
    displayResult(num1 + num2);
}

function subtractNumbers() {
    let [num1, num2] = getInputs();
    displayResult(num1 - num2);
}

function multiplyNumbers() {
    let [num1, num2] = getInputs();
    displayResult(num1 * num2);
}

function divideNumbers() {
    let [num1, num2] = getInputs();
    if (num2 === 0) {
        displayResult("Cannot divide by zero!");
    } else {
        displayResult(num1 / num2);
    }
}

function powerNumbers() {
    let [base, exponent] = getInputs();
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    displayResult(result);
}

// Clear function
function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("calc-result").innerHTML = "Result: ";
}
