var titulo = (document.querySelector(".titulo"));
titulo.textContent = "IMC";
var subtitulo = (document.querySelector(".subtitulo"));
subtitulo.textContent = "Lista dos clientes";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);
    var imcPaciente = paciente.querySelector(".info-imc");
    
    if (imc >= 60 || imc <= 0)
    {
        imcPaciente.textContent = "Ocorreu algum erro";
    } else {
        imcPaciente.textContent = imc.toFixed(2);
    }
    
    if (peso <= 0 || peso >= 300) {
        alert("Peso informado incorretamente");
        imcPaciente.textContent = "Erro no peso";
        paciente.classList.add("paciente-invalido");
    } 

    if (altura < 0 || altura >= 3.00) {
        alert("Altura informada incorretamente");
        imcPaciente.textContent = "Erro na altura";
        paciente.classList.add("paciente-invalido");
    } 

    if (imcPaciente.textContent == 'NaN') {
        imcPaciente.textContent = "Não foi possivel calcular IMC";
    }
}
titulo.addEventListener("click", function (){
    console.log("Função anonomina");
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});


function mostraMensagem(){
    console.log("Ola!");
}