function getHistory(num) {
	document.querySelector('#history-value').innerText = num;
}
function getOutput(num) {
	if (num == "") {
		document.querySelector('#output-value').innerText = num;
	} else {
		document.querySelector('#output-value').innerText = getFormattedNumber(num);
	}
}
function getFormattedNumber(num) {
	if (num == "-") {
		return ""
	}
	return Number(num).toLocaleString("en");
}
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g,''));
}
let number = document.querySelectorAll('.number');
for (var i = 0; i < number.length; i++) {
	console.log(number[i]);
	number[i].addEventListener('click', function () {
		let output = reverseNumberFormat(document.querySelector('#output-value').innerText);
			output += this.id;
			getOutput(output);
		
	});
}
let operator = document.querySelectorAll('.operator');
for (var i = 0; i < operator.length; i++) {
	console.log(operator[i]);
	operator[i].addEventListener('click', function () {
		if (this.id == "clear") {
			getHistory("");
			getOutput("");
		}
		else if (this.id == "backspace") {
			let output = reverseNumberFormat(document.querySelector('#output-value').innerText).toString();
			if (output) {
				output = output.substring(0, output.length - 1);
				getOutput(output);
			}
		}
		else {
			let output = document.querySelector('#output-value').innerText;
			let history = document.querySelector('#history-value').innerText;
			if (output == "" && history !== "") {
				if (isNaN(history[history.length - 1])) {
					history = history.substring(0, history.length - 1);
				}
			}
			if (output !== "" || history !== "") {
				output = output == "" ? output: reverseNumberFormat(output);
				history += output;
				if (this.id == "=") {
					let result = eval(history);
					getOutput(result);
					getHistory("");
				}
				else {
					history += this.id;
					getHistory(history);
					getOutput("");
				}
			}
		}
	});
}
