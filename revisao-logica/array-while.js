//Criar um array com numeros randomicos nao repetidos
function gerarNumeroAleatorio(max){
	return parseInt(Math.random() * max)
}

let vetor = []
let i = 0;
while(vetor.length <= 20){
	i++;
	let numeroAleatorio = gerarNumeroAleatorio(30)
	//console.log(numeroAleatorio)
	
	if(vetor.indexOf(numeroAleatorio) < 0){
		vetor.push(numeroAleatorio)
	
	}else{
		console.log(numeroAleatorio, " já existe no vetor")
	}
}

console.log(vetor)
console.log("O loop foi executado ", i, " vezes")