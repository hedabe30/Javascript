var articulos = [
    {nombre:"bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 2000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700}
]

////////////////Filtramos articulos y mostramos los datos requeridos//////
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
/*----Resultado: 
bici
TV
Libro
Celular
Laptop
Teclado
Audifonos----*/

////////////////Filtramos articulos para saber si existe la condicion requerida//////
var articulosBaratos = articulos.some(articulo => articulo.costo <= 500 )
/*----Resultado: 
true----*/