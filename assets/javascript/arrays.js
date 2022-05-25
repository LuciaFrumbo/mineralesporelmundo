//Array fijo
const productos = [
    {
        id: 0,
        nombre: "Jaspe Rojo",
        origen: "Sudafrica",
        precio: 10,
        img: "./images/jasperojo.jpeg",
    },

    {
        id: 1,
        nombre: "Cuarzo Verde",
        origen: "Brasil",
        precio: 7,
        img:"./images/cuarzoverde.jpeg",
    },

    {
        id: 2,
        nombre: "Jaspe Cebra",
        origen: "Brasil",
        precio: 13,
        img:"./images/jaspecebra.jpeg",
    },

    {
        id: 3,
        nombre: "Crisocola",
        origen: "Perú",
        precio: 15,
        img:"./images/crisocola.jpeg",
    },

    {
        id: 4,
        nombre: "Malaquita",
        origen: "Congo",
        precio: 17,
        img:"./images/malaquita.jpeg",
    },

    {
        id: 5,
        nombre: "Agata de Encaje Azul",
        origen: "Namibia",
        precio: 12,
        img:"./images/agatadeencajeazul.jpeg",
    },

    {
        id: 6,
        nombre: "Agata Arborescente",
        origen: "Botswana",
        precio: 23,
        img:"./images/agataarborescente.jpeg",
    }/*,

    {
        id: ,
        nombre: "",
        origen: "",
        precio: 23,
        img:"./images/.jpeg",
    }*/
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

//filtrado

let nuevoArray = productos.filter((elemento) => elemento.precio < 10);
console.log("Array con precio menor a 10");
console.table(nuevoArray); */

//IMPRIMIR ELEMENTOS EN HTML

function imprimirElementosEnHTML(productos) {
    let contenedor = document.getElementById("contenedor");

    for (const producto of productos) {
        let product__card = document.createElement("div");

        product__card.innerHTML = `
                <div class="product__card"> 
                <picture> <img class="product__card__img" src="${producto.img}"> </picture>
                <p class="product__card__name">${producto.nombre}</p>
                <div class="product__card__text">
                    <p class="product__card__price">U$D${producto.precio}</p>
                    <button class="product__card__buy">AGREGAR AL CARRITO</button>
                </div>
                </div>
            `;
            contenedor.appendChild(product__card);
    }
}

imprimirElementosEnHTML(productos);