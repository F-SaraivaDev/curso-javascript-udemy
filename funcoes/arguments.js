/*
function somar(n1,n2, n3){
	return n1 + n2 + n3
	
}
console.log(somar(1,2,3))

function somar(vetor){
	let total = 0
	for(let i = 0; i < vetor.length; i++){
		total += vetor[i]
	}
	
	return total
}

console.log(somar([1,2,3]))

function somar(){
	console.log(arguments)
	let total = 0;
	for(let i = 0; i < arguments.length; i++){
		total += arguments[i]
	}
	return total
}
console.log(somar(1,2,3,4,5,6,7,8,10))

const somar = function(){
	console.log(arguments)
	let total = 0;
	for(let i = 0; i < arguments.length; i++){
		total += arguments[i]
	}
	return total
}
console.log(somar(1,2,3,4,5,6,7,8,10))*/

const somar =() => {
	console.log(arguments)
	let total = 0;
	for(let i = 0; i < arguments.length; i++){
		total += arguments[i]
	}
	return total
}
console.log(somar.name)






















