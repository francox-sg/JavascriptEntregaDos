/* 
Este programa gestionará los productos de un E-Commerce y posibilitará armar un carrito, cuyas funcionalidades son:
    - Gestionar Tienda -
    1 - Ver toda la Tienda
    2 - Agregar Producto a Tienda
    3 - Eliminar Producto de Tienda

    - Comprar -
    4 - Agregar al Carrito buscando Producto
    5 - Eliminar Producto del Carrito
    6 - Ver Carrito
    7 - Pagar

    0 - Salir

Los Items se seleccionarán a traves de su ID, tambien se podrá buscar en la tienda (Solo implementado para busquedas por Nombre o fracciones del mismo. Ej: "Cam" para "Campera" ) 

Ademas contará con productos Predefinidos  de la Tienda para facilitar las pruebas.

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
        productosString += "\n" + "ID: " + iterator.id + " - " + iterator.nombre + "  Descripcion: " + iterator.descripcion +" Precio: $" +iterator.precio;
    }
    return productosString;
}

const validarNumero = (entrada) =>{
    while((entrada === "") || (isNaN(entrada))){
        entrada = prompt("Indique un valor Numerico")
    }
    return entrada;
}


/* Declaraciones */
const tienda = {
    productos:[],

    cantidadProductos(){return this.productos.length},

    buscador(palabra){
        return this.productos.filter( (item) => item.nombre.includes(palabra)); 
    }
};

const carrito ={
    productos:[],

    total(){
        let suma=0;
        for(let j=0; j< this.productos.length;j++){
            suma += this.productos[j].precio;
        }
        return suma;
    }
};

/* Inicializacion de Tienda Predefinida */

for(let i=0; i<3; i++){
    const producto = new Producto({id:tienda.productos.length+1,nombre:"Campera " + (i+1), descripcion:"Campera talle M " + (i+1), precio:25000 + 100*i, vendedor:"Ashton Ton"});
    tienda.productos.push(producto);
}





/* Programa */


alert("¡Bienvenido a la Tienda Franquito!");

let correrPrograma = true;

while(correrPrograma){
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

    0 - Salir
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
            precio:validarNumero(Number(prompt(`- NUEVO PRODUCTO -
            Indique Precio de Producto` ))), 
            vendedor:prompt(`- NUEVO PRODUCTO -
            Indique Vendedor de Producto` )});
        tienda.productos.push(producto);
            break;            
        case 3: /* Eliminar Producto de Tienda */
            
            let eliminarPorID =Number(prompt(`Seleccione el ID del producto a eliminar
            
            ${productosToString(tienda.productos)}`));
            
            let IDs = tienda.productos.map((item) => item.id); //Construyo array solo de IDs para usar indexOf  ///////////////////////////Esto se puede hacer de una mejor forma?
            let indiceDeID = IDs.indexOf(eliminarPorID);       //Encoentro el index de ese ID
            if(indiceDeID != -1){
                tienda.productos.splice(indiceDeID,1);
            }else{
                alert("No se ha encontrado ese ID");
            }
            break;            
        case 4: /* Agregar al Carrito buscando Producto */                                  
            let resultadoBusqueda = tienda.buscador(prompt("Ingrese busqueda por Nombre (o Visualize la Tienda entera sin poner parametro de Busqueda)"));
            let agregarID= Number(prompt(`Indique el ID para agregar al carrito, o "0" para salir
            ${productosToString(resultadoBusqueda)}`));
            if(agregarID != 0){
                let IDsTienda = tienda.productos.map((item) => item.id);
                let indiceAgregar = IDsTienda.indexOf(agregarID);
                if(indiceAgregar != -1){
                    carrito.productos.push(tienda.productos[indiceAgregar]);
                }else{
                    alert("No se ha encontrado ese ID");
                    break;
                }
            }
            break;            
        case 5: /* Eliminar Producto del Carrito */
        let eliminarPorIDCarrito =Number(prompt(`Seleccione el ID del producto a eliminar
            
        ${productosToString(carrito.productos)}`));
        
        let IDsCarrito = carrito.productos.map((item) => item.id); //Construyo array solo de IDs para usar indexOf  ///////////////////////////Esto se puede hacer de una mejor forma?
        let indiceDeIDCarrito = IDsCarrito.indexOf(eliminarPorIDCarrito);       //Encoentro el index de ese ID
        if(indiceDeIDCarrito != -1){
            carrito.productos.splice(indiceDeIDCarrito,1);
        }else{
            alert("No se ha encontrado ese ID");
        }
            break;            
        case 6: /* Ver Carrito */
        alert(`Este es el Carrito:
            
        ${productosToString(carrito.productos)}`);
            break;            
        case 7: /* Pagar */
        
        let precios = carrito.productos.map((item) => item.precio); 
        alert(`El total a pagar es de ${precios.reduce((acum, item)=> acum+item,0)}`)
            break;   
        case 0:
            correrPrograma=false;
            break;         
        default:
            alert("Opcion Invalida");
            break;            
    }

}
