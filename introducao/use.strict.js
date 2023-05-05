"use strict"
 x = 10

 function exemplo(){
    x = 20
 }

 exemplo()
 console.log(x)

 function dobrar(n1, n1){
    return n1 * n1
 }

 console.log(dobrar(2, 8))

function Teste(){
    console.log(this)
    this.a = "a"
}

Teste()
