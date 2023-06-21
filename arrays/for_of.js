const arr = [1,2,3]
const obj = {
	nome: "Fernando",
	idade: "45",
	email: "fernando.saraiva@gmail.com"
}

for(let prop in obj){
	console.log(prop)
	console.log(obj[prop])
}

for(n of arr){
	console.log(n)
}