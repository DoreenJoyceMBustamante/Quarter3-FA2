function calculate(op) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = "Please enter valid numbers.";

    if (!isNaN(num1) && !isNaN(num2)) {
        if (op === "+") {
            result = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".";
        } else if (op === "-") {
            result =  "The difference between " + num1 + " and " + num2 + " is " + (num1 - num2) + ".";
        } else if (op === "*") {
            result = "The product of " + num1 + " and " + num2 + " is " + (num1 * num2) + ".";
        } else if (op === "/") {
            if (num2 !== 0) {
                result = "The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2) + ".";
            } else {
                result = "Cannot divide by zero.";
            }
        } else if (op === "%") {
            if (num2 !== 0) {
                result = "The remainder of " + num1 + " divided by " + num2 + " is " + (num1 % num2) + ".";
            } else {
                result = "Cannot find remainder with zero.";
            }
        } else {
            result = "Invalid operation.";
        }
    }

    document.getElementById("result").textContent = result;
}

