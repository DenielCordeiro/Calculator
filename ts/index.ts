class Inputs {
    input1: number = 0;
    input2: number = 0;
}

const valors = new Inputs();

let valorContentScreen = document.querySelector(".content-screen");

let arrayValors: string[] = [];
let valorRemovedFromArray: string = '';

function numberSelected(numberSelected: string) {

    this.arrayValors.push(numberSelected);
    this.valorRemovedFromArray = this.arrayValors.join("");

    console.log('valor inicial em array de texto: ', this.arrayValors);
    console.log('valor final em texto: ', this.valorRemovedFromArray);
}

let sinal: string = '';

function operations(sinalSelected: string) {
    if (valors.input1 == 0) {
        valors.input1 = Number(this.valorRemovedFromArray);
    }

    console.log('valor salvo no input1 em número: ', valors.input1);  

    this.arrayValors = [];
    
    this.sinal = sinalSelected;

    console.log('O sinal selecionado foi: ', this.sinal);
}

class Calculator {
    Sum(valors: Inputs): number {
        const resultSum = valors.input1 + valors.input2;    
        console.log("Resultado da Soma: ", resultSum);
             
        return resultSum;
    }

    Subtraction(valors: Inputs): number { 
        const resultSubtraction = valors.input1 - valors.input2;
        console.log("Resultado da Subtração: ", resultSubtraction);        

        return resultSubtraction;
    }

    Multiplication(valors: Inputs): number {
        const resultMultiplication = valors.input1 * valors.input2; 
        console.log("Resultado da Multiplicação: ", resultMultiplication);

        return resultMultiplication;
    }

    Division(valors: Inputs): number {
        const resultDivision = valors.input1 / valors.input2;
        console.log("Resultado da Divisão: ", resultDivision);
         
        return resultDivision;
    }
}

const calculator = new Calculator();

function result() {
    if (valors.input2 == 0) {
        valors.input2 = Number(this.valorRemovedFromArray);
    }

    console.log('valor salvo no input2 em número: ', valors.input2);

    if (this.sinal === '+') {
        calculator.Sum(valors);
    } else if (this.sinal === '-') {
        calculator.Subtraction(valors);
    } else if (this.sinal === '*') {
        calculator.Multiplication(valors);
    } else if (this.sinal === '/') {
        calculator.Division(valors);
    }
}