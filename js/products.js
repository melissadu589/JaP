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

products += `<a href="products.html" class="list-group-item">
<div class="row">
    <div class="col-3">
        <img src=" ${data[index].imgSrc} " alt=" ${data[index].description}" class="img-thumbnail">
    </div>
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1"> ${data[index].name} </h4>
            <p class="text-muted"> ${data[index].soldCount}  artículos</p>
    
        </div>
        <p class="text-muted"> ${data[index].description}</p>
    </div>
    <p class = "text-muted"> ${data[index].currency}  ${data[index].cost}  </p> 
</div> 

</a>`
}

 
let contenido = 
` ${products}`


 
let nuevo_elemento = document.createElement("div");
nuevo_elemento.setAttribute("Id", "respuesta");
document.body.appendChild(nuevo_elemento);
document.getElementById("respuesta").innerHTML = contenido; 
};
productos();