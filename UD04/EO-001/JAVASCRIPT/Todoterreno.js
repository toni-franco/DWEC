
import Vehiculo from "./Vehiculo"

export default class Todoterreno extends Vehiculo {

    constructor(marca, modelo, color, fabricacion, cilindrada, traccion) {
        Vehiculo.call(this, marca, modelo, color, fabricacion, cilindrada);
        this.traccion = traccion;
    }

    mostrarDatos() {
        return this.traccion;
    }

    

}