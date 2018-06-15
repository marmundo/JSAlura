

function adicionaComportamentoBotaoRemover(){
	var botoesRemover = document.querySelectorAll(".fa-times");
	botoesRemover.forEach(function(botaoRemover) {
			botaoRemover.addEventListener("click", function(event) {	    		
	     		botaoRemover.parentNode.parentNode.remove(); 			    		
			});
		});
}

adicionaComportamentoBotaoRemover();