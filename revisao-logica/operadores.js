/*
Os operadores js ( // + - * / % ** )
*/

//OPERADORES ARITMÉTICOS

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 - n2);
console.log(n1 % n2);
console.log(2 ** 3);

//OPERADORES DE ATRIBUIÇÃO
let n3 = 20;
n3 += 15;
console.log(n3);

//INCREMENTO E DECREMENTO
let i = 0;
i++;
console.log(i);

//COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/
n1 = 10;
n2 = 20;
let n4 = "10";

console.log(n1 == n4);
console.log(n1 === n4);
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 != n2);
console.log(n1 != n4);
console.log(n1 !== n4);

//OPERADORES LÓGICOS
let idade = 18;
let visto = true;
const resultado = idade >= 18 && visto;

console.log(`Posso viajar: ${resultado}`);




















