const vetor = [1,5,10,"Olá",true]

let soNumerosEvery = vetor.every(function(el){ //Exibe false quando um ou mais elementos não é number
	return typeof el === "number"
})

let soNumerosSome = vetor.some(function(el){ //Exibe true quando um ou mais elementos não é number
	return typeof el === "number" && el > 20	
})

const vetor1 = vetor.filter(function(el, i, vetor_){
	return typeof el === "number"
})

vetor.forEach(function(el, i, vetor_){
	console.log(i," : ", el)
})

const vetor3 = vetor1.map(function(el, i, vetor_){
	return el * el
})
console.log("Every = " + soNumerosEvery)
console.log("Some = " + soNumerosSome)
console.log(vetor) 
console.log(vetor1)
console.log(vetor3)




