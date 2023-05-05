const pessoas = [{
	nome:"Fernando",
	idade: 40
},{
	nome:"Cristiane",
	idade: 45
},{
	nome:"Roberto",
	idade: 64
},{
	nome:"Miguel",
	idade:16
}]

for(let i = 0; i < pessoas.length; i++){
	console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}