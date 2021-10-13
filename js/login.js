//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("mostrarUsuario").innerHTML = `Bienvenido `+localStorage.getItem("user");
});


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

let username = document.getElementById("email").value;


localStorage.setItem('user', username);
location.href='home.html'; 
}); 

//document.getElementsById("logOut").addEventListener("click", function(){
  //localStorage.clear();
  //location.href='index.html'; 
//});

function logOut (){
  localStorage.clear();
  location.href="index.html";
}







//let error = document.getElementById ("error");


//function validarFormulario () {
  //console.log ("Enviando mensaje....")
//  let mensajeError = [];

  //if (email.value == null || email.value == ""){
  //mensajeError.push("El campo correo electrónico no puede quedar vacío")
  //}
  //if (password.value == null || password.value== ""){
 // mensajeError.push("El campo contraseña no puede quedar vacío")
//}
//else {
//window.location.assign("home.html") }

//let nuevo_elemento = document.createElement("div");
//nuevo_elemento.setAttribute("Id", "error");
//document.body.appendChild(nuevo_elemento);
//document.getElementById("error").innerHTML = `<p align="center" style="color:#FF0000">${mensajeError.join(",")}</p>`
//return false; 
//}

