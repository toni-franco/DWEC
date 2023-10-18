import { Cliente } from './PojoClientes.js';
import { DatosClientes } from './mClientes.js';

var arrayClientes = [];

var mDatosClientes= new DatosClientes(arrayClientes);

class ctrl_clientes {
  constructor() {
    arrayClientes = mDatosClientes.getClientes();
    this.elem = arrayClientes[0];
    this.elemVisualizado = 0;

    /* Validaciones */
    
    document.getElementById("lastname").addEventListener('focusout', this.validaApellido);

    /* Eventos CRUD */
    

    document.getElementById("modifica").addEventListener("click", function (event) {
      
      oCtrlClientes.elem = oCtrlClientes.getValues();      
      mDatosClientes.modificar(oCtrlClientes.elemVisualizado,oCtrlClientes.elem);      
      event.preventDefault();
    });

    document.getElementById("inserta").addEventListener("click", function (event) {
        
        oCtrlClientes.elem = oCtrlClientes.getValues();
        mDatosClientes.insertar(oCtrlClientes.elem);       
        oCtrlClientes.elemVisualizado = arrayClientes.length - 1;
        event.preventDefault();
    });

    document.getElementById("elimina").addEventListener("click", function (event) {
        mDatosClientes.eliminar(oCtrlClientes.elemVisualizado)       
        oCtrlClientes.elemVisualizado = 0;
        oCtrlClientes.show();
        event.preventDefault();
    });

    /* Eventos movimiento */  
    document.getElementById("boton1").addEventListener("click", function (event) {
        oCtrlClientes.elemVisualizado = 0;
        oCtrlClientes.show();
        event.preventDefault();
      });

    document.getElementById("boton2").addEventListener("click", function (event) {
        oCtrlClientes.elemVisualizado = 1;
        oCtrlClientes.show();
        event.preventDefault();
      });

    document.getElementById("atras").addEventListener("click", function (event) {
      if (oCtrlClientes.validaApellido()) {
        if (oCtrlClientes.elemVisualizado > 0) {
          oCtrlClientes.elemVisualizado -= 1;
          oCtrlClientes.show();
        }
        event.preventDefault();
      }
        
      });

    document.getElementById("adelante").addEventListener("click", function (event) {
     // if (oCtrlClientes.validaApellido()) {
        if (oCtrlClientes.elemVisualizado < arrayClientes.length - 1) {         
          oCtrlClientes.elemVisualizado += 1;
          oCtrlClientes.show();
          event.preventDefault();          
        }
      //}  
      });

 

    document.getElementById("buscarN").addEventListener("click", function (event) {
        var nombre = document.getElementById("buscarNombre").value;
        var enc = false;

        for (var i = 0; i < arrayClientes.length; i++) {
          if (arrayClientes[i].firstname == nombre) {
            oCtrlClientes.setValues(arrayClientes[i]);
            enc=true;
            oCtrlClientes.elemVisualizado = i;
            oCtrlClientes.show();
            break;
          }
        }
        if (!enc) {
          document.getElementById("buscarNombre").value = "NO ENCONTRADO";
          document.getElementById("buscarNombre").focus();
          document.getElementById("buscarNombre").select();
          oCtrlClientes.vaciar();
          event.preventDefault();
        }
      });
  }


  validaApellido(event) {
    var elemento = document.getElementById("lastname");
    if (elemento.value.length > 10){
      oCtrlClientes.error(elemento, "longitud >10 ");
      return false;
    } 
    /*
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            oCtrlClientes.error(elemento, "Debe introducir un apellido")
        }
      
        if (elemento.validity.patternMismatch) {
          oCtrlClientes.error(elemento, "El apellido debe tener entre 2 y 30 caracteres");
        }
    */
    document.getElementById("mensajeError").innerHTML = "";
    return true;
  }

  error(elemento,mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
  }

  show(){
    var cliente = arrayClientes[oCtrlClientes.elemVisualizado];
    oCtrlClientes.setValues(cliente);
    document.getElementById("id_cliente").value = oCtrlClientes.elemVisualizado;
  }
    
  setValues(cliente) { // Pone obj cli en la vista html
    document.getElementById(cliente.title).checked = true;
    document.getElementById("firstname").value = cliente.firstname;
    document.getElementById("lastname").value = cliente.lastname;
    document.getElementById("email").value = cliente.email;
    document.getElementById("phone").value = cliente.phone;
    document.getElementById("password").value = cliente.password;
    document.getElementById("country").value = cliente.country;
  }

  getValues() {  // Crea obj cli desde la vista html
   
    var elementsTitle = document.getElementsByName("title");

    var title = "";
    for (var i = 0; i < elementsTitle.length; i++) {
      if (elementsTitle[i].checked) {
        title = elementsTitle[i].value;
      }
    }

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var country = document.getElementById("country").value;

    var cli = new Cliente(
      title,
      firstname,
      lastname,
      email,
      phone,
      password,
      country
    );

    return cli;
  }

  vaciar() {
    document.getElementsByName("title").values = false;
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
    document.getElementById("country").value = "";
  }
}

var oCtrlClientes = new ctrl_clientes();
oCtrlClientes.show();


