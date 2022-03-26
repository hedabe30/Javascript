// crear un programa que le de la vuelta a una palabra y compruebe si es la misma al estar al revez

function Palindromo(pal){
    //////////////OPCION 1//////////////
    let invertido = pal.split("")
    let inv = ""
    let flag = pal.length

    for(i = 0; i < pal.length; i++){
        flag = flag - 1 
        inv = inv + invertido[flag]
    }

    if (inv == pal) {
        console.log("True") 
    }else
        console.log("False") 
    
    /////////////OPCION 2/////////////////
    let invertir = pal.split('')
                        .reverse()
                        .join('');
    return (invertir == pal)
    
}

console.log("Es un plaindromo? " + Palindromo("otto"))