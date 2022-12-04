// program for a simple calculator
var result;

// take the operator input
var operator = prompt('Enter operator ( either -, +, * or / ): ');

// take the operand input
var number1 = prompt('Enter first number: ');
var number2 = prompt('Enter second number: ');

switch(operator) {
    
    case '-':
        result = number1 - number2;
        console.log(`The sub is`,+result);
        break;
    case '+':
        result = number1 + number2;
        console.log(`The addition is`,+result);
        break;
    case '*':
        result = number1 * number2;
        console.log(`The multi is`,+result);
        break;
    case '/':
        result = number1 / number2;
        console.log(`The div is`,+result);
        break;

    default:
        console.log('Invalid operator');
        break;
}