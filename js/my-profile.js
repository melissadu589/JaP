//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("correoUser").value = localStorage.getItem("user");

});

function saveData() {
    let profileData={
        nombre: document.getElementById("nameUser").value,
        apellido: document.getElementById("lastNameU").value,
        telefono: document.getElementById("phoneNumber").value,
        edad: document.getElementById("ageUser").value,
        email: document.getElementById("mailUser").value,
    };

    let profileData_json= JSON.stringify(profileData);
    localStorage.setItem("profileData", profileData_json);

}




document.addEventListener("DOMContentLoaded", function(e){
    if (localStorage.getItem("profileData")){

        let profileData_json= localStorage.getItem("profileData");
        let profileData2= JSON.parse(profileData_json);

document.getElementById("nameUser").value = profileData2.nombre;

document.getElementById("lastNameU").value = profileData2.apellido;

document.getElementById("ageUser").value = profileData2.edad;

document.getElementById("phoneNumber").value = profileData2.telefono;

document.getElementById("mailUser").value = profileData2.email;

    }
});

//datos.addEventListener("submit", function(event) {
  //  event.preventDefault(); 
    //let nameUser = document.getElementById("nameUser").value;
    //localStorage.setItem('name', nameUser);

    //let lastNameU = document.getElementById("lastNameU").value;
    //localStorage.setItem('lastN', lastNameU);

    //let ageUser = document.getElementById("ageUser").value;
    //localStorage.setItem('age', ageUser);

    //let phoneNumber = document.getElementById("phoneNumber").value;
    //localStorage.setItem('phone', phoneNumber);    
    
//}); 


//document.getElementById("nameUser").value = localStorage.getItem("name");


//document.getElementById("lastNameU").value = localStorage.getItem("lastN");


//document.getElementById("ageUser").value = localStorage.getItem("age");

//document.getElementById("phoneNumber").value = localStorage.getItem("phone");



