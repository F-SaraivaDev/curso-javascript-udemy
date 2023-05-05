const pessoa = {
	nome: "Maria",
	idade: 40,
	email: "email@email.com.br"
}

console.log(pessoa)

for(let prop in pessoa){
	console.log(prop)
	console.log(pessoa[prop])
}