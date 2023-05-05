/*
var --> cria variável de sessão (global)
const, let --> criam variáveis locais 

*/

let valor = "global"

function mostrarValor(){
	let valor = "local"
	
	if(true){
		var valor2 = "Valor if com let"
	}
	console.log(valor2)
}
mostrarValor()

console.log(valor)

function funcaoExterna(){
	
	let msg = "Mensagem local na funcaoExterna"
	
	function funcaoInterna(){
		let msg = "Mensagem local na funcaoInterna"
		console.log(msg)
	}
	funcaoInterna()
	console.log(msg)
}

funcaoExterna()