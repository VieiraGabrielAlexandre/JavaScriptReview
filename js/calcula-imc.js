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

    var imc = calculaImc(peso, altura);
    var imcPaciente = paciente.querySelector(".info-imc");
    
    if (imc >= 60 || imc <= 0)
    {
        imcPaciente.textContent = "Ocorreu algum erro";
    } else {
        imcPaciente.textContent = calculaImc(peso, altura);
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

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura); 

    return imc.toFixed(2);
}

function mostraMensagem(){
    console.log("Ola!");
}