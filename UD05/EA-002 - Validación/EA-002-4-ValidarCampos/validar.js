document.addEventListener("DOMContentLoaded", function() {
  //document.getElementById("formulario").addEventListener('submit', valida_envia); 
  document.getElementById("Enviar").addEventListener("click", function(event)
              {
                     valida_envia()
                     event.preventDefault(); 
              });
});

function valida_envia(){
    // Vaciar mensajes:
    document.getElementById("validaEdad").innerHTML = "";
    document.getElementById("validaInteres").innerHTML = "";

    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
 
    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    //edad = validarEntero(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
           alert("Tiene que introducir un número entero en su edad.")
           document.getElementById("validaEdad").innerHTML = "Tiene que introducir un número entero en su edad.";
           document.fvalida.edad.focus()
           return 0;
    }else{
           if (edad<18){
                  alert("Debe ser mayor de 18 años.")
                  document.getElementById("validaEdad").innerHTML = "Debe ser mayor de 18 años.";
                  document.fvalida.edad.focus()
                  return 0;
           }
    }
 
    //valido el interés
    if (document.fvalida.interes.selectedIndex==0){
           alert("Debe seleccionar un motivo de su contacto.")
           document.getElementById("validaInteres").innerHTML = "Debe seleccionar un motivo de su contacto";
           document.fvalida.interes.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

