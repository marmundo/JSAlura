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

    var nomeTd = montaTd(paciente.nome,"info-nome")
    var pesoTd =montaTd(paciente.peso,"info-peso")    
    var alturaTd = montaTd(paciente.altura,"info-altura")
    var gorduraTd = montaTd(paciente.gordura,"info-gordura")
    var imcTd = montaTd(paciente.imc,"info-imc")

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});

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