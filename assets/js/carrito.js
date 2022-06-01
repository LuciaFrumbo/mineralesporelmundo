
//AGREGAR PRODUCTOS AL CARRITO Y LLAMARLOS DEL STORAGE SI ES NECESARIO
let carrito;
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //for of y funcion para recorrer el storage
    for (const producto of carrito) {
      let = document.getElementById("tablabody").innerHTML+=`
    <tr>
        <td>${producto.cantidad}</td>    
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.precio*producto.cantidad}</td>
        <td><i class="fa-solid fa-trash-can"></i></td>
    </tr>`;
    }
}else{
    carrito=[];
}

/*
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

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precioTotal;
    }
    return precioTotal;
}
precioTotal = obtenerPrecioTotal();

console.table(carrito);*/

//FILTRAR PRODUCTOS POR PROPIEDAD
//HACER UNO POR CADA PROPIEDAD Y MOSTRAR EN PAGINA ESPECIFICA

let tamboreadas = productos.filter((elemento) => elemento.clasificacion=="Tamboreada");
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
                <p type="Unidades:">
                    <input placeholder="Unidades"></input>
                </p>
                <p>${producto.peso.peso1}</p>
                <p>$${producto.precio}</p>
                <button class="product__card__buy" id="btn${producto.id}">AGREGAR</button>
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
    document.getElementById("tablabody").innerHTML+=`
    <tr>
        <td>${productoNuevo.cantidad}</td>
        <td>${productoNuevo.nombre}</td>
        <td>${productoNuevo.precio}</td>
        <td>${productoNuevo.precio*productoNuevo.cantidad}</td>
        <td><i class="fa-solid fa-trash-can"></i></td>
    </tr>`;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

// mostrar precio total
function obtenerPrecioTotal () {
    let precioTotal=0;
    for (const producto of carrito) {
        precioTotal += producto.precio
    }
    return precioTotal;
}
precioTotal = obtenerPrecioTotal();


//IMPRIMIR DESCRIPCION EN HTML APARTE
//por ahora no usar
/*
function imprimirDescripcion() {
    let product = document.createElement("div");
    product.innerHTML = `<div class="product">
    <picture> <img class="product__img" src="./images/agataarborescente.jpeg"> <img> </picture>

    <div class="product__text"> 
        <h1>${producto.nombre}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur, veritatis. Praesentium tempora quia sapiente explicabo? Molestiae, eum.
        Ducimus error blanditiis, beatae nam, sequi est deserunt porro nisi dolorem adipisci ab?</p>
    </div>
    <div class="product__unit">
        <p type="Unidades:">
            <input placeholder="Unidades"></input>
        </p>
        <p>20-30g</p>
        <p>$${producto.precio}</p>
        <button>AGREGAR</button>
    </div>
    <div class="product__unit">
        <p type="Unidades:">
            <input class="unidades" placeholder="Unidades"></input>
        </p>
        <p>35-50g</p>
        <p>$${producto.precio}</p>
        <button id="btn${producto.id}>AGREGAR</button>
    </div>
    </div>`;
    document.body.appendChild(product);
}
*/
