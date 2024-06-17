// Ejercicio 12
// Crear un archivo con el nombre “ejercicio_1 2 .js” que contenga el código JavaScri pt donde cree una
// clase base y luego hereden de ella para crear una clase hija. La clase representará algo general, como un
// vehículo , y la clase hija podría ser un tipo específico de vehículo, como un automóvil En este ejercicio
// deberán realizar los sigui entes pasos
//  Definir una clase base Vehiculo con tres atributos (marca, modelo y año) y una función
// obtenerInformacion ) para mostrar información del
//  Crear una clase hija Automovil que hereda de Vehiculo y añadir dos nuevos atributos (color y precio).
// También se sobrescribe el método obtenerInformacion para incluir la información específica del
// automóvil.
//  Crear instancias de ambas clases y mostrar la información en la consola del navegador.


// Definimos la clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Creamos la clase hija Automovil que hereda de Vehiculo
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año); 
        // Llamamos al constructor de la clase base
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        // Sobrescribimos el método para incluir información específica del automóvil
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: $${this.precio}`;
    }
}

// Creamos instancias de ambas clases
const miVehiculo = new Vehiculo("Toyota", "Fiat", 2021);
const miAutomovil = new Automovil("Ford", "Focus", 2023, "Rojo", 25000);

// Mostramos la información en la consola
console.log("Información del Vehículo:");
console.log(miVehiculo.obtenerInformacion());

console.log("\nInformación del Automóvil:");
console.log(miAutomovil.obtenerInformacion());

