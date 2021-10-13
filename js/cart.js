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

            let htmlContentToAppend = '';
            
               for (index =0; index <array.length; index++) {
                 let articles = array[index];
                 htmlContentToAppend += `<table class="table">
                 <thead>
                   <tr>
                     <th scope="col">Carro de compras</th>
                   </tr>
                 </thead>
                 <tbody>
              <th>  <img src="${articles.src}"> <th> 

            <td>    <p>${articles.name}</p>  <td> 
            <td>  ${articles.count} </td>
            <td> ${articles.currency}  ${articles.unitCost} </td>
                 </tbody>
               </table>
               `
               }
                
            
                
            document.getElementById("carrito").innerHTML = htmlContentToAppend;
                     
            
                 }
            

});
