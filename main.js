/* 
Este programa gestionará los productos de un E-Commerce y posibilitará armar un carrito, cuyas funcionalidades son:
•Agregar y eliminar Productos de la Tienda
•Mostrar Productos de la Tienda
•Agregar y Eliminar Productos del Carrito 
•Mostrar Productos del Carrito

Ademas contará con productos Predefinidos  de la Tienda para facilitar las pruebas.

MEJORAS: funcion validarNumero(mensajePrompt) --> dentro hay un prompt y devuelve un valor solo si es un numero


*/
/* Clases de Productos */
class Producto{
    constructor(info){
        this.id= info.id;
        this.nombre=info.nombre;
        this.descripcion=info.descripcion;
        this.precio=info.precio;
        this.vendedor=info.vendedor;
    }
}

/* Funciones */
const productosToString = (productos) => {
    let productosString="";
    for(const iterator of productos ){
        productosString += "\n" + iterator.id + " - " + iterator.nombre + "  Descripcion: " + iterator.descripcion +" Precio: $" +iterator.precio;
    }
    return productosString;
}



/* Declaraciones */
const tienda = {
    productos:[],

    cantidadProductos(){return this.productos.length},

    buscador(palabra){
        return this.productos.filter( (item) => item.nombre.includes(palabra));  //////////////////////////////////////////////////////////// Por que no Funciona?
    }
};

const carrito ={
    productos:[],

    total(){

        /* let suma=this.productos.reduce((acum,item)=>{acum + item.precio, 0}); */ //////////////////////////////////////////////////////////// Por que no suma?
        
        let suma=0;
        for(let j=0; j< this.productos.length;j++){
            suma += this.productos[j].precio;
        }
        return suma;
    }
};

/* Inicializacion de Tienda Predefinida */

for(let i=0; i<3; i++){
    const producto = new Producto({id:tienda.productos.length+1,nombre:"Campera " + (i+1), descripcion:"Campera de cuero talle M " + (i+1), precio:25000 + 100*i, vendedor:"Ashton Ton"});
    tienda.productos.push(producto);
}





/* Programa */


alert("¡Bienvenido a la Tienda Franquito!");

while(true){
    let operacion=0;
    operacion= Number(prompt(`Seleccione el numero de Operacion a Realizar:
    - Gestionar Tienda -
    1 - Ver toda la Tienda
    2 - Agregar Producto a Tienda
    3 - Eliminar Producto de Tienda

    - Comprar -
    4 - Agregar al Carrito buscando Producto
    5 - Eliminar Producto del Carrito
    6 - Ver Carrito
    7 - Pagar
    `));


    switch(operacion){
        case 1: /* Ver toda la Tienda */
            alert(`Esta es la Tienda:
            
            ${productosToString(tienda.productos)}`);
            break;            
        case 2: /* Agregar Producto a Tienda */
        const producto = new Producto({
            id:tienda.productos.length+1,
            nombre:prompt(`- NUEVO PRODUCTO -
            Indique Nombre de Producto` ), 
            descripcion:prompt(`- NUEVO PRODUCTO -
            Indique Descripcion de Producto` ), 
            precio:Number(prompt(`- NUEVO PRODUCTO -
            Indique Precio de Producto` )), 
            vendedor:prompt(`- NUEVO PRODUCTO -
            Indique Vendedor de Producto` )});
        tienda.productos.push(producto);
            break;            
        case 3: /* Eliminar Producto de Tienda */

            break;            
        case 4: /* Agregar al Carrito buscando Producto */

            break;            
        case 5: /* Eliminar Producto del Carrito */

            break;            
        case 6: /* Ver Carrito */
        alert(`Este es el Carrito:
            
        ${productosToString(carrito.productos)}`);
            break;            
        case 7: /* Pagar */

            break;            
        default:
            alert("Opcion Invalida");
            break;            
    }

}









/* 
Prueba de array.filter

console.log(tienda.productos.filter( (item) => item.nombre.includes("Campera")));
*/

/* 
Probar carrito.total

carrito.productos.push(tienda.productos[1]);
carrito.productos.push(tienda.productos[2]);
console.log(carrito.total()); 
*/