(function () {
	const nomeUsuario = "Fernando Saraiva"
	
	if(nomeUsuario){
	   const topBarElemento = document.createElement("div")
	   topBarElemento.className = "top-bar"
	   topBarElemento.innerHTML = `<p>Bem-vindo, <b> ${nomeUsuario}</b></p>`
	   
	   //elementoPai.insertBefore(novoElemento, elementoReferencia)
	   const elementoPai = document.querySelector(".hero")
	   console.log(elementoPai.querySelector(".hero"))
	   elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)

	}
	
})()	
	