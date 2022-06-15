//AGREGAR PRODUCTOS AL CARRITO Y LLAMARLOS DEL STORAGE SI ES NECESARIO
let carrito;
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    //for of y funcion para recorrer el storage
    for (const producto of carrito) {
        let = document.getElementById("tablabody").innerHTML += `
      <tr id='fila${producto.id}'>
        <td>${producto.cantidad}</td>    
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.precio*producto.cantidad}</td>
        <td><button id="btnrem${producto.id}"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>`;
    }
} else {
    carrito = [];
}

//FILTRAR PRODUCTOS POR PROPIEDAD
//HACER UNO POR CADA PROPIEDAD Y MOSTRAR EN PAGINA ESPECIFICA

let tamboreadas = productos.filter((elemento) => elemento.clasificacion == "Tamboreada");
console.log("Array con piedras tamboreadas");
console.table(tamboreadas);

//IMPRIMIR ELEMENTOS EN HTML 

imprimirElementosEnHTML(productos);

function imprimirElementosEnHTML(productos) {
    let contenedor = document.getElementById("contenedor");

    for (const producto of productos) {
        let product__card = document.createElement("div");

        product__card.innerHTML = `
                <div class="product__card"> 
                <p class="product__card__name">${producto.nombre}</p>
                <p class="product__card__origen">${producto.origen}</p>
                <picture> <img class="product__card__img" src="${producto.img}"> </picture>
                <div class="product__card__text">
                <div class="product__unit">
                <select name="Cant">
                    <option id="btnunit${producto.cantidad}">1</option>
                    <option id="btnunit${producto.cantidad}">2</option>
                    <option id="btnunit${producto.cantidad}">3</option>
                    <option id="btnunit${producto.cantidad}">4</option>
                    <option id="btnunit${producto.cantidad}">5</option>
                </select>
                <p>${producto.peso.peso1}</p>
                <p>${producto.precio}USD</p>
                <button class="product__card__buy" id="btnadd${producto.id}">AGREGAR</button>
            </div>
                </div>
            `;
        contenedor.appendChild(product__card);
    }
    productos.forEach(producto => {
        document.getElementById(`btnadd${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        });
    });
}

//AGREGAR AL CARRITO

function agregarAlCarrito(productoNuevo) {
    let index = carrito.indexOf(productoNuevo)
    if (index !== -1) {
        carrito[index].cantidad += 1
        renderizarCarrito()
        swal("Listo!", `Agregaste otra unidad de ${productoNuevo.nombre} al carrito!`, "success");
    } else {
        carrito.push(productoNuevo);
        swal("Listo!", `Agregaste ${productoNuevo.nombre} al carrito!`, "success");

        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito()

        carrito.forEach(productoNuevo => {
            document.getElementById(`btnrem${productoNuevo.id}`).addEventListener("click", function () {
                eliminarDelCarrito(productoNuevo.id);
            });
        });
    }
}


//ELIMINAR DEL CARRITO
function eliminarDelCarrito(id) {
    let newCarrito = carrito.filter(producto => producto.id !== id)
    carrito = newCarrito
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito()
}

function renderizarCarrito() {
    document.getElementById("tablabody").innerHTML = ''
    for (const producto of carrito) {
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${producto.cantidad}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.precio * producto.cantidad}</td>
            <td><button id="btnrem${producto.id}"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>`;
    }
}

// mostrar y actualizar precio total

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precio * producto.cantidad;
    }
    return precioTotal;
}
precioTotal = obtenerPrecioTotal();

document.getElementById("precio__total").innerHTML += `

        <div id="precio__total">
            <p>PRECIO TOTAL: ${precioTotal} USD</p>
        </div>`

//function para mostrar valor dolar y luego multiplicarlo por el valor total para convertir a pesos
//falta multiplicar x precio total
let dolarVenta;

async function obtenerValorDolar() {
    const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
    const resp = await fetch(URLDOLAR)
    const data = await resp.json()
    document.getElementById("valor__dolar").innerHTML +=
        `<div id="valor__dolar">
    <p> COTIZACION DOLAR: $ ${data.venta}</p>
    </div>`;
    dolarVenta = data.venta;
}

obtenerValorDolar();