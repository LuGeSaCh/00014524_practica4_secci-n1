// Esta funcion solo sirve para devolver dia y la actividad dependiendo del parametro que se le paso
function obtenerActividad(dia) {
  const actividades = {
    lunes: "Atender un cliente específico",
    martes: "Visitar una agencia fuera de la ciudad",
    miercoles: "Llevar a mi hija al ballet",
    jueves: "Priorizar entregas de desarrollo",
    viernes: "Atender problemas de manera remota",
    sabado: "Hacer lo que mi esposa quiera",
    domingo: "Día de descanso y planificación de la semana",
  };

  return actividades[dia] || "No hay actividad programada para este día";
}
//Esta funcion Mete los valores de el dia y la actividad en los id correspondientes, los saca de la anterior funcion
function recordarActividad(dia) {
  const actividad = obtenerActividad(dia);
  document.getElementById("diaActual").textContent =
  // Para que tenga la primera letra en mayuscula y se vea bonito :p
    dia.charAt(0).toUpperCase() + dia.slice(1);
  document.getElementById("actividad").textContent = actividad;
}

// Esta llama la anterior funcion al on click del boton pasando como parametro el valor que le dimos, y se asegura que no se le pase un string vacio
document.getElementById("btnRecordar").addEventListener("click", function () {
  const diaSeleccionado = document.getElementById("diaSemana").value;
  if (diaSeleccionado === "") {
    alert("Por favor, selecciona un día de la semana.");
    return;
  }
  recordarActividad(diaSeleccionado);
});
