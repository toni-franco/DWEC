document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("edad").addEventListener('focusout', valida_edad); 

});

function valida_edad(){
       // Vaciar mensajes:
       document.getElementById("validaEdad").innerHTML = "";
       edad = document.fvalida.edad.value
       
       if (edad==""){
              // No podemos poner alert !!!
              // alert("Tiene que introducir un número entero en su edad.")
              document.getElementById("validaEdad").innerHTML = "Tiene que introducir un número entero en su edad.";
              document.fvalida.edad.focus()
              return 0;
       }else{
              if (edad<18){
                     // alert("Debe ser mayor de 18 años.")
                     document.getElementById("validaEdad").innerHTML = "Debe ser mayor de 18 años.";
                     document.fvalida.edad.focus()
                     return 0;
              }
       }

}
