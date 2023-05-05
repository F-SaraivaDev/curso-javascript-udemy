// let x = 10
// x = "uma string"
// console.log(x)

// let d

// let msg = "uma \"String"
// console.log(msg)

console.log("ola" * 2)
console.log("30" * 2)

function teste(){
    console.log(this)
}
teste()

const obj = {
    n: 0,
    teste2: teste
}
obj.teste2()