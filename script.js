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
		return multiply(num1, num2);
	} else if (operator == '/') {
		return divide(num1, num2);
	}
}

let num1 = [];
let operator = '';
let num2 = [];

let button = document.querySelectorAll('.button-grid');
let screen = document.querySelector('.screen');
let clearBtn = document.querySelector('.clear-btn');
let deleteBtn = document.querySelector('.delete-btn');

// set a function to assign value to num1, operator, num2 in an order

button.forEach((item) => {
	item.addEventListener('click', (event) => {
		getNum1(event.target.value);
	});
});

// logic to handle num1 and num2 with true and false value
first = true;

function getNum1(value) {
	if (first) {
		temp = num1;
	} else {
		temp = num2;
	}
	if (
		value != '=' &&
		value != '+' &&
		value != '-' &&
		value != '/' &&
		value != '*'
	) {
		temp.push(parseInt(value));
		screen.textContent = parseInt(temp.join(''));
	} else if (value == '=') {
		num1Int = parseInt(num1.join(''));
		num2Int = parseInt(num2.join(''));
		operate(num1Int, operator, num2Int);
		num1 = [];
		num2 = [];
		first = true;
	} else {
		operator = value;
		first = false;
	}
}

// set a function when clearbtn click, delete all memory
clearBtn.addEventListener('click', () => {
	reset();
});

function reset() {
	num1 = [];
	num2 = [];
	screen.textContent = 'Cleared';
}

// set a function when deleteBtn click, delete the end of array number

deleteBtn.addEventListener('click', () => {
	deleteInt();
});

function deleteInt() {
	if (first) {
		num1.pop();
		screen.textContent = parseInt(num1.join(''));
	} else {
		num2.pop();
		screen.textContent = parseInt(num2.join(''));
	}
}
