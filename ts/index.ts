class Numbers {
    input1: number = 0;
    input2: number = 0;
}

const valor = new Numbers();

function numberSelected(numberSelected: string) { 

    var test2 = numberSelected;
    var test = test2 + numberSelected;


    console.log("valor inicial: ",test2);
    console.log('valor final: ', test);
    
}

function operations() {
   console.log("Zerar operação");   
}

class Calculator {
    Sum(valor: Numbers): number {         
        return valor.input1 + valor.input2;
    }

    Subtraction(valor: Numbers): number { 
        return valor.input1 - valor.input2;
    }

    Multiplication(valor: Numbers): number { 
        return valor.input1 * valor.input2;
    }

    Division(valor: Numbers): number { 
        return valor.input1 / valor.input2;
    }
}

const calculator = new Calculator();