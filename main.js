//Funciones de orden superior
//Es una función que puede recibir por párametro una función o retornar otra función.

//Sintaxis
// function estoEsUnaFuncion(funcion ()){ 1)
    //return function ()
// }

//Las vamos a utilizar en los arrays

//Hay métodos de búsque y transformación para operar sobre los arrays. 

class Producto{
    constructor (nombre,precio){
        this.nombre= nombre;
        this.precio= precio;
    }
}

const fideos = new Producto ("Fideos", 300);
const harina =new Producto ("Harina", 400);
const gaseosa =new Producto ("Gaseosa", 750);
const pan =new Producto ("Pan", 1500);

const arrayProductos= [fideos, harina, gaseosa, pan];
console.log ("productos en stock: ")
console.log (arrayProductos);

//1) forEach: recorre el array y ejecuta una función por cada elemento. Esta es una función de OS nativa del lenguaje (js)

arrayProductos.forEach((producto1)=>{
    
    console.log(producto1);
})

arrayProductos.forEach(producto => console.log (producto.precio));

//Método de búsqueda: find => busca un elemento del array y retorna el primer elemento que cumpla con una condición. 

const buscado = arrayProductos.find(producto => producto.nombre === "Pan");
console.log(buscado);

//Método filter: recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumplan con la condición.

const arrayProductosMenor500 = arrayProductos.filter(producto => producto.precio <500);
console.log(arrayProductosMenor500);
console.log(arrayProductos)

//Some: funciona igual que filter con la diferencia que retorna un booleano si encuentra o no el elemento.

const hayFideos = arrayProductos.some(producto=>producto.nombre === "Fideos");
console.log(hayFideos);

//map: me permite crear un nuevo array con todos los elementos
//del array originall pero transformados.

//Ejemplo de precios con IVA

const arrayConIva = arrayProductos.map(producto=>{

    return {
        nombre: producto.nombre,
        precio: (producto.precio*1.21)
    }
})
console.log (arrayConIva);

const arrayNombres = arrayProductos.map(producto=> producto.nombre);
console.log(arrayNombres);

//Reduce : nos permite obtener un único valore después de iterar sobre un array.
//Podemos trabajar con dos parámetros: un ACUMULADOR, y un elemento a operar.
//También debemos colocal el valor inicial del acumulador. 
//En este ejemplo elemento = Producto
let totalPrecio = arrayProductos.reduce ((acumulador, elemento)=>
acumulador + elemento.precio, 15);

console.log(totalPrecio);




