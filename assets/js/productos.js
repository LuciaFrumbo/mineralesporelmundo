//Array fijo
const productos = [
    {
        id: 0,
        nombre: "Jaspe Rojo",
        origen: "Sudafrica",
        precio: 10,
        img: "./assets/images/Tamboreadas/jasperojo.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 1,
        nombre: "Cuarzo Verde",
        origen: "Brasil",
        precio: 7,
        img:"./assets/images/Tamboreadas/cuarzoverde.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 2,
        nombre: "Jaspe Cebra",
        origen: "Brasil",
        precio: 13,
        img:"./assets/images/Tamboreadas/jaspecebra.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 3,
        nombre: "Crisocola",
        origen: "Perú",
        precio: 15,
        img:"./assets/images/Tamboreadas/crisocola.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 4,
        nombre: "Malaquita",
        origen: "Congo",
        precio: 17,
        img:"./assets/images/Tamboreadas/malaquita.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 5,
        nombre: "Agata de Encaje Azul",
        origen: "Namibia",
        precio: 12,
        img:"./assets/images/Tamboreadas/agatadeencajeazul.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 6,
        nombre: "Agata Arborescente",
        origen: "Botswana",
        precio: 23,
        img:"./assets/images/Tamboreadas/agataarborescente.jpeg",
        clasificacion: "Tamboreada",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 7,
        nombre: "Amatista",
        origen: "Brasil",
        precio: 23,
        img:"./assets/images/Trabajado/Esferas/AmatistaBrasil.jpeg",
        clasificacion: "Esfera",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 8,
        nombre: "Crisocola",
        origen: "Peru",
        precio: 23,
        img:"./assets/images/Trabajado/Esferas/CrisocolaPeru.jpeg",
        clasificacion: "Esfera",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 9,
        nombre: "Cuarzo Cristal",
        origen: "Brasil",
        precio: 23,
        img:"./assets/images/Trabajado/Esferas/CuarzoCristalBrasil.jpeg",
        clasificacion: "Esfera",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 10,
        nombre: "Cuarzo Rosa",
        origen: "Brasil",
        precio: 23,
        img:"./assets/images/Trabajado/Esferas/CuarzoRosaBrasil.jpeg",
        clasificacion: "Esfera",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 11,
        nombre: "Lapislázuli",
        origen: "Afganistán",
        precio: 23,
        img:"./assets/images/Trabajado/Esferas/LapislázuliAfganistan.jpeg",
        clasificacion: "Esfera",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 12,
        nombre: "Amatista",
        origen: "Brasil",
        precio: 23,
        img:"./assets/images/Trabajado/Pendulos/Amatista.jpeg",
        clasificacion: "Pendulo",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 13,
        nombre: "Cuarzo Cristal",
        origen: "Brasil",
        precio: 23,
        img:"./assets/images/Trabajado/Pendulos/CuarzoCristal.jpeg",
        clasificacion: "Pendulo",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 14,
        nombre: "Cuarzo Verde",
        origen: "Brasil",
        precio: 23,
        img:"./assets/images/Trabajado/Pendulos/CuarzoVerde.jpeg",
        clasificacion: "Pendulo",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },

    {
        id: 15,
        nombre: "Ojo de Tigre",
        origen: "Sudafrica",
        precio: 23,
        img:"./assets/images/Trabajado/Pendulos/OjoDeTigreSudafrica.jpeg",
        clasificacion: "Pendulo",
        cantidad: 1,
        peso:{
            peso1:"20-30g",
            peso2:"35-50g",
        }
    },
]
/*
let carrito = [];
let precioTotal;

class producto {
    constructor(producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.cantidad = 1;
        this.precioTotal = producto.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    eliminarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}
//Declarar funciones

function menuDeCompras() {
    let stringProductos = "";

    for (const producto of productos) {
        stringProductos += `${producto.id}:${producto.nombre}. Valor $${producto.precio}\n`
    }


    let idProducto = prompt(`Escriba el numero del producto que desea comprar.\n En caso que desee finalizar la compra escriba OK\n ${stringProductos} \n `);

    while (idProducto !== "OK") {
        let productoEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

        if (productoEnCarrito) {
            let index = carrito.findIndex((elemento) => elemento.id === productoEnCarrito.id);

            carrito[index].agregarUnidad();
            carrito[index].actualizarPrecioTotal();

            alert(`Se añadió otra unidad de ${carrito[index].nombre}
            Unidades: ${carrito[index].cantidad}`);
            console.table(carrito);

        }
        else {
            carrito.push(new producto(productos[idProducto]));

            alert(`Se añadió al carrito el producto ${productos[idProducto].nombre}`);
            console.table(carrito);
        }
        idProducto = prompt(`
        Desea agregar algun otro producto?
        Escriba el numero del producto a comprar u "OK" para finalizar
        ${stringProductos}`);
    }
}

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precioTotal;
    }
    return precioTotal;
}

menuDeCompras();
precioTotal = obtenerPrecioTotal();

alert(`El precio final de tu compra es de $${precioTotal}
Muchas gracias por tu compra!`);
console.table(carrito);
*/

