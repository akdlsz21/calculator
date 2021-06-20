function add(num1, num2) {
	screen.textContent = num1 + num2;
}

function subtract(num1, num2) {
	screen.textContent = num1 - num2;
}

function multiply(num1, num2) {
	screen.textContent = num1 * num2;
}

function divide(num1, num2) {
	screen.textContent = num1 / num2;
}

function operate(num1, operator, num2) {
	if (operator == '+') {
		return add(num1, num2);
	} else if (operator == '-') {
		return subtract(num1, num2);
	} else if (operator == '*') {
		return mulitply(num1, num2);
	} else if (operator == '/') {
		return divide(num1, num2);
	}
}

let num1 = [];
let operator = '';
let num2 = [];

let button = document.querySelectorAll('.button-grid');
let screen = document.querySelector('.screen');

// set a function to assign value to num1, operator, num2 in an order

button.forEach((item) => {
	item.addEventListener('click', (event) => {
		getNum1(event.target.value);
	});
});

function getNum1(value) {
	if (
		value != '=' &&
		value != '+' &&
		value != '-' &&
		value != '/' &&
		value != '*'
	) {
		num1.push(parseInt(value));
		console.log(num1);
	} else {
		operator += value;
		console.log(operator);
	}
}
console.log(num1);
