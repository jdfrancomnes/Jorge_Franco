// Ejercicio 8:Escribir un script que muestre la posic ión de la primera vocal de un texto introducido por teclado. Por
// ejemplo perro = “e” es la letra Nº 2 árbol = “a” es la letra Nº1
// 



 let tex1 = prompt("por favor escriba una palabra", "..." ) ;

 

//   ubiletra1 = tex1.slice(1,2); 
//  //const contad = i + 1;
//  alert("la primer vocal de la palabra ingresada es:  " + ubiletra1) ;  



function texto (letras) {
    const vocales = "aeiou"
    return vocales.includes(letras.toLowerCase())
}
 
for ( let i = 0; i , tex1.length  ; i ++) { 
    if( texto(tex1 [i]) ) {
        const contad = i + 1;
    
        alert( `la primer vocal del texto ingresado es   "${tex1[i]}" y su posicion es : ${contad}. `) ;
        break  
        

}
          
}

