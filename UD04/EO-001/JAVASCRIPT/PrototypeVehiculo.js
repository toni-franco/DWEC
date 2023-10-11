
function Vehiculo(marca, modelo, color, fabricacion, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.fabricacion = fabricacion;
    this.cilindrada = cilindrada;

    acelerar = function () {
        return "Se acelera";
    }
    frenar = function () {
        return "Se frena";
    }
    mostrarDatos = function () {

    }
}

function Todoterreno(traccion) {
    Vehiculo.call();
    this.traccion = traccion;
}

Todoterreno.prototype = new Vehiculo();