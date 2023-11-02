import { Cliente } from './pojoClientes.js';

export { DatosClientes };

class DatosClientes {

  constructor() {
   
    //this.CargarClientes();
    console.log("construye DatosClientes")
  }

 


  getClientes() {
    return this.arrayClientes;
  }

  modificar(nCliente, DatosModificados) {
   /*
    this.arrayClientes[nCliente].setTitle(DatosModificados.getTitle());    
    this.arrayClientes[nCliente].setFirstName(DatosModificados.getFirstName());
    this.arrayClientes[nCliente].setLastName(DatosModificados.getLastName());
    this.arrayClientes[nCliente].setEmail(DatosModificados.getEmail());
    this.arrayClientes[nCliente].setPhone(DatosModificados.getPhone());
    this.arrayClientes[nCliente].setPassword(DatosModificados.getPassword());
    this.arrayClientes[nCliente].setCountry(DatosModificados.getCountry());
*/

    this.arrayClientes[nCliente].id     = DatosModificados.id;        
    this.arrayClientes[nCliente].genero = DatosModificados.genero;
    this.arrayClientes[nCliente].fname  = DatosModificados.fname;
    this.arrayClientes[nCliente].lname  = DatosModificados.lname;
    this.arrayClientes[nCliente].email  = DatosModificados.email;
    this.arrayClientes[nCliente].phone  = DatosModificados.phone;
    this.arrayClientes[nCliente].passwd = DatosModificados.passwd;
    this.arrayClientes[nCliente].id_pais= DatosModificados.id_pais;
    
    
    var cliente = this.arrayClientes[nCliente];

    const jsonAEnviar = JSON.stringify(cliente);
    console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    
    xhr.open("POST", "./backend/mod-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //console.log(phptext);
    if (phptext == "Error") {
      //console.log("Algo no ha funcionado en la BBDD")
    } else {
      //cliente.id = phptext;
    }
    //this.GuardaClientes()
  }

 
  insertar(cliente) {

    const jsonAEnviar = JSON.stringify(cliente);
    console.log("insert -->",jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./backend/ins-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    console.log(phptext);
    if (phptext == "Error") {
      //console.log("Algo no ha funcionado en la BBDD")
    } else {
      cliente.id = phptext;   
      console.log("id en bd:",phptext)   
      this.arrayClientes.push(cliente);
    }

    // Abans (localstorage):
    //this.arrayClientes.push(cliente);
    //this.GuardaClientes()   
  }

  eliminar(idcliente) {

  //  console.log("eliminar el ",idcliente);   
    var cliente = this.arrayClientes [idcliente];
    const jsonAEnviar = JSON.stringify(cliente);
    console.log("Eliminar",cliente);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./backend//del-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //console.log(phptext);
    if (phptext == "Error") {
      //console.log("Algo no ha funcionado en la BBDD")
      return "Error"
    } else {
      //console.log("Borrado correctamente")
      //this.aClientes.pop(cliente);
      this.arrayClientes.splice(idcliente,1);
      return "1"
    }

    //this.arrayClientes.splice(idcliente,1); 
    //this.GuardaClientes()
  }
 
  GuardaClientes(){    
    window.localStorage.setItem('clientes', JSON.stringify(this.arrayClientes));
    
  }

  async CargarClientes(){
   // this.arrayClientes = JSON.parse(window.localStorage.getItem("clientes"));

   const promesaUsuarios = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    let url = `./backend/get-clientes.php`;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var clientes = JSON.parse(this.responseText);
        resolve(clientes);
      } else {
        reject;
      }
    };
    xhr.send();
  });


  this.arrayClientes = [];
  
  await promesaUsuarios.then(
    clientes => {
                  for (var i = 0; i < clientes.length; i++) {
                    var cliente = new Cliente(clientes[i][0], clientes[i][1], clientes[i][2], clientes[i][3], clientes[i][4], clientes[i][5], clientes[i][6], clientes[i][7]);
                    //console.log(cliente);
                    this.arrayClientes.push(cliente);
                  }
                  console.log("modelo en cargar:",this.arrayClientes);                 
              }
    , error => {
                console.log(error)
                return []
    } 
  )
  return this.arrayClientes;

 
  }

}