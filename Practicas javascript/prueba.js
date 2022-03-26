function words(frase,busqueda) {
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi,'').split(' ');
    let search = busqueda.toLowerCase();
    let palabras = {};

    if(texto_limpio.includes(search))
        for (let palabra of texto_limpio) {
            if (palabras[palabra]) {
                palabras[palabra]++;
            }else
                palabras[palabra] = 1;
        }
    else
        return 0
    console.log(palabras)
    return (palabras[search])
}

console.log("se encontraron: "+words("el perro juega con el otro perro, -perro","perro")+" que coinciden")