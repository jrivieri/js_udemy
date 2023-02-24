/*
 * Luiz Otávio Miranda tem 30 anos, pesa 84Kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 * nasceu em 1980
 *  * */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${altura} de altura, seu IMC é de ${imc}`);
console.log(`nasceu em ${2023 - 30}`); 
