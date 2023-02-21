/**
 * - não podemos criar constantes com palavras reservadas
 * - constantes precisam ter nomes significativos
 * - não pode começar o nome de uma contante com número
 * - não podem conter espaços ou traços
 * - utilizamos camelCase
 * - caser-sensitive
 * - não pode modificar o valor de uma constante
 * - não utilize var, utilize const
 * */

const primeiroNumero = '5'; // string
const segundoNumero = 10; // number
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5;
console.log(resultadoTriplicado);d

console.log(primeiroNumero + segundoNumero);
console.log(typeof (primeiroNumero + segundoNumero));
