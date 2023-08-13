console.log(`APRENDIENDO OBJETOS OPERADOR OPTIONAL CHAINING`);
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
};

//Operador Optional Chaining ( ? ),definir si puede ser obligatorio  o no (not snull)
console.log(compras.company?.name);

if (compras.company?.name) {
    alert("viene")
}else{
    alert("no viene")
}

