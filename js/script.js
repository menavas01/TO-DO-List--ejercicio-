// Creamos constantes de los elementos HTML
const tarea = document.getElementById('inputLista');
const botonAgregar = document.getElementById('botonAgregar');
const botonEliminar = document.getElementById('botonEliminar');
const botonNuevaTarea = document.getElementById('botonNuevaTarea');
const contenedorTareas = document.getElementById('contenedorTareas');

// Creamos variables de estado
let cont = 0;

// Esta funcion se encarga de bloquear/desbloquear el input con la tarea (recibimos id = id del botonAgregar, y idInput = id del input)
function agregarTarea(id, idInput) {
    // Usamos la variable botonAgregarClick para saber si se hizo click o no en el boton
    if (document.getElementById(id).textContent == "🔓") {
        // Si no se hizo click. El boton pasa a "Editar Tarea" y el input no se puede editar
        document.getElementById(id).textContent = "🔒";
        document.getElementById(idInput).disabled = true;
    }

    else{
        // Si se hizo click. El boton pasa a "Agregar Tarea" y el input se puede editar
        document.getElementById(id).textContent = "🔓";
        document.getElementById(idInput).disabled = false;
    }
}

// Esta funcion se encarga de eliminar la tarea
function eliminarTarea(boton) {
    // Del boton de eliminar recibimos el nodo padre del elemento HTML. Con esto eliminamos el nodo (todos los elementos de la section)
    boton.parentNode.removeChild(boton);
}

// Esta funcion se encarga de crear un nuevo input para una nueva tarea
function nuevaTarea() {
    // Creamos una nueva section para alojar a los nodos clonados
    const contenedorClones = document.getElementById("clones");

    // Clonamos la section con todos los elementos hijos
    const nuevaTarea = contenedorTareas.cloneNode(true);

    // Guardamos en variables con querySelector los elementos hijos clonados (query selector nos permite acceder a los elementos como si fuese CSS)
    let inputClonado = nuevaTarea.querySelector("#inputLista");
    let botonAgregarClonado = nuevaTarea.querySelector("#botonAgregar");
    let botonEliminarClonado = nuevaTarea.querySelector("#botonEliminar");

    // Creamos ID's unicas a los elementos hijos clonados, les asignamos clases para los estilos y les añadimos funciones onclick
    inputClonado.id = "inputClonado_" + cont; 
    inputClonado.setAttribute("onclick", "formatear(this.id)");
    inputClonado.setAttribute("value", "Ingrese tarea");

    botonAgregarClonado.id = "botonAgregarClonado_" + cont; 
    botonAgregarClonado.setAttribute("class", "botonAgregar");
    botonAgregarClonado.setAttribute("onclick", "agregarTarea(this.id, '" + inputClonado.id + "')");

    botonEliminarClonado.id = "botonEliminarClonado_" + cont; 
    botonEliminarClonado.setAttribute("class", "botonEliminar");
    botonEliminarClonado.setAttribute("onclick", "eliminarTarea(this.parentNode)");

    // Añadimos los elementos clonados a la section contenedorClones
    contenedorClones.append(nuevaTarea);
    cont++;
}

// Esta funcion se encarga de formatear el texto del input
function formatear(id) {
    let input = document.getElementById(id);
    if (input.value == "Ingrese tarea") {
        input.value = "";
    }
}


