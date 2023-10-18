
export { Cliente };

class Cliente {
 
  arrayTodosClientes = [];
  
  constructor(title, firstname, lastname, email, phone, password, country) {
    this.title = title;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.country = country;
  }

  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
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

