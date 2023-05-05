function soma(n1, n2){
	if(typeof n1 !== "number" || typeof n2 !== "number"){
	   throw Error("Informe apenas números")
	} 
	return n1 + n2
}
/*
let resultado = ""
	   
	   try{
	       resultado = soma(5,"a")
	   }catch(e){
	       console.log("Ocoreu um erro!")
           console.log(e.message)		   
	   }
	   console.log(resultado)
*/

