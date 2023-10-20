import { Cliente } from './pojoClientes.js';

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

  modificar(nCliente, DatosModificados) {
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
   // var temp = JSON.parse(window.localStorage.getItem("clientes"));
   this.arrayClientes = JSON.parse(window.localStorage.getItem("clientes"));

  /*  for (i=0;i<temp.length;i++){
      this.arrayClientes[i]= new Cliente(temp[i].title, ...Cliente. firstname, lastname, email, phone, password, country)
    i} 
   */
  }

}