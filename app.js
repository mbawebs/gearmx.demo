alert("JS NUEVO SÍ ESTÁ CARGANDO");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  alert("Escribiste: " + searchInput.value);
});
