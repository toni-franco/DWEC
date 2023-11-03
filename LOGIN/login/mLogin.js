import { Usuario } from './pojoUsuarios.js';

export { ServicioLogin };

// OJO: NUNCA USAR UN FORM con un FETCH. el METHOD post puede LIARLA !!!!
// Y SI NO LO PONES CAMBIARÁ LA URL Y NO VERÁS NADA !!!

class ServicioLogin {

  miToken = null;

  constructor() { }

  fecha(){
    var date = new Date;
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var sec = date.getSeconds();
    return hour+":"+minutes+":"+sec;
  }

  signin(usu) {

    console.log("usuario", JSON.stringify(usu));
    var user1 = { "username": usu.username, "password": usu.password }

    var user = { "username": "user1", "password": "password1" }

    var jsonAEnviar = JSON.stringify(user);

    const options = {
      "method": "POST",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
      },
      "body": jsonAEnviar
    }

    
    fetch("http:///localhost:4200/signin",
      {
        "method": "POST",
        "headers": {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
        "body": jsonAEnviar        
      })
      .then((response) => {
      if (response.result == null) console.log("a vore");
      console.log("response.status =", response.status); // response.status = 201
      //if (response.status == 200) {
      console.log(response.statusText);      
      // console.log("la cabecera de respuesta contiene el token");
      // console.log(response.headers.get("Set-Cookie"));    Set-Cookie         
      return response.json();
      //console.log(response.text());
    })
      .then((auth) => {
        this.miToken    = auth;
        console.log(auth);
        console.log("Token recibio del servidor:")
        console.log(this.fecha()," ",auth.accessToken);
        window.localStorage.setItem('accessToken',auth.accessToken);
      });

  }

  insertar() {

    // Coge el token de la memoria
    console.log(this.miToken);       
    // En otra web lo coge de algún almacenamiento !!!
    // this.miToken = window.localStorage.getItem("accessToken");
    // var auth = '{"accessToken": "'+this.miToken+'"}'; 


    var auth = JSON.stringify(this.miToken); 
    var DatoInserta = { "nombre": "Toni", "clave": "Miclave", "correo": "toni@node" }

    var jsonAEnviar = JSON.stringify(DatoInserta);

    fetch('http://localhost:4200/insertar',
      {
        method: 'POST',
        body: jsonAEnviar,
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
          Authorization: auth
        },
      }).then(resp => {
        console.log("response.status =", resp.status); 
        if (resp.status == 200) {          
          return resp.text(); 
        } else {return resp.statusText}

      }).then(texto => console.log(this.fecha()," ",texto))
  }


  refresh() {

    fetch('http://localhost:4200/refresh',
      {
        method: 'POST',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
          Authorization: JSON.stringify(this.miToken   )
        },
      }).then(resp => {
        if (resp.status == 200) {
          return resp.json();
        }
      }).then((auth) => {
        this.miToken    = auth; // Actualiza el nuevo token    
        console.log("Nuevo Token recibio del servidor:")
        console.log(this.fecha()," ",auth.accessToken);  
        window.localStorage.setItem('accessToken',auth.accessToken);  
      })

  }

  logout() {   

    fetch('http://localhost:4200/logout',
      {
        method: 'POST',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
          Authorization: JSON.stringify(this.miToken   )
        },
      }).then(resp => {
        if (resp.status == 200) {
          return resp.json();
        }
      }).then((auth) => {
        this.miToken    = auth; // Actualiza el nuevo token que es invalido ya !!    
        console.log(this.fecha()," ","Token eliminado del servidor!!!")
        //window.localStorage.setItem('accessToken',auth.accessToken); 
        window.localStorage.removeItem('accessToken');        
      })

  }

}