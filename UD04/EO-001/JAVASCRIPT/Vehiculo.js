

export class Vehiculo {
    constructor(marca, modelo, color, fabricacion, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.fabricacion = fabricacion;
        this.cilindrada = cilindrada;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    get color() {
        return this._color;
    }
    get fabricacion() {
        return this._fabricacion;
    }
    get cilindrada() {
        return this._cilindrada;
    }
    acelerar() {
        return "Se acelera"
    }
    frenar() {
        return "Se frena"
    }
    mostrarDatos(tipo) {

    }

}
