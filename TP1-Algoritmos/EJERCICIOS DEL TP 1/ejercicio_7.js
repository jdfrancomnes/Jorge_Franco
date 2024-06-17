
// A partir del siguiente array que se proporciona:
// var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los “ elementos de texto ” es mayor, es decir el que contenga más letras
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.

var valores = [true, false, 2, "hola", "mundo", 3, "char"];
//Determinar cuál de los elementos de texto es mayor: 
// variable para almacenar el elemento de texto más largo
var elementoMasLargo = "";
var vectorString = [];
var vectorNumber = [];
var contenido = 0;

// Recorrer array
for (var i = 0; i < valores.length; i++) {
    
    contenido = valores[i];

    // Verificar si elemento actual es de tipo string
    if (typeof contenido === "string") {
        // Cargo en el nuevo vector el contenido que es de tipo strimg
        vectorString.push(contenido);
        // Comparamos la longitud del elemento actual con la longitud del elemento más largo
        if (contenido.length > elementoMasLargo.length) {
            // Asignamos el elemento más largo en la variable elementoMasLargo
            elementoMasLargo = contenido;
        }
    }

    // Verifico si el contenido (o elemento actual) es de tipo numérico
    if (typeof contenido === "number"){
        // Cargo en el nuevo vector el contenido que es numérico
        vectorNumber.push(contenido);
    }

}
// Ordenamos el nuevo vector que contiene solo valores string
vectorString.sort( (a, b) => a.length - b.length);

// Recorro el nuevo vector de string previamente ordenado y lo muestro.
for (var i = 0; i < vectorString.length; i++) {
    // Hacer un document.write
    console.log(vectorString[i]);
}

// Muestro el elemento string más largo
// Hacer un document.write para mostrar el elemento más largo
document.write("El elemento de texto más largo es :   "   +  "</br>" + elementoMasLargo + "</br>" + "</br>");


// Resuelvo las cuatro operaciones matemáticas 
suma = vectorNumber[0] + vectorNumber[1] ;
resta = vectorNumber[0] - vectorNumber[1] ;
multiplicacion = vectorNumber[0] * vectorNumber[1] ;
division = vectorNumber[0] / vectorNumber[1] ;

// Para los cuatro renglones: Hacer un document.write
document.write(" El resultado de las operaciones es : " + "</br>" )
document.write('Suma:' + suma + "</br>");
document.write('Resta:' + resta + "</br>");
document.write('Multiplicación:' + multiplicacion + "</br>");
document.write('División:' + division + "</br>");



