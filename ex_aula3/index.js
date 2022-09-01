const Calculadora = require('./src/calculadora');

let res_soma = Calculadora.soma(2, 2);
let res_subtracao = Calculadora.subtracao(10, 5);
let res_multiplicacao = Calculadora.multiplicacao(2, 3);
let res_divisao = Calculadora.divisao(10, 2);
let res_exponenciacao = Calculadora.exponenciacao(2, 3);

console.log(res_soma);
console.log(res_subtracao);
console.log(res_multiplicacao);
console.log(res_divisao);
console.log(res_exponenciacao);
