//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});



async function productos(){
  let promise = await fetch ('https://japdevdep.github.io/ecommerce-api/product/all.json')
    let data = await promise.json()

    let products = '';

for (let index =0; index <data.length; index++) {
         products += 
      `${data[index].name}
        ${data[index].description}
   ${data[index].cost}
       ${data[index].currency}
       ${data[index].imgSrc}
       ${data[index].soldCount}`
        
} 


 
let contenido = 
` ${products}`


 
let nuevo_elemento = document.createElement("div");
nuevo_elemento.setAttribute("Id", "respuesta");
document.body.appendChild(nuevo_elemento);
document.getElementById("respuesta").innerHTML = contenido; 
};
productos();