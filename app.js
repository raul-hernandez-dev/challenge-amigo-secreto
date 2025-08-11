// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista;
let elementoLista;
let listaAmigos = [];
let amigoSeleccionado = 0;
let amigo;
let nombreAmigo = '';

function AgregarALista(nombreLista, elemento) {
    lista = document.getElementById(nombreLista);
    elementoLista = document.createElement("li");
    elementoLista.textContent = elemento;
    lista.appendChild(elementoLista);
    return;
}

function agregarAmigo() {
    amigo = document.getElementById('amigo');
    nombreAmigo = amigo.value.trim();
    if (!nombreAmigo) {
        alert("Por favor ingresa un nombre valido");
    } else {
        listaAmigos.push(amigo.value);
        AgregarALista('listaAmigos', amigo.value);
        amigo.value = '';
    }
    return;
}

function sortearAmigo() {
    if (listaAmigos.length != 0) {        
        amigoSeleccionado = Math.floor(Math.random() * listaAmigos.length);
        AgregarALista('resultado', listaAmigos[amigoSeleccionado]);
    } else {
        alert("Por favor ingresa alguno nombres");
    }
    return;
}