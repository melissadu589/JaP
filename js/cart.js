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
   
                 <td><input type="number"  value="${articles.count}" max="" min=1 onchange='subtotal()'></td>
       
                 <td>${articles.currency}<p class="precio">${articles.unitCost}</p></td>
                 <td id="subtol"></td>
                 <td><img src="img/x-circle-fill.svg" width="20"></td>
               </tr>    `
           
                }
               
               document.getElementById('carrin').innerHTML=htmlContentToAppend;
                

                 }
});




function subtotal (){
  let price = document.getElementsByClassName("precio");
  let quantity = document.getElementsByTagName ('input');
  let subtotal=0;

   for (let i=0; i< price.length; i++){
  
    subtotal+= parseFloat(price[i].innerHTML) * parseFloat(quantity[i].value);

}

document.getElementById('subtol').innerHTML=`<strong>UYU ${(subtotal)}</strong>`;
document.getElementById('subtol1').innerHTML=`<strong>UYU ${(subtotal)}</strong>`;
}



document.addEventListener('DOMContentLoaded',()=>{
    
  getJSONData(CART_INFO_URL).then( resultado=>{
      if (resultado.status=="ok"){
           datosCarrito = resultado.data;
           subtotal();
              
          
      }
  })
  
})
