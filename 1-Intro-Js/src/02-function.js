console.log('### MODULO DE FUNCIONES CON JS ###');


function sayHello (firstname = '', lastname ='' ){
    const saludo = `Hola ${firstname} como estas, estoy en una funcion ${lastname}  `;

    return saludo; 
    //return console.log(`Hola mundo function`);
}
console.log(sayHello('Anderson', 'Cardozo'));
// const sumas =(num1 = 1 , num2 = 1) =>{
//     const result = num1+num2;
//     return 'suma de num1 + num2 :: '+result;
// }
// console.log(sumas())

const mensaje =() =>' funcion en una sola linea ';
console.log( mensaje());

const suma =(a=0,b=0) =>` suma de a + b :: ${a+b}`;
console.log(suma(1,1))



// const result = sayHello();
// console.log(sayHello('Anderson'));
