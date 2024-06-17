// Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el
// usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5
// Reprobado ”, entre 6 y 8 Aprobado ” y si es mayor a 8 Sobresaliente


let i = 0
let notas = [];
let suma = 0;


while (i < 5) {

    let nota = parseInt(prompt("Ingrese la Nota N°" + i));

       if (nota >= 0 && nota < 11) {
        notas[i] = nota
        suma += notas[i];
        i++;
       } else {
        alert("Nota invalida, por favor ingrese otro valor");
    }
}

    document.write("La suma de las notas es : " + suma + "</br>");

    let prom = (suma / notas.length);


 console.log(notas);
 document.write("El promedio  de las notas es : "   + prom ) ;

    if (prom <= 5) {
    document.write("    Reprobado");
}   else if (prom > 5 && prom <= 8) {
    document.write("    Aprobado");
} 
    else {
    document.write("    Sobresaliente");
}

