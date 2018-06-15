

function adicionaComportamentoBotaoRemover(){
	var botoesRemover = document.querySelectorAll(".fa-times");
	botoesRemover.forEach(function(botaoRemover) {
			botaoRemover.addEventListener("click", function(event) {
	    		event.preventDefault();    
	     		var row = botaoRemover.parentNode.parentNode;    		
	    		row.parentNode.removeChild(row);
			});
		});
}

adicionaComportamentoBotaoRemover();