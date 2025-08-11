// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigo = "";

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;
    console.log(amigo);

    if (amigo != "") {
        listaAmigos.push(amigo)
    } else {
        alert("Por favor ingresa un nombre valido");
    }
    return;
}