import { Usuario } from './pojoUsuarios.js';
import { ServicioLogin } from './mLogin.js';


var srvLogin = new ServicioLogin();
// var srvLogin.miToken  = "";

class ctrl_login {
    constructor() {
        
        document.getElementById("signin").addEventListener("submit", function (event) {
            
            var usuario= oCtrlLogin.getValues();
           // srvLogin.signin(usuario)

        });

      

    }

 
    error(elemento, mensaje) {
        document.getElementById("mensajeError").innerHTML = mensaje;
        elemento.className = "error";
        elemento.focus();
    }
      
    getValues() {

        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;
        

        var cli = new Usuario(
            usuario,
            clave
        );

        return cli;
    }

    vaciar() {
        document.getElementById("usuario").value = "";
        document.getElementById("clave").value = "";
    }
}

var oCtrlLogin = new ctrl_login();

