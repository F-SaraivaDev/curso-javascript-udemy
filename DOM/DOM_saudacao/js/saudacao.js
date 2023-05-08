/*(function(){
	const nomeUsuario = "Fernando Saraiva"
	document.querySelector(".top-bar p")
	.textContent = "Bem-vindo(a), " + nomeUsuario 
	const elemento = document.querySelector(".top-bar p")
	console.log(elemento.textContent)
	//elemento.textContent = elemento.textContent + nomeUsuario
	elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
})()*/	

(function () {
	const nomeUsuario = null
	const elemento = document.querySelector(".top-bar p")
	
	if(nomeUsuario){
	    console.log(elemento.textContent)
		elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
	
	}else{
		elemento.parentElement.style.display = "none"
	}
	console.log(elemento)
})()	
	