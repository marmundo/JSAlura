
var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("click", function(event) {	
	var elemento=event.target;
	if(elemento.tagName=="I"){
		elemento.parentNode.parentNode.remove()
	}	    		 	
});
