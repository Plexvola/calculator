function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b){
	switch (operator) {
		case '+':
			return add(parseFloat(a), parseFloat(b));
		case '-':
			return substract(parseFloat(a), parseFloat(b));
		case '*':
			return multiply(parseFloat(a), parseFloat(b));
		case '/':
			return divide(parseFloat(a), parseFloat(b));
		case '':
			return parseFloat(b);
	}
}

let value = 0;
let op = '';
let display = ""
let calcDisplay = document.querySelector('#display');
let fp = false;

const calculator = document.querySelector('#calculator');
for(let i=0; i<10; i++) {
	let button = document.createElement('button');
	button.classList.add("number");
	button.setAttribute('id', 'n'+i);
	button.textContent = i;
	calculator.appendChild(button);
}

let nbButtons = document.querySelectorAll('.number');
for (let i=0; i<nbButtons.length; i++) {
	nbButtons[i].addEventListener('click', (event) => {
		display += event.target.textContent;
		calcDisplay.textContent = display;
	});
}

let opButtons = document.querySelectorAll('.op');
for (let i=0; i<opButtons.length; i++) {
	opButtons[i].addEventListener('click', (event) => {
		value = operate(op, value, display);
		op = event.target.textContent;
		display = "";
		fp = false;
		calcDisplay.textContent = value;
	});
}

let eqButton = document.querySelector('.equals');
eqButton.addEventListener('click', () => {
	display = operate(op, value, display);
	op = '';
	value = 0;
	fp = false;
	calcDisplay.textContent = display;
});

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
	display = "";
	op = '';
	value = 0;
	fp = false;
	calcDisplay.textContent = '';
});

let fpButton = document.querySelector('.fp');
fpButton.addEventListener('click', () => {
	if (!fp) {
		display += '.';
		fp = true;
		calcDisplay.textContent = display;
	}
});
