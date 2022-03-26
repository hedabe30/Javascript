/*Enunciado
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece 
la palabra deben ser parametros de una funcion

Como hacerlo: 
    -Funcion con dos parametros "frase" y "busqueda"
    -poner string en minusculas y limpiarlo
    -comprobar si la busqueda esta incluida en la frase
    -crear un array de palabras de la frase
    -Mapear esas palabras y hacer un contador de cada una 
    -Devolver el contador de la busqueda  
*/

function conicidencias(frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi,'');
    let resultado = 0;
    
    if (texto_limpio.includes(busqueda)) {
        
        let palabras = texto_limpio.split(" ")
        let mapa = {};

        for(let palabra of palabras){
            if (mapa[palabra]) {
                mapa[palabra]++
            } else {
                mapa[palabra] = 1
            }
        }
        resultado = mapa[busqueda]

    } else {
        resultado = 0
    }
    return resultado
    console.log(texto_limpio)
}

console.log(
    "La palabra aparece en la frase: "+
    conicidencias("Hola. Mucho gusto, -gusto augusto", "gusto")
)