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
			return add(a, b)
		case '-':
			return substract(a, b)
		case '*':
			return multiply(a, b)
		case '/':
			return divide(a, b)
	}
}

let value;
let op = '';
let display = ""

const calculator = document.querySelector('#calculator');
for(let i=0; i<10; i++) {
	let button = document.createElement('button');
	button.classList.add("number");
	button.setAttribute('id', 'n'+i);
	button.textContent = i;
	calculator.appendChild(button);
}

let buttons = document.querySelectorAll('.number');
for (let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', (event) => {
		display += event.target.textContent;
	});
}
