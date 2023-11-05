import { Cliente } from './pojoClientes.js';
export { DatosClientes };

class DatosClientes{

  arrayClientes=[];

  constructor() {
    this.arrayClientes=[];
    this.CargarClientes();
  }

  getAllClient() {
    return this.arrayClientes;
  }

 
  async insertar(cliente) {
    try {

      cliente.id="";
      const jsonAEnviar = JSON.stringify(cliente);
      const response = await fetch("./api/api.php/clientes/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: ""+jsonAEnviar
      });     
      if (response.ok) {
          console.log(response);
          var texto=await response.text();
          //console.log(texto);
          cliente.id = texto;   
          console.log("id en bd:",texto)   
          this.arrayClientes.push(cliente);
      } else {
          console.log("Algo no ha funcionado en la BBDD");
          throw new Error("Error al insertar el cliente en la BD.");        
      }
    } catch (error) {
      console.error(error);
    }
  }

  async modificar(nCliente, DatosModificados) {
    try {

      this.arrayClientes[nCliente].id     = DatosModificados.id;        
      this.arrayClientes[nCliente].genero = DatosModificados.genero;
      this.arrayClientes[nCliente].fname  = DatosModificados.fname;
      this.arrayClientes[nCliente].lname  = DatosModificados.lname;
      this.arrayClientes[nCliente].email  = DatosModificados.email;
      this.arrayClientes[nCliente].phone  = DatosModificados.phone;
      this.arrayClientes[nCliente].passwd = DatosModificados.passwd;
      this.arrayClientes[nCliente].country= DatosModificados.country;

      //var cliente = this.arrayClientes[nCliente];
      const jsonAEnviar = JSON.stringify( DatosModificados);
      let url = "./api/api.php/clientes/"+DatosModificados.id+"&order=update"; 
      //let url = `./api/api.php/cliente?id=${cliente.id}&nombre=${nombre}&apellido=${apellido}&email=${email}&telefono=${telefono}&order=update`

      const response = await fetch(url, {
        method: "PUT",
        headers: {          
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: jsonAEnviar
      });

      if (response.ok) {
        console.log("Cliente actualizado.");       
      } else {
        console.log("Algo no ha funcionado en la BBDD");
        throw new Error("Error al actualizar el cliente.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async eliminar(idcliente) {
    try {
      var cliente = this.arrayClientes[idcliente];      
      let url = "./api/api.php/clientes/"+cliente.id; 
      console.log("elimina",cliente.id);
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });

      if (response.ok) {
        console.log("Cliente eliminado.");        
        this.arrayClientes.splice(idcliente,1);
        //return "1"
      } else {
        throw new Error("Error al eliminar el cliente.");
      }
    } catch (error) {
      console.error(error);
    }
  }


  async CargarClientes() {
    this.arrayClientes=[] ;    
    let url ="./api/api.php/clientes";
    let promesaClientes = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    });
    let response = await promesaClientes.json();
    var clientes = await response;   
    //console.log(clientes);
    clientes=clientes.clientes.records; 

    for (var i = 0; i < clientes.length; i++) {
      var ncliente = new Cliente(
                                clientes[i][0],
                                clientes[i][1],
                                clientes[i][2],
                                clientes[i][3],
                                clientes[i][4],
                                clientes[i][5],
                                clientes[i][6],
                                clientes[i][7]);  
      console.log("i",i,"cliente",ncliente);                                                                   
      
      this.arrayClientes.push(ncliente);

    }   
  }  
  
}