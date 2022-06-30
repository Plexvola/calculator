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
			return add(parseInt(a), parseInt(b));
		case '-':
			return substract(parseInt(a), parseInt(b));
		case '*':
			return multiply(parseInt(a), parseInt(b));
		case '/':
			return divide(parseInt(a), parseInt(b));
		case '':
			return parseInt(b);
	}
}

let value = 0;
let op = '';
let display = ""
let calcDisplay = document.querySelector('#display');

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
		value = operate(op, value, display)
		op = event.target.textContent;
		display = "";
		calcDisplay.textContent = value;
	});
}

let eqButton = document.querySelector('.equals');
eqButton.addEventListener('click', () => {
	display = operate(op, value, display)
	op = '';
	value = 0;
	calcDisplay.textContent = display;
});
