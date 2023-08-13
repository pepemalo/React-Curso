console.log(`APRENDIENDO OBJETOS COPIAR UN OBJECTO, MODIFICAR`);
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

//Object original
console.log(compras.cliente.id,compras.cliente.name,compras.cliente.number)

// para obtener la referencia se deben igualar
// const compras2 = compras;
// console.log("object",compras2.bienvenido())
//validar de que si sean iguales
// compras2 ==  compras;
// if (compras2)
//     alert("Son iguales los Objectos ");
// else 
//     alert("No son iguales los Objectos");


//Operador Spread ...Objecto
const compra2 = { ...compras}; // clonamos el objeto
//Objetenmos una plantilla
compra2.cliente.id = 2;
compra2.cliente.name ='Karol';
compra2.cliente.number =3163715517;
console.log(compra2.cliente)


