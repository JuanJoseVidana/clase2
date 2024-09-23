// Arreglos para almacenar los gastos y sus cantidades
let listaGastos = [];
let listaCantidades = [];
let listaDescripciones = []; // Nuevo arreglo para las descripciones

// Función que se ejecuta cuando se hace clic en el botón de agregar gasto
function clickBoton() {
    // Obtener los valores de los campos de entrada
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    // Validar que los campos no estén vacíos
    if (nombreGasto && valorGasto) {
        // Convertir el valor del gasto a un número
        valorGasto = Number(valorGasto);

        // Alerta si el gasto es mayor a $150
        if (valorGasto > 150) {
            alert("¡Alerta! Has registrado un gasto mayor a $150.");
        }

        // Agregar el gasto, su valor y la descripción a los arreglos
        listaGastos.push(nombreGasto);
        listaCantidades.push(valorGasto);
        listaDescripciones.push(descripcionGasto);

        // Actualizar la lista de gastos mostrada
        actualizarGastos();
    } else {
        alert("Por favor, ingrese un nombre, valor y descripción para el gasto.");
    }
}

// Función para actualizar la lista de gastos en la interfaz
function actualizarGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    // Recorre los arreglos para mostrar cada gasto en la lista
    listaGastos.forEach((elemento, posicion) => {
        const valorGasto = listaCantidades[posicion];
        const descripcionGasto = listaDescripciones[posicion];

        // Construir el HTML para cada gasto y sus botones de "Eliminar" y "Modificar"
        htmlLista += `<li>${elemento} - USD ${valorGasto} 
            <br>Descripción: ${descripcionGasto} 
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            <button onclick="modificarGasto(${posicion});">Modificar</button></li>`;

        totalGastos += valorGasto;
    });

    // Mostrar la lista de gastos y el total en la interfaz
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = `Total: USD ${totalGastos.toFixed(2)}`;

    // Limpiar los campos de entrada
    limpiar();
}

// Función para eliminar un gasto según su posición
function eliminarGasto(posicion) {
    listaGastos.splice(posicion, 1);
    listaCantidades.splice(posicion, 1);
    listaDescripciones.splice(posicion, 1);
    actualizarGastos();
}

// Función para modificar un gasto registrado
function modificarGasto(posicion) {
    // Obtener los valores actuales del gasto
    const nuevoNombre = prompt("Modifica el nombre del gasto:", listaGastos[posicion]);
    const nuevoValor = prompt("Modifica el valor del gasto (en USD):", listaCantidades[posicion]);
    const nuevaDescripcion = prompt("Modifica la descripción del gasto:", listaDescripciones[posicion]);

    // Verificar que los valores no sean nulos o vacíos
    if (nuevoNombre && nuevoValor && nuevaDescripcion) {
        listaGastos[posicion] = nuevoNombre;
        listaCantidades[posicion] = Number(nuevoValor);
        listaDescripciones[posicion] = nuevaDescripcion;
        actualizarGastos();
    } else {
        alert("Todos los campos deben estar completos para modificar el gasto.");
    }
}

// Función para limpiar los campos de entrada
function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}
