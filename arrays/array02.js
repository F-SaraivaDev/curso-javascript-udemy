let vetor = [4,5,10,20,35,4,5]

console.log(vetor.indexOf(5))
console.log(vetor.lastIndexOf(5))
console.log(vetor.indexOf(511111))//quando false retorna -1
console.log(vetor.lastIndexOf(511111))//quando false retorna -1
console.log(vetor.includes(5))
console.log(vetor.includes(53333))
console.log(vetor.find(function(el){
	return el > 10
}))
console.log(vetor.find(function(el){
	return el > 10000
}))
console.log(vetor.findIndex(function(el){
	return el > 10
}))
console.log(vetor.findIndex(function(el){
	return el > 100
}))