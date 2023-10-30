
// Pojo Cliente
class pCliente {
  constructor(id, genero, fname, lname, email, phone, passwd, id_pais) {
    this.id = id;
    this.genero = genero;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.passwd = passwd;
    this.id_pais = id_pais;
  }
}

class mClientes {
  aClientes = new Array();
  constructor() {
    var aClientes = new Array();
  }




  getClientes() {
    return this.aClientes;
  }
  getCliente(num) {
    //console.log(num + ": " + this.aClientes[num] + ": " + this.aClientes[num].id);
    return this.aClientes[num];
  }

  AddCliente(cliente) {

    const jsonAEnviar = JSON.stringify(cliente);
    //console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../ins-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //console.log(phptext);
    if (phptext == "Error") {
      //console.log("Algo no ha funcionado en la BBDD")
    } else {
      cliente.id = phptext;
      aClientes.push(cliente);
    }

  }


  DelCliente(num) {
    var cliente = aClientes[num];
    const jsonAEnviar = JSON.stringify(cliente);
    //console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../del-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //console.log(phptext);
    if (phptext == "Error") {
      //console.log("Algo no ha funcionado en la BBDD")
      return "Error"
    } else {
      //console.log("Borrado correctamente")
      this.aClientes.pop(cliente);
      return "1"
    }
  }

  Modificar(num, DN) {

    aClientes[num].id = DN.id;
    aClientes[num].genero = DN.genero;
    aClientes[num].fname = DN.fname;
    aClientes[num].lname = DN.lname;
    aClientes[num].email = DN.email;
    aClientes[num].phone = DN.phone;
    aClientes[num].passwd = DN.passwd;
    aClientes[num].id_pais = DN.id_pais;

    var cliente = aClientes[num];

    const jsonAEnviar = JSON.stringify(cliente);
    //console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../mod-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //console.log(phptext);
    if (phptext == "Error") {
      //console.log("Algo no ha funcionado en la BBDD")
    } else {
      //cliente.id = phptext;
    }
  }

  CargarClientes() {
    var xhr = new XMLHttpRequest();
    var txt = "";
    xhr.open("GET", "../get-clientes.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        var clientes = JSON.parse(this.responseText);
        aClientes = [];
        for (var i = 0; i < clientes.length; i++) {
          var cliente = new pCliente(clientes[i][0], clientes[i][1], clientes[i][2], clientes[i][3], clientes[i][4], clientes[i][5], clientes[i][6], clientes[i][7]);
          aClientes.push(cliente);
        }

      }
    }
    //xhr.open("GET", "../get-clientes.php", true); // TRUE -> asincrono 
    xhr.open("GET", "../get-clientes.php", false); // false -> sincrono !!
    xhr.send();



  }

}
