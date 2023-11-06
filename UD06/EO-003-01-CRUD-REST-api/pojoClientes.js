
export { Cliente };

class Cliente {
 
  arrayTodosClientes = [];
  
  constructor(id, genero, firstname, lastname, email, phone, password, country) {
    this.id = id;
    this.genero = genero;
    this.fname = firstname;
    this.lname = lastname;
    this.email = email;
    this.phone = phone;
    this.passwd = password;
    this.id_pais = country;
    
  }

  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }

  getGenero(){
    return this.genero;
  }

  setGenero(genero){
    this.genero=genero;
  }

  getFirstName() {
    return this.firstname;
  }
  setFirstName(fname) {
    this.firstname = fname;
  }

  getLastName() {
    return this.lastname;
  }
  setLastName(lname) {
    this.lastname = lname;
  }

  getEmail() {
    return this.email;
  }
  setEmail(mail) {
    this.email = mail;
  }

  getPhone() {
    return this.phone;
  }
  setPhone(phone) {
    this.phone = phone;
  }

  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }

  getCountry() {
    return this.country;
  }
  setCountry(country) {
    this.country = country;
  }
}
