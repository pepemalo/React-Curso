console.log(`APRENDIENDO OBJETOS EN JS`);

// LOS OBJETOS EN JS TIENE LA ESTRUCTURA DE JSON

// const cars = {
//     id : 10,
//     nombre: 'bmw',
//     color: 'amarillo',
//     peso: '80 kg',
//     venta: new Date(),
    
//     saludar: function(){
//         return ` Hola que tal ${this.facture.nombreCompra} gracias por comprar el carro ${cars.nombre} precio ${this.facture.precio}`;
//     }, 

//     facture : {
//         id: 5,
//         nombreCompra: '',
//         fecha: new Date(),
//         cliente: 'Anderson Cardozo',
//         precio : 1000
        
//     },
// }

// console.log(cars);

// console.log("--");

// cars.facture.nombreCompra = 'Karol cuellar';
// console.log(cars.saludar());

// console.log("--");


// console.log("--");


// const facture = {
//     id: 5,
//     nombre: 'compra de carro',
//     fecha: new Date(),
//     cliente: 'Anderson Cardozo',
//     precio : 1000
// }
//console.log("Factura ",facture);


// console.log(cars);
//cars.propiedad = 'Karol'; // para modificar 
// console.log(cars.nombre, '-', cars.propiedad); // para conocer c/u de los atributos
// console.log(cars," objetos"); // se manda la coma para que tome las propiedades
// console.log(` a : ${cars}`);

/*
PRACTICA CON EJERCICIO DE COMPRAS
*/

// Object compra
const compras = {
    
    id: 0,
    cliente: {
        id: 1,
        name: 'Anderson',
        number: '3026904599'
    },
    productos : [
        {
            id: 1,
            name:'Teclado',
            precio: 20000,
            cantidad : 1
        },
        {
            id:2,
            name:'Pantalla Led 4k',
            precio : 50000,
            cantidad :1
        },
        {
            id: 3,
            name : 'mause',
            precio : 12000,
            cantidad : 1
        }
    ],
    totalInventario :function(){
        let total = 0;
        this.productos.forEach( producto =>{
            total +=  producto.precio*producto.cantidad;
        });
        return  total;
    },
    mostrarProductos: function (){
        this.productos.forEach ( nombres =>{
            console.log(`: ${nombres.id} - ${nombres.name}`);
        });
    },
    bienvenido: function (){
        const saludo = 'BIENVENIDOS A LA TIENDA TECNOMAX'
        return saludo
    },
}

console.log(": ########################  :");
console.log(": "+compras.bienvenido());
console.log(": PRODUCTOS ");
console.log(compras.mostrarProductos());
const mostrar = confirm("DESEA MOSTRAR SU DINERO ");
if(mostrar == true){
    console.log("Total de dinero      ");
    console.log(compras.totalInventario());
}


// console.log(": compras ",compras.bienvenido);