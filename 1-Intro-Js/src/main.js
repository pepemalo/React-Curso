console.log(`APRENDIENDO OBJETOS EN JS`);

// LOS OBJETOS EN JS TIENE LA ESTRUCTURA DE JSON

const cars = {
    nombre: 'bmw',
    color: 'amarillo',
    peso: '80 kg',
    venta: new Date(),
    propiedad: 'Anderson Cardozo',
    precio : 1000
    
}
console.log(cars);
cars.propiedad = 'Karol'; // para modificar 
console.log(cars.nombre, '-', cars.propiedad); // para conocer c/u de los atributos
// console.log(cars," objetos"); // se manda la coma para que tome las propiedades
// console.log(` a : ${cars}`);