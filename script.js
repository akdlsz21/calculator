function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2) {
	return operator(num1, num2);
}

let firstOperand = '';
let secondOperand = '';

let button = document.querySelectorAll('.button-grid');
button.forEach((element) => {
	element.addEventListener('click', (tar) => {
		calculate();
	});
});

function calculate(firstOperand, operator, secondOperand) {
	if (operator == '+') {
		return firstOperand + secondOperand;
	} else if (operator == '-') {
		return firstOperand - secondOperand;
	} else if (operator == '*') {
		return firstOperand * secondOperand;
	} else if (operator == '/') {
		return firstOperand / secondOperand;
	}
}
