//AGREGAR PRODUCTOS AL CARRITO Y LLAMARLOS DEL STORAGE SI ES NECESARIO
let carrito;
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    renderizarCarrito();
    carrito.forEach(producto => {
        document.getElementById(`btnrem${producto.id}`).addEventListener("click", function () {
            eliminarDelCarrito(producto.id);
        });
    });
    console.table(carrito);
} else {
    carrito = [];
}

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

//AGREGAR AL CARRITO Y AGREGAR UNIDADES SI EL PRODUCTO YA ESTA

function agregarAlCarrito(productoNuevo) {
    let productoEncontrado = carrito.find(p => p.id == productoNuevo.id)
    let index = carrito.indexOf(productoEncontrado)
    if (index !== -1) {
        carrito[index].cantidad += 1
        renderizarCarrito()
        console.table(carrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.querySelector("#precio__total__texto").innerText=(`
        PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);
        swal("Listo!", `Agregaste otra unidad de ${productoNuevo.nombre} al carrito!`, "success");
        carrito.forEach(producto => {
            document.getElementById(`btnrem${producto.id}`).addEventListener("click", function () {
                eliminarDelCarrito(producto.id);
            });
        });
    } else {
        carrito.push(productoNuevo);
        swal("Listo!", `Agregaste ${productoNuevo.nombre} al carrito!`, "success");
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito()
        console.table(carrito);
        document.querySelector("#precio__total__texto").innerText=(`
        PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);

        carrito.forEach(producto => {
            document.getElementById(`btnrem${producto.id}`).addEventListener("click", function () {
                eliminarDelCarrito(producto.id);
            });
        });
    }
}


//ELIMINAR DEL CARRITO
function eliminarDelCarrito(id) {
    swal({
        title: "Estás segurx?",
        text: "Vas a eliminar el producto del carrito",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            let newCarrito = carrito.filter(producto => producto.id !== id)
            carrito = newCarrito
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
            carrito.forEach(producto => {
                document.getElementById(`btnrem${producto.id}`).addEventListener("click", function () {
                    eliminarDelCarrito(producto.id);
                });
            });
          swal("Listo! ha sido eliminado!", {
            icon: "success",
          });
          document.querySelector("#precio__total__texto").innerText=(`
        PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);
        } else {
          swal("El producto NO ha sido eliminado!");
        }
      });
    renderizarCarrito();
    document.querySelector("#precio__total__texto").innerText=(`
    PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);
    carrito.forEach(producto => {
        document.getElementById(`btnrem${producto.id}`).addEventListener("click", function () {
            eliminarDelCarrito(producto.id);
        });
    });
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

//funcion para mostrar valor dolar del dia
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

// boton de finalizacion de compra

document.getElementById("finalizar__compra").addEventListener("click", function () {
    if  (carrito.length != 0) {
        finalizarCompra();
        document.querySelector("#precio__total__texto").innerText=(`
        PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);
    }
    else {
        noFinalizarCompra();
    }
    
});
//vaciar el carrito al finalizar la compra y mostrar alert
function finalizarCompra() {
    carrito=[];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
    document.querySelector("#precio__total__texto").innerText=(`
    PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);
    swal ( " Finalizaste tu pedido " , " En instantes nos pondremos en contacto", "success" )   ;
};
//dar aviso que el carrito esta vacio por lo que no se puede finalizar la compra
function noFinalizarCompra() {
    swal ( " El carrito está vacío " , " Agrega productos para comprar", "error" )   ;
};