//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

let email = document.getElementById ("email");
let password = document.getElementById ("password");
let error = document.getElementById ("error");
//let redirection = window.location = home.html;

function validarFormulario () {
  console.log ("Enviando mensaje....")
  let mensajeError = [];

  if (email.value == null || email.value == ""){
  mensajeError.push("El campo correo electrónico no puede quedar vacío")
  }
  if (password.value == null || password.value== ""){
  mensajeError.push("El campo contraseña no puede quedar vacío")
}
else {
window.location.assign("home.html") }

let nuevo_elemento = document.createElement("div");
nuevo_elemento.setAttribute("Id", "error");
document.body.appendChild(nuevo_elemento);
document.getElementById("error").innerHTML = `<p align="center" style="color:#FF0000">${mensajeError.join(",")}</p>`
return false; 
}




//location.href = "https://melissadu589.github.io/JaP/"; 



