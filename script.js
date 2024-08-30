let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    otros: []
};

function agregarAlimento() {
    let continuar = true;

    while (continuar) {
        let deseaAgregar = prompt("¿Deseas agregar un alimento a tu lista de compras o eliminar un elemento? (añadir/eliminar/salir)");

        if (deseaAgregar.toLowerCase() === "salir") {
            continuar = false;
            break;
        } else if (deseaAgregar.toLowerCase() === "añadir") {
            let alimento = prompt("¿Qué alimento deseas agregar?");
            let categoria = prompt("¿En qué categoría encaja este alimento? (frutas, lácteos, congelados, dulces, otros)");
        switch (categoria.toLowerCase()) {
                case 'frutas':
                    listaCompras.frutas.push(alimento);
                    break;
                case 'lacteos':
                    listaCompras.lacteos.push(alimento);
                    break;
                case 'congelados':
                    listaCompras.congelados.push(alimento);
                    break;
                case 'dulces':
                    listaCompras.dulces.push(alimento);
                    break;
                default:
                    listaCompras.otros.push(alimento);
                    break;
            }

            alert(`El alimento "${alimento}" ha sido añadido a la categoría "${categoria}".`);

        } else if (deseaAgregar.toLowerCase() === "eliminar") {
            eliminarAlimento();
        } else {
            alert("Por favor, responde con 'añadir', 'eliminar' o 'salir'.");
        }
    }
    mostrarLista();
}

function eliminarAlimento() {
    let elementosExistentes = [];

    for (let categoria in listaCompras) {
        elementosExistentes = elementosExistentes.concat(listaCompras[categoria]);
    }

    if (elementosExistentes.length === 0) {
        alert("La lista de compras está vacía, no hay elementos para eliminar.");
        return;
    }

    let listaCompleta = elementosExistentes.join(", ");
    let elementoAEliminar = prompt(`Lista de compras actual:\n${listaCompleta}\n\n¿Cuál elemento deseas eliminar?`);

    let eliminado = false;
    for (let categoria in listaCompras) {
        let indice = listaCompras[categoria].indexOf(elementoAEliminar);
        if (indice !== -1) {
            listaCompras[categoria].splice(indice, 1);
            eliminado = true;
            alert(`El elemento "${elementoAEliminar}" ha sido eliminado de la categoría "${categoria}".`);
            break;
        }
    }

    if (!eliminado) {
        alert("¡No fue posible encontrar el elemento en la lista!");
    }
}

function mostrarLista() {
    console.log("Lista de compras:");
    console.log(`Frutas: ${listaCompras.frutas.join(", ")}`);
    console.log(`Lácteos: ${listaCompras.lacteos.join(", ")}`);
    console.log(`Congelados: ${listaCompras.congelados.join(", ")}`);
    console.log(`Dulces: ${listaCompras.dulces.join(", ")}`);
    console.log(`Otros: ${listaCompras.otros.join(", ")}`);
}

agregarAlimento();