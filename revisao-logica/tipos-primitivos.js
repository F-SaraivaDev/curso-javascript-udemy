//string, number, boolean
//underfined, null, symbol(ES2015)

let minha_var = "minha string";
let minha_var2 = "minha 'string' com aspas";
console.log(minha_var);
console.log(minha_var2);
var minhavar3 = `minha template literal`;
console.log(minhavar3);
let idade = 45;
/*
let msg = "Mimha idade é " + idade + " anos";
console.log(msg);*/
let msg = `Mimha idade é ${idade} anos`;
console.log(msg);
console.log(typeof msg, typeof idade);

const n1 = 10;
const n2 = 1.1;

console.log(`O tipo de n1 ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n2 ${typeof n2} e seu valor é ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`);

let varTeste
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);
varTeste = null;
console.log(typeof varTeste, varTeste);