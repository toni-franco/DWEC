import Vehiculo from "./Vehiculo"

export default class Furgoneta extends Vehiculo {

    constructor(marca, modelo, color, fabricacion, cilindrada, pasajeros) {
        Vehiculo.call(this, marca, modelo, color, fabricacion, cilindrada);
        this.pasajeros = pasajeros;
    }
    get marca(){
        return this.marca;
    }
    get modelo(){
        return this.modelo;
    }
    get color(){
        return this.color;
    }
    get fabricacion(){
        return this.fabricacion;
    }
    get cilindrada(){
        return this.cilindrada;
    }
    acelerar(){
        return "Se acelera"
    }
    frenar(){
        return "Se frena"
    }
    mostrarDatos(){
        return this.pasajeros;
    }

}