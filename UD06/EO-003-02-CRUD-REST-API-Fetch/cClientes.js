import { Cliente } from './pojoClientes.js';
import { DatosClientes } from './mClientes.js';

const primerNombre = document.getElementById("firstname");
const telefono = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

class ctrl_clientes {

    VistaArrayClientes = [];

    elemVisualizado = 0;
    elem =null;
    
    constructor() {
        // console.log("construye controlado Clientes")
 
     
        primerNombre.addEventListener('focusout', this.validarNombre);
        //primerNombre.addEventListener("blur", validarNombre);
        telefono.addEventListener("blur", validarTelefono);
        emailInput.addEventListener("blur", validarEmail);
        passInput.addEventListener("blur", validarContrasena);

        document.getElementById("lastname").addEventListener('focusout', this.validaApellido);

        document.getElementById("modifica").addEventListener("click", function (event) {

            oCtrlClientes.elem = oCtrlClientes.getValues();

            // Necessitem el id de la BD del objete
           oCtrlClientes.elem.id = document.getElementById("id_BD").value;

            mDatosClientes.modificar(oCtrlClientes.elemVisualizado, oCtrlClientes.elem);
            event.preventDefault();
        });

        document.getElementById("inserta").addEventListener("click", function (event) {

            oCtrlClientes.elem = oCtrlClientes.getValues();
            mDatosClientes.insertar(oCtrlClientes.elem);
            oCtrlClientes.elemVisualizado = this.VistaArrayClientes.length - 1;
            event.preventDefault();
        });

        document.getElementById("elimina").addEventListener("click", function (event) {
            mDatosClientes.eliminar(oCtrlClientes.elemVisualizado)
            oCtrlClientes.elemVisualizado = 0;
            oCtrlClientes.show();
            event.preventDefault();
        });

        document.getElementById("showTable").addEventListener('click', () => {
           
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.tabla').style.display = 'block';
            this.actualizarTabla();
        });

        document.getElementById("vistaVerticalButton").addEventListener('click', () => {
            document.querySelector('.container').style.display = 'block';
            document.querySelector('.tabla').style.display = 'none';
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
              if (oCtrlClientes.elemVisualizado < this.VistaArrayClientes.length - 1) {         
                oCtrlClientes.elemVisualizado += 1;
                oCtrlClientes.show();
                event.preventDefault();          
              }
            //}  
            });
      

        document.getElementById("buscarN").addEventListener("click", function (event) {
            var nombre = document.getElementById("buscarNombre").value;
            var enc = false;

            for (var i = 0; i < this.VistaArrayClientes.length; i++) {
                if (this.VistaArrayClientes[i].firstname == nombre) {
                    oCtrlClientes.setValues(this.VistaArrayClientes[i]);
                    enc = true;
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


    
actualizarTabla() {
    const tablaBody = document.getElementById("tablaClientesBody");
    tablaBody.innerHTML = ''; 

    for (var i = 0; i < this.VistaArrayClientes.length; i++) {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${this.VistaArrayClientes[i].fname}</td>
            <td>${this.VistaArrayClientes[i].lname}</td>
            <td>${this.VistaArrayClientes[i].email}</td>
            <td>${this.VistaArrayClientes[i].phone}</td>
            <td>${this.VistaArrayClientes[i].country}</td>
            <td><button class="eliminarCliente" data-index="${i}" bd-index="${this.VistaArrayClientes[i].id}">Eliminar</button></td>
            <td><button class="verCliente" data-index="${i}" bd-index="${this.VistaArrayClientes[i].id}">Editar</button></td>
        `;
        tablaBody.appendChild(row);
    }

    const botonesEliminar = document.querySelectorAll(".eliminarCliente");
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            //oCtrlClientes.eliminarCliente(index);

            mDatosClientes.eliminar(index);
            //oCtrlClientes.elemVisualizado = index-1;
            //oCtrlClientes.show()
            oCtrlClientes.actualizarTabla();
        });
    });

    const botonesVer = document.querySelectorAll(".verCliente");
    botonesVer.forEach(boton => {
        boton.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            oCtrlClientes.elemVisualizado = index;           
            document.querySelector('.container').style.display = 'block';
            document.querySelector('.tabla').style.display = 'none';  
            oCtrlClientes.show();

        });
    });


}


eliminarCliente(index) {
   
    if (this.VistaArrayClientes) {
        this.VistaArrayClientes.splice(index, 1);
        mDatosClientes.GuardaClientes();
        oCtrlClientes.actualizarTabla();
        oCtrlClientes.show();
    }
}


    validaApellido(event) {
        var elemento = document.getElementById("lastname");
        if (elemento.value.length > 10) {
            oCtrlClientes.error(elemento, "La longitud tiene que ser mayor de 10!! ");
            return false;
        }

        document.getElementById("mensajeError").innerHTML = "";
        return true;
    }

    validarNombre() {
        const firstname = primerNombre.value;
        if (firstname.trim().length < 2 || firstname.trim().length > 30) {
            mostrarMensajeError("El nombre debe tener entre 2 y 30 caracteres.");
            bloquearElementosExceptoInput(primerNombre);
        } else {
            borrarMensajeError();
            desbloquearElementosExceptoInput(primerNombre); 
        }
    }


    error(elemento, mensaje) {
        document.getElementById("mensajeError").innerHTML = mensaje;
        elemento.className = "error";
        elemento.focus();
    }



    setValues(cliente) {
        document.getElementById("id_BD").value = cliente.id;
        document.getElementById("id_cliente").value = cliente.id;
        document.getElementById("genero").value = cliente.genero;
        document.getElementById("firstname").value = cliente.fname;
        document.getElementById("lastname").value = cliente.lname;
        document.getElementById("email").value = cliente.email;
        document.getElementById("phone").value = cliente.phone;
        document.getElementById("password").value = cliente.passwd;
        document.getElementById("country").value = cliente.country;
    }

    getValues() {
           
        var id=document.getElementById("id_cliente").value;
        var genero = document.getElementById("genero").value;
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var country = document.getElementById("country").value;

        //id,genero, firstname, lastname, email, phone, password, country
        var cli = new Cliente(
            id,
            genero,
            firstname,
            lastname,
            email,
            phone,
            password,
            country
        );

       // console.log("cli en getvalues",cli,"genero:",genero);

        return cli;
    }

    vaciar() {
        document.getElementsByName("id_cliente").values ="";
        document.getElementsByName("genero").values ="";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("password").value = "";
        document.getElementById("country").value = "";
    }


    show() {
        if (this.VistaArrayClientes.length>0){
            var cliente = this.VistaArrayClientes[oCtrlClientes.elemVisualizado];
            oCtrlClientes.setValues(cliente);
            document.getElementById("id_cliente").value = oCtrlClientes.elemVisualizado;
            this.elem = cliente;            
        }
    }

    init(){
 
                this.VistaArrayClientes=mDatosClientes.getAllClient();                
                console.log("INIT 1 ",new Date().toISOString(),this.VistaArrayClientes);
                this.elem = this.VistaArrayClientes[0];               
                console.log("-----------------------------------------------------");
                console.log("INIT 2. Observa que pasa por aquí "+new Date().toISOString()+" y no tiene datos ", this.elem);
                console.log("-----------------------------------------------------");
                if (true) {

                    // Carga la página cada 2 segundos !!
                    var  timer1 = setInterval(() => {
                        console.log("-");
                        this.show();
                        console.log("INIT 3. Refresh "+new Date().toISOString(),this.elem );
                    },2*1000)
                    
                    // Para de recargar pasados 5 segundos
                    setTimeout(() => clearInterval(timer1), 5*1000)  
                
                } else this.show();

    }
}


function validarNombre() {
    const firstname = primerNombre.value;
    if (firstname.trim().length < 2 || firstname.trim().length > 30) {
        mostrarMensajeError("El nombre debe tener entre 2 y 30 caracteres.");
        bloquearElementosExceptoInput(primerNombre);
    } else {
        borrarMensajeError();
        desbloquearElementosExceptoInput(primerNombre); 
    }
}

function validarTelefono() {
    const phone = telefono.value;
    if (!isValidPhoneNumber(phone)) {
        mostrarMensajeError("El número de teléfono debe tener 9 dígitos.");
        bloquearElementosExceptoInput(telefono);
    } else {
        borrarMensajeError();
        desbloquearElementosExceptoInput(telefono); 
    }
}

function validarEmail() {
    const email = emailInput.value;
    if (!isValidEmail(email)) {
        mostrarMensajeError("Por favor, ingrese una dirección de correo electrónico válida.");
        bloquearElementosExceptoInput(emailInput);
    } else {
        borrarMensajeError();
        desbloquearElementosExceptoInput(emailInput); 
    }
}

function validarContrasena() {
    const password = passInput.value;
    if (password.length < 8) {
        mostrarMensajeError("La contraseña debe tener al menos 8 caracteres.");
        bloquearElementosExceptoInput(passInput);
    } else {
        borrarMensajeError();
        desbloquearElementosExceptoInput(passInput); 
    }
}

function bloquearElementosExceptoInput(input) {
    const elementosBloquear = document.querySelectorAll('button, input:not(#' + input.id + ')');

    elementosBloquear.forEach(elemento => {
        elemento.classList.add('bloqueado');
    });
}

function desbloquearElementosExceptoInput(input) {
    const elementosDesbloquear = document.querySelectorAll('button, input:not(#' + input.id + ')');

    elementosDesbloquear.forEach(elemento => {
        elemento.classList.remove('bloqueado');
    });
}


function mostrarMensajeError(mensaje) {
    const mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = mensaje;
}

function borrarMensajeError() {
    const mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";
}

function isValidPhoneNumber(phone) {
    return /^\d{9}$/.test(phone);
}

function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

console.log("Javascript, es un lenguaje mono-hilo, esto quiere decir que la interpretación \n \
de nuestro código se atiende por un único hilo de ejecución. El navegador \n \
Crea los hilos para gestionar eventos y otros aspectos.\n \
Por lo mismo se programa de manera no bloqueante y \n \
frecuentemente utilizamos llamadas asíncronas.");

console.log("MAIN. Paso  1",new Date().toISOString());

console.log("MAIN. Asincronia. En el constructor a cargan los datos asincronamente ",new Date().toISOString());
var mDatosClientes = new DatosClientes();

console.log("MAIN. Paso 2",new Date().toISOString());
console.log("MAIN. Creamos el controlador y define los eventos (otro thread)",new Date().toISOString());

var oCtrlClientes = new ctrl_clientes();

console.log("MAIN. Paso 3. Ejecutar INIT",new Date().toISOString());
oCtrlClientes.init();

console.log("MAIN. Paso 4. FIN",new Date().toISOString());
console.log("------------------------------------");


