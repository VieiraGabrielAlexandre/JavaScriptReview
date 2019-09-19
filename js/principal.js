var titulo = (document.querySelector(".titulo"));
    titulo.textContent = "IMC";
var subtitulo = (document.querySelector(".subtitulo"));
    subtitulo.textContent = "Lista dos clientes";

var paciente = (document.querySelector("#primeiro-paciente"));
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
    console.log (paciente);
    console.log (tdPeso);
    console.log (peso); 

if (peso <= 0 || peso >= 300)
{
    alert ("Peso informado incorretamente");
    tdPeso.textContent = "Erro !";
    altura = "N/A"
}

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
    console.log(altura);

if (altura < 0 || altura >= 3.00)
{
    alert ("Altura informada incorretamente");
    tdAltura.textContent = "Erro !";
    altura = "N/A"
}

var IMC = peso / (altura * altura);

console.log (IMC);

var imcPrimeiroPaciente = (document.querySelector(".info-imc"));
    imcPrimeiroPaciente.textContent = IMC;
if (imcPrimeiroPaciente.textContent == 'NaN')
{
    imcPrimeiroPaciente.textContent = "Não foi possivel calcular IMC";
}




		