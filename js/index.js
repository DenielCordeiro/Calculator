var valorInScreen = document.querySelector(".content-screen");
var Inputs = /** @class */ (function () {
    function Inputs() {
        this.input1 = 0;
        this.input2 = 0;
    }
    return Inputs;
}());
var valors = new Inputs();
var arrayValors = [];
var valorRemovedFromArray = '';
function numberSelected(numberSelected) {
    this.arrayValors.push(numberSelected);
    this.valorRemovedFromArray = this.arrayValors.join("");
    if (valors.input1 == 0) {
        this.valorInScreen.innerHTML = this.valorRemovedFromArray;
    }
    else {
        this.valorInScreen.innerHTML = valors.input1 + '   ' + this.sinal + '   ' + this.valorRemovedFromArray;
    }
}
var sinal = '';
function operations(sinalSelected) {
    if (valors.input1 == 0) {
        valors.input1 = Number(this.valorRemovedFromArray);
    }
    this.sinal = sinalSelected;
    this.valorInScreen.innerHTML = valors.input1 + '  ' + this.sinal;
    this.valuesReset();
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Sum = function (valors) {
        var resultSum = valors.input1 + valors.input2;
        return parseFloat(resultSum.toFixed(2));
    };
    Calculator.prototype.Subtraction = function (valors) {
        var resultSubtraction = valors.input1 - valors.input2;
        return parseFloat(resultSubtraction.toFixed(2));
    };
    Calculator.prototype.Multiplication = function (valors) {
        var resultMultiplication = valors.input1 * valors.input2;
        return parseFloat(resultMultiplication.toFixed(2));
    };
    Calculator.prototype.Division = function (valors) {
        var resultDivision = valors.input1 / valors.input2;
        return parseFloat(resultDivision.toFixed(2));
    };
    return Calculator;
}());
var calculator = new Calculator();
function result() {
    if (valors.input2 == 0) {
        valors.input2 = Number(this.valorRemovedFromArray);
    }
    if (this.sinal === '+') {
        this.valorInScreen.innerHTML = calculator.Sum(valors);
        valors.input1 = calculator.Sum(valors);
    }
    else if (this.sinal === '-') {
        this.valorInScreen.innerHTML = calculator.Subtraction(valors);
        valors.input1 = calculator.Subtraction(valors);
    }
    else if (this.sinal === '*') {
        this.valorInScreen.innerHTML = calculator.Multiplication(valors);
        valors.input1 = calculator.Multiplication(valors);
    }
    else if (this.sinal === '/') {
        this.valorInScreen.innerHTML = calculator.Division(valors);
        valors.input1 = calculator.Division(valors);
    }
    else {
        alert("[ERROR !]: no operation signal has been entered");
    }
    this.resetInputsAndSinal();
    this.valuesReset();
}
function valuesReset() {
    var messageReset = "values reset";
    this.arrayValors = [];
    return messageReset;
}
function resetInputsAndSinal() {
    valors.input2 = 0;
    this.sinal = '';
    return valors;
}
function toCleanScreenContent() {
    var messageClear = "Você limpou o visor";
    this.resetInputsAndSinal();
    this.valuesReset();
    this.valorInScreen.innerHTML = '';
    valors.input1 = 0;
    return messageClear;
}
