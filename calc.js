//  Calculator classes

class UserInput {

    constructor() {
        this.InputString = '0';
    }

    updateInputString(value) {
        this.InputString += value;
        var newString = this.InputString.replace(/^[0]+/, "");
        if (newString === '') { newString = '0'};
        this.InputString = newString;
    }

    displayInputString() {
        var inputElem = document.getElementById('input_field');
        inputElem.innerHTML = this.InputString;
    }

    resetInputString() {
        this.InputString = '0';
    }

    checkDecimal() {
        let token = lastToken();
        let res =  token.search(/\./);
        return (res == -1) ? true : false;
    }

    returnInputString() {
        return this.InputString;
    }

}

class CalcOutput {

    constructor() {
        this.OutputValue = '0';
        this.CalculatedValue = '0';
    }

    deriveCalculatedValue() {
        let str = currentInput.returnInputString();
        var tokens = returnValsOps(str);
        let newCalculatedValue = 0;
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/' ) {
                switch (tokens[i]) {
                    case '+':
                        newCalculatedValue = newCalculatedValue + tokens[i+1];
                        break;
                    case '-':
                        newCalculatedValue = newCalculatedValue - tokens[i+1];
                        break;
                    case '*':
                        newCalculatedValue = newCalculatedValue * tokens[i+1];
                        break;
                    case '/':
                        newCalculatedValue = newCalculatedValue / tokens[i+1];
                        break;
                    default:
                        continue;
                }
            } else{
                if (i == 0) {
                    newCalculatedValue = tokens[i];
                } else {
                    continue;
                }
            }
        }
        this.CalculatedValue = Math.round( this.CalculatedValue * 100 + Number.EPSILON ) / 100;
        this.CalculatedValue = String(newCalculatedValue);
    }

    displayCalculatedValue() {
        var outputElem = document.getElementById('display');
        outputElem.innerHTML = this.CalculatedValue;
    }

    displayOutputValue() {
        var outputElem = document.getElementById('display');
        outputElem.innerHTML = this.OutputValue;
    }

    resetOutputValue() {
        this.OutputValue = '0';
    }

    setOutputValue(value) {
        this.OutputValue = value;
    }
}

// Function.  Takes the input string and returns an array of integers, floats and operators.  Handles various
//            corner cases that may occur such as two consecutive operators and negative numbers.
function returnValsOps(str) {

    let tokens = str.split("");
    let output = [];
    let nextValue = '';
    let operatorFound = false;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/' ) {

            //  Token is an operator.

            //  Corner cases

            if (i == tokens.length - 1) { break; }   // Last token in input is an operator

            if (i == 0 && tokens[i] == '-' && tokens[i+1] >= 0 && tokens[i+1] <= 9) {  // First number is a negative
                nextValue = '-';
                operatorFound = true;
                continue;
            }

            if (operatorFound && tokens[i] == '-' && tokens[i+1] >= 0 && tokens[i+1] <= 9) {  // Next number is a negative
                nextValue = nextValue + '-';
                continue;
            }

            if (operatorFound) {  // Two or more tokens in a row
                output.pop();
                output.push(tokens[i]);
                continue;
            }

            if (i == 0) {  // First token is an operator
                output.push(tokens[i]);
                operatorFound = true;
                continue;
            }

            //  Operator found, no corner cases found

            let foundValue = parseFloat(nextValue);
            output.push(foundValue);
            output.push(tokens[i]);
            nextValue = '';
            operatorFound = true;
        } else {
            nextValue = nextValue + tokens[i];
            operatorFound = false;
        }
    }
    let lastValue = parseFloat(nextValue);
    output.push(lastValue);
    return output;

}

//  Function.  Returns the last token in the input string.

function lastToken() {
    let tokens = currentInput.returnInputString().split("");
    let lastOpPos = 0;

    // Find last operator
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
            lastOpPos = i;
        }
    }

    // Slice input string
    let output = '';
    if (lastOpPos == 0) {
        output = currentInput.returnInputString();
    } else {
        output = currentInput.returnInputString().slice(lastOpPos + 1);
    }

    return output;
}

//  Instantiate classes

var currentInput = new UserInput();
var currentValue = new CalcOutput();

//  Event Listeners

document.addEventListener('DOMContentLoaded', () => {
    currentInput.displayInputString();
    currentValue.displayOutputValue();
});

document.querySelector('#one').addEventListener('click', () => {
    currentInput.updateInputString('1');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#two').addEventListener('click', () => {
    currentInput.updateInputString('2');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#three').addEventListener('click', () => {
    currentInput.updateInputString('3');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#four').addEventListener('click', () => {
    currentInput.updateInputString('4');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#five').addEventListener('click', () => {
    currentInput.updateInputString('5');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#six').addEventListener('click', () => {
    currentInput.updateInputString('6');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#seven').addEventListener('click', () => {
    currentInput.updateInputString('7');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#eight').addEventListener('click', () => {
    currentInput.updateInputString('8');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#nine').addEventListener('click', () => {
    currentInput.updateInputString('9');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#zero').addEventListener('click', () => {
    currentInput.updateInputString('0');
    currentInput.displayInputString();
    currentValue.setOutputValue(lastToken());
    currentValue.displayOutputValue();
});

document.querySelector('#clear').addEventListener('click', () => {
    currentInput.resetInputString();
    currentValue.resetOutputValue();
    currentInput.displayInputString();
    currentValue.displayOutputValue();
});

document.querySelector('#equals').addEventListener('click', () => {
    currentValue.deriveCalculatedValue();
    currentValue.displayCalculatedValue();
});

document.querySelector('#add').addEventListener('click', () => {
    currentInput.updateInputString('+');
    currentInput.displayInputString();
    currentValue.setOutputValue('+');
    currentValue.displayOutputValue();
});

document.querySelector('#subtract').addEventListener('click', () => {
    currentInput.updateInputString('-');
    currentInput.displayInputString();
    currentValue.setOutputValue('-');
    currentValue.displayOutputValue();
});

document.querySelector('#multiply').addEventListener('click', () => {
    currentInput.updateInputString('*');
    currentInput.displayInputString();
    currentValue.setOutputValue('*');
    currentValue.displayOutputValue();
});

document.querySelector('#divide').addEventListener('click', () => {
    currentInput.updateInputString('/');
    currentInput.displayInputString();
    currentValue.setOutputValue('/');
    currentValue.displayOutputValue();
});

document.querySelector('#decimal').addEventListener('click', () => {
    if (currentInput.checkDecimal()) { 
        currentInput.updateInputString('.'); 
        currentInput.displayInputString();
        currentValue.setOutputValue(lastToken());
        currentValue.displayOutputValue();
    };
});

