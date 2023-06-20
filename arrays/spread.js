const arr = [1,2,3]
const arr2 = [4,5,6]

function soma(){
	console.log(arguments)
	console.log(arguments.length)
}

soma(1,2,3) //arguments.length = 3
soma(arr) //arguments.length = 1
soma([1,2,3])

soma(...[1,2,3])
soma(...arr)

arr.push(...arr2)
console.log(arr)

