//BOTON ADD CARRITO

//AGREGAR PRODUCTOS AL CARRITO
let carrito = [];
let precioTotal;

//IMPRIMIR ELEMENTOS EN HTML
imprimirElementosEnHTML(productos);

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
                    <button class="product__card__buy" id="btn${producto.id}">AGREGAR AL CARRITO</button>
                </div>
                </div>
            `;
            contenedor.appendChild(product__card);
    }
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
            agregarAlCarrito(producto);
        });
    });
}
function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);
    document.getElementById("add__carrito").innerHTML=`Agregaste ${productoNuevo.nombre} al carrito!`
}
