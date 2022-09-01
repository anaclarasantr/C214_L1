const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(a, b) {
        const validateA = validate({ a },  CalculadoraConstraint.calculadoraConstraint);
        const validateB = validate({ b },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let soma = a + b;
        return soma;
    },

    subtracao(a, b) {
        const validateA = validate({ a },  CalculadoraConstraint.calculadoraConstraint);
        const validateB = validate({ b },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let sub = a - b;
        return sub;
    },

    multiplicacao(a, b) {
        const validateA = validate({ a },  CalculadoraConstraint.calculadoraConstraint);
        const validateB = validate({ b },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let mul = a * b;
        return mul;
    },

    divisao(a, b) {
        const validateA = validate({ a },  CalculadoraConstraint.calculadoraConstraint);
        const validateB = validate({ b },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let div = a / b;
        return div;
    },

    exponenciacao(a, b) {
        const validateA = validate({ a },  CalculadoraConstraint.calculadoraConstraint);
        const validateB = validate({ b },  CalculadoraConstraint.calculadoraConstraint);       
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let exp = a ** b;
        return exp;
    }
    
};

module.exports = Calculadora;