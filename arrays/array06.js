let vetor = [1, 2, 3, 4]
//console.log(vetor)
//console.log(vetor.reverse())

let j = 0
let soma = vetor.reduce(function (acumulador, atual, i, vetor_) {
   console.log("i: ", i)
   console.log("j: ", j++)
   //console.log(vetor_)
   console.log("acumulador: ", acumulador, " --- atual: ", atual)
   return acumulador + atual
}, 0)

console.log(soma)
console.log(vetor)

const nomes = ["Daniel", "Maria", "Joana", "João"]
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
   let primeiraLetra = nomeAtual[0]
   if (nomes[primeiraLetra]) {
      nomes[primeiraLetra]++
   } else {
      nomes[primeiraLetra] = 1
   }
   return nomes
}, {})

console.log(nomesPorOrdem)