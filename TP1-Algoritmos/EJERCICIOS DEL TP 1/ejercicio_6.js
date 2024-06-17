// Crear el archivo “ejercicio_6.js”. Declarar un array llamado “meses” y que tenga guardado los meses
// del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este le devolverá el
// nombre del mes. Por ejemplo, escrib ir un 5 debe devo lver el mes mayo.


let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre","octubre", "noviembre"
, "dicienmbre"]
console.log(meses);

let numes = prompt("escriba un numero de mes");


alert('el mes que Ud. selecciono es  : ' + meses[numes - 1])

 

//opcion b

//let messelec = ""
 

//      switch (numes) {
//         case "1":
//             messelec = "enero"
//             break;
//         case "2":
//             messelec = "febrero"
//             break;
//         case "3":
//             messelec = "marzo"
//             break;
//         case "4":
//             messelec = "abril"
//             break;
//         case "5":
//             messelec = "mayo"
//             break;
//         case "6":
//             messelec = "junio"
//             break;

//         case "7":
//             messelec = "julio"
//             break;
//         case "8":
//             messelec = "agosto"
//             break;
//         case "9":
//             messelec = "septiembre"
//             break;
//         case "10":
//             messelec = "octubre"
//             break;

//         case "11":
//             messelec = "noviembre"
//             break;
//         case "12":
//             messelec = "diciembre"
//             break;
//         ;
//      }  
     
  

// alert("el mes que ud. eligio es : " + messelec)
    