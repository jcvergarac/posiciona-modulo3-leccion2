let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    alert("Producto agregado al carrito 🛒");
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalEl = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        lista.appendChild(li);
        total += producto.precio;
    });

    totalEl.textContent = "Total: $" + total;
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

mostrarCarrito();