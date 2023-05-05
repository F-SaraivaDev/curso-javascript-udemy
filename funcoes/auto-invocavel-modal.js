/*
function init(){
	let isValid = true
	console.log("init modal", isValid)
}
init()

(function(){
	let isValid = true
	console.log(" modal", isValid)
	
	function init(){
		console.log("init do modal")
	}
	init()
})()

(function(n1, n2, n3){
	let isValid = true
	console.log(" modal", isValid, n1, n2, n3)
	
	function init(){
		console.log("init do modal")
	}
	init()
})(10,25,38)*/

(function(win, doc){
	//let isValid = true
	//console.log(" modal", isValid, n1, n2, n3)
	win.alert("Olá Mundo")
	function init(){
		console.log("init do modal")
	}
	init()
})(window, document)