// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = "";
    } else {
        alert("Debes agregar un nombre.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigo}`;
    listaResultado.appendChild(li);
}
