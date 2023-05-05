function fn(cb){
	console.log("executar acao de callback")
	console.log(typeof cb)
	typeof cb === "function" && cb()
}

fn(function(){
	console.log("funcao passada por parametro")
})