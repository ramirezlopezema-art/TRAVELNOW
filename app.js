// =======================================================
// 1. FASE DE SELECCIÓN: localizamos los elementos que vamos a controlar.
// =======================================================

// getElementById busca el elemento único cuyo id es "btn-tema".
const botonTema = document.getElementById("btn-tema");

// document.body selecciona el cuerpo completo, donde se aplicará la clase de tema.
const cuerpoPagina = document.body;

// El evento click se activa al presionar el botón y esta función se ejecuta entonces.
botonTema.addEventListener("click", function () {
  // toggle actúa como un interruptor: agrega dark-theme si falta y la quita si ya existe.
  cuerpoPagina.classList.toggle("dark-theme");

  // contains nos indica cuál texto debe ver la persona después del cambio.
  if (cuerpoPagina.classList.contains("dark-theme")) {
    botonTema.textContent = "☀ Claro";
    botonTema.setAttribute("aria-pressed", "true");
  } else {
    botonTema.textContent = "🌙 Oscuro";
    botonTema.setAttribute("aria-pressed", "false");
  }
});
