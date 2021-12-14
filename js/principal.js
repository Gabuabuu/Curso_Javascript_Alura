var paciente = document.querySelector("#primeiro-paciente"); 
var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc"); 
var altura = tdAltura.textContent; var peso = tdPeso.textContent;
var alturaEhValida = true; 
var pesoEhValido = true; 

if (peso <= 0 || peso > 1000) { console.log("Peso inválido!"); tdPeso.textContent = "Peso inválido!"; pesoEhValido = false; } 

if (altura <= 0 || altura >= 3) { console.log("Altura inválida!"); tdAltura.textContent = "Altura inválida!"; alturaEhValida = false; } 

if (alturaEhValida && pesoEhValido) { var imc = peso / (altura * altura); tdImc.textContent = imc; } 

else { tdImc.textContent = "Altura e/ou peso inválidos!" }