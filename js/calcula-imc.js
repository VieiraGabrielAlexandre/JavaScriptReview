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

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido){
        console.log("Peso invalido");
        pesoValido = false;
        tdPeso.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaValida){
        console.log ("Altura invalida");
        alturaValida = false;
        tdAltura.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (imc >= 60 || imc <= 0)
    {
        imcPaciente.textContent = "Ocorreu algum erro";
    } else {
        imcPaciente.textContent = calculaImc(peso, altura);
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

function validaPeso (peso){
    if (peso <= 300 && peso > 0)
    {
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura){
    if (altura <= 3.00 && altura >=0.50)
    {
        return true;
    } else {
        return false;
    }
}