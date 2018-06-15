var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    paciente={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(peso,altura)
    }
    
    var pacienteTr = montaTr("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso") );
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    pacienteTr.appendChild(criaBotaoFechar(),"btn");

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    adicionaComportamentoBotaoRemover();

    form.reset();

});

function criaBotaoFechar(){
    var td= document.createElement("td");
    var i= document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-times");
    td.appendChild(i);    
    return td;    
}

function montaTr(classe){
    var tr= document.createElement("tr");
    tr.classList.add(classe);
    return tr;
}

function montaTd(conteudo,classe){
    var td= document.createElement("td");
    td.classList.add(classe);
    td.textContent=conteudo;
    return td;
}

