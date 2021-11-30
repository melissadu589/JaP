//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        datosCarrito = resultObj.data; 
        infoCarrito = datosCarrito.articles; 
        showCart (infoCarrito)});
        
        function showCart(array){

          let htmlContentToAppend = "";

            
               for (index =0; index <array.length; index++) {
                 let articles = array[index];

                 htmlContentToAppend+= `  <tr>
                 <td><img src="${articles.src}" width="100"></td>
                 <td>${articles.name}</td>
   
                 <td><input type="number"  id="input" value="${articles.count}" max="" min=0 onchange='subtotal()' class="articlesCount" ></td>
       <td>${articles.currency}</td>
                 <td id="productCostInput"><p class="precio" id="precio">${articles.unitCost}</p></td>
                 <td id="subtol"></td>
               </tr>    `
           
                }
               
               document.getElementById('carrin').innerHTML=htmlContentToAppend;
                

                 }
});





function subtotal (){
  let subtotalw=0;
  let price = document.getElementsByClassName("precio");
let quantity = document.getElementsByTagName ('input');
   for (let i=0; i< price.length; i++){
  
    subtotalw+= parseFloat(price[i].innerHTML) * parseFloat(quantity[i].value);

}

document.getElementById('subtol').innerHTML=`${(subtotalw)}`;
document.getElementById('subtol1').innerHTML=`<strong>UYU ${(subtotalw)}</strong>`;
}


document.addEventListener('DOMContentLoaded',()=>{
    
  getJSONData(CART_INFO_URL).then( resultado=>{
      if (resultado.status=="ok"){
           datosCarrito = resultado.data;
           subtotal();
              
          
      }
  })
  
})



function updateTotalCosts(){
  let finalCost= parseFloat(document.getElementById("subtol").innerHTML);
  let envioCostHTML = document.getElementById("costoEnvio");
  let totalPriceHTML = document.getElementById("total");


  let costoEnvioShow = (Math.round(finalCost * envioPercentage * 100) / 100);
  let totalPriceShow = (Math.round(costoEnvioShow + finalCost));

  envioCostHTML.innerHTML = costoEnvioShow;
  totalPriceHTML.innerHTML =  totalPriceShow; 
}




document.getElementById("premiumRadio").addEventListener("change", function(){
  envioPercentage = 0.15;
  updateTotalCosts();
});

document.getElementById("expressRadio").addEventListener("change", function(){
  envioPercentage = 0.07;
  updateTotalCosts();
});

document.getElementById("standardRadio").addEventListener("change", function(){
  envioPercentage = 0.05;
  updateTotalCosts();
});

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("option1").addEventListener("click",()=>{
    document.getElementById("tarjetainfo").disabled = false;
    document.getElementById("codigoinfo").disabled = false;
document.getElementById("vencimiento").disabled = false;
    document.getElementById("cuentainfo").disabled = true;
 });
 document.getElementById("option2").addEventListener("click",()=>{
  document.getElementById("tarjetainfo").disabled = true;
  document.getElementById("codigoinfo").disabled = true;
document.getElementById("vencimiento").disabled = true;
  document.getElementById("cuentainfo").disabled = false;
});
}); 

function validarCompra(){
let inputArticles = document.getElementsByClassName("articlesCount");
let cantArticulos = 0;

let departamento = document.getElementById("departamentoHTML").value;
let ciudad = document.getElementById("ciudadHTML").value;
let calle = document.getElementById("calleHTML").value;
let esquina = document.getElementById("esquinaHTML").value;
let numero = document.getElementById("numeroHTML").value;

let tarjeta = document.getElementById("tarjetainfo").value;
let codigo = document.getElementById("codigoinfo").value;
let vencimiento = document.getElementById("vencimiento").value;

let cuenta = document.getElementById("cuentainfo").value;

let costo = document.getElementById("costoEnvio").innerHTML;

for (let i=0; i< inputArticles.length; i++){
  
 cantArticulos+= parseFloat(inputArticles[i].value);

}
if (cantArticulos != 0 && departamento != "" && ciudad != "" && calle != "" && esquina != "" && numero != ""
&& tarjeta != "" && codigo != "" && vencimiento != "" && costo != "" || 
cantArticulos != 0 && departamento != "" && ciudad != "" && calle != "" && esquina != "" && cuenta != ""
&& costo != "" ) {
  swal("Compra realizada con éxito", "Vuelve al carrito para seguir comprando", "success", {
    button: "Volver al carrito",
  });
}
else {
  swal("No se pudo realizar la compra", "Complete todos los campos para poder finalizar",  "error", {
    button: "Volver al carrito",
  });
}

}


