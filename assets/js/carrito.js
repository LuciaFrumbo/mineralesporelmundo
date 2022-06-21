//AGREGAR PRODUCTOS AL CARRITO Y LLAMARLOS DEL STORAGE SI ES NECESARIO
let carrito;
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    //for of y funcion para recorrer el storage
    renderizarCarrito();
    carrito.forEach(producto => {
        document.getElementById(`btnrem${producto.id}`).addEventListener("click", function () {
            eliminarDelCarrito(producto.id);
        });
    });
    console.log(carrito);
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
        console.log(carrito);
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
        console.log(carrito);
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

/*Ordenar mayor/menor/alfabeticamente
        function ordenar() {
            let seleccion = document.querySelector("#miSeleccion").value;
            console.log(seleccion)
            if (seleccion == "menor") {
                productos.sort(function(a, b) {
                    return a.precio - b.precio
                });
            } else if (seleccion == "mayor") {
                productos.sort(function(a, b) {
                    return b.precio - a.precio
                });
            } else if (seleccion == "alfabetico") {
                productos.sort(function(a, b) {
                    return a.nombre.localeCompare(b.nombre);
                });
            }
            document.querySelector(".product__card").innerHTML="";
            imprimirElementosEnHTML();
        }

        document.querySelector("#miSeleccion option[value='pordefecto']").setAttribute("selected", true);
        document.querySelector("#miSeleccion").onchange=()=>ordenar();
*/
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

function finalizarCompra() {
    carrito=[];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
    document.querySelector("#precio__total__texto").innerText=(`
    PRECIO TOTAL: ${obtenerPrecioTotal()} USD`);
    swal ( " Finalizaste tu pedido " , " En instantes nos pondremos en contacto", "success" )   ;
};

function noFinalizarCompra() {
    swal ( " El carrito está vacío " , " Agrega productos para comprar", "error" )   ;
};