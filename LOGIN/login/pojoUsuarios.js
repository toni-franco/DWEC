export { Usuario };

class Usuario {
 
  constructor(username, password) {
    this.username= username;
    this.password = password;    
  }

  getUsername() {
    return this.username;
  }
  setUsername(Username) {
    this.username = Username;
  }

  getPassword() {
    return this.password;
  }
  setPassword(Password) {
    this.password = Password;
  }
}
