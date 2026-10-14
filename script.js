let carrito = [];

function agregar(nombre, precio) {
  carrito.push({ nombre: nombre, precio: precio });
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalTexto = document.getElementById("total");
  if (!lista || !totalTexto) return;

  lista.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    lista.innerHTML = "<li>Aún no agregaste productos.</li>";
  } else {
    carrito.forEach(function(producto, indice) {
      total += producto.precio;
      const item = document.createElement("li");
      item.textContent = producto.nombre + " - S/ " + producto.precio.toFixed(2) + " ";
      const quitar = document.createElement("button");
      quitar.textContent = "Quitar";
      quitar.className = "boton";
      quitar.onclick = function() {
        carrito.splice(indice, 1);
        mostrarCarrito();
      };
      item.appendChild(quitar);
      lista.appendChild(item);
    });
  }
  totalTexto.textContent = total.toFixed(2);
}

function vaciar() {
  carrito = [];
  mostrarCarrito();
  const mensaje = document.getElementById("mensaje");
  if (mensaje) mensaje.textContent = "El carrito está vacío.";
}

function comprar() {
  const mensaje = document.getElementById("mensaje");
  if (!mensaje) return;
  if (carrito.length === 0) {
    mensaje.textContent = "Agrega al menos un producto antes de finalizar la compra.";
  } else {
    mensaje.textContent = "¡Gracias por tu compra! Esta es una demostración académica; no se realizó ningún pago.";
    carrito = [];
    mostrarCarrito();
  }
}

function enviarContacto(evento) {
  evento.preventDefault();
  document.getElementById("respuesta").textContent = "Tu mensaje fue registrado para esta demostración. Gracias por escribirnos.";
  evento.target.reset();
}

function registrar(evento) {
  evento.preventDefault();
  document.getElementById("respuesta").textContent = "Registro de prueba completado. Los datos no se guardan en una base de datos.";
  evento.target.reset();
}