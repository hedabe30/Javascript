///LOS METODOS SIGUIENTES DEVOLVERAN UN ARREGLO NUEVO SIN AFECTAR EL ORIGINAL
var articulos = [
    {nombre:"bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 2000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700}
]
////////////////Filtramos articulos del array dependiendod e als necesidades//////
var articuloFiltrado = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
/*----Resultado: (2) [{…}, {…}]
0: {nombre: 'Libro', costo: 320}
1: {nombre: 'Teclado', costo: 500}----*/



///////////////////Mapeamos articulos y sacamos los datos que se requieren////////

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

/*----Resultado: nombreArticulos
(7) ['bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']----*/

//////////////////Encontrando un articulo en especifico///////////////////////////

var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

/*----Resultado: encontrarArticulo
{nombre: 'Laptop', costo: 2000}----*/
