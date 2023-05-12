let vetor1 = ["a","b","c"]
let vetor2 = [].concat(vetor1)

vetor1[vetor2.length] = "Fernando"

console.log(vetor1)
console.log(vetor2)