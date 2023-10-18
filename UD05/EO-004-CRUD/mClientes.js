import { Cliente } from './PojoClientes.js';

export { DatosClientes };

class DatosClientes {

  constructor(arrayClientes) {
   
    this.CargarClientes();
    if (this.arrayClientes == null)
       this.arrayClientes=[]; // Esto es importante
    if (this.arrayClientes.length == 0){
      this.arrayClientes=[]; // Esto es importante
      this.CreaDosClientes();     
    }
    }

  CreaDosClientes(){

    console.log("Creando datos");
        
    var cl1 = new Cliente(
      "mr",
      "Hector",
      "Granell",
      "hector@gmail.com",
      "654445",
      "contraseñaHector",
      "Spain"
    );
    console.log(cl1.firstname);
    this.arrayClientes.push(cl1);

    var cl2 = new Cliente(
      "mrs",
      "Emma",
      "Ihrer",
      "emma@gmail.com",
      "08912345678",
      "contraseñaEmma",
      "Germany"
    );
    this.arrayClientes.push(cl2);


    this.GuardaClientes()   

  }


  getClientes() {
    return this.arrayClientes;
  }

  modificar1(nCliente, DatosModificados) {
    // Este funciona si creamos los objetos con añadir !!!
    this.arrayClientes[nCliente].setTitle(DatosModificados.getTitle());    
    this.arrayClientes[nCliente].setFirstName(DatosModificados.getFirstName());
    this.arrayClientes[nCliente].setLastName(DatosModificados.getLastName());
    this.arrayClientes[nCliente].setEmail(DatosModificados.getEmail());
    this.arrayClientes[nCliente].setPhone(DatosModificados.getPhone());
    this.arrayClientes[nCliente].setPassword(DatosModificados.getPassword());
    this.arrayClientes[nCliente].setCountry(DatosModificados.getCountry());
    this.GuardaClientes()
  }

  modificar(nCliente, DatosModificados) {
    // Esto es por cargar objetos del localStorage
    this.arrayClientes[nCliente].title=DatosModificados.getTitle();
    this.arrayClientes[nCliente].FirstName =DatosModificados.getFirstName();
    this.arrayClientes[nCliente].LastName=DatosModificados.getLastName();
    this.arrayClientes[nCliente].Email=DatosModificados.getEmail();
    this.arrayClientes[nCliente].Phone=DatosModificados.getPhone();
    this.arrayClientes[nCliente].Password=DatosModificados.getPassword();
    this.arrayClientes[nCliente].Country=DatosModificados.getCountry();
    this.GuardaClientes()
  }

  insertar(cliente) {
    this.arrayClientes.push(cliente);
    this.GuardaClientes()   
  }

  eliminar(idcliente) {
    this.arrayClientes.splice(idcliente,1); 

    this.GuardaClientes()
  }
 
  GuardaClientes(){    
    window.localStorage.setItem('clientes', JSON.stringify(this.arrayClientes));
  }

  CargarClientes(){
    this.arrayClientes = JSON.parse(window.localStorage.getItem("clientes"));    
  }

}
