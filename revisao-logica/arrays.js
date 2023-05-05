const vetor = new Array("Fernando", "Rua do Arraio", 34, true, 1.34,
new Array(2, 4, 10))
console.log(vetor)

const vetor2 = new Array()

vetor2[0] = "Flavio"
vetor2[1] = 40
console.log(vetor2)
console.log(vetor.length)
console.log(typeof vetor)
console.log(vetor[4])

const vetor3 = ["Cristiane", 38, [0,1,11,89], false]

vetor3[4] = true
vetor3.push("novo valor")
let n = 50

//console.log(vetor3[n])
vetor3[5] = n
console.log(vetor3)



