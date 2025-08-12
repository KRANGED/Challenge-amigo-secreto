// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creacion del array para almacenar nombres de amigos
let amigos = [];

/*function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
*/
function imprimirAmigos() {
    //obtener la lista
    let lista = document.getElementById("listaAmigos");
    //limpiar campos para evitar duplicados
    lista.innerHTML = "";
   for (let i = 0; i < amigos.length; i++) {
     
    //crear elemento en la lista
    let nuevoAmgioEnLista = document.createElement("li"); //crea el espacio en la lista (el <li>)
    //asignarle el valor del nuestra lista de amigos a la lista en html
    nuevoAmgioEnLista.textContent = amigos[i];
    lista.appendChild(nuevoAmgioEnLista);
    //imprimir lista
    
   }
}
function agregarAmigo() {
    let elementoHTML = document.getElementById("amigo").value;
    if (elementoHTML === '') {
        //si dejan el espacio en blanco
        alert("Por favor, inserte un nombre.");
    } else {
        //si llenan el espacio, se guarda el valor de la caja en la lista amigos
        amigos.push(elementoHTML);
        document.getElementById("amigo").value = "";
        imprimirAmigos(); // Actualiza la lista en pantalla
        console.log(amigos.length, amigos)
    }
}

function sortearAmigo(){
    //generar un número aleatorio ente 0 y el tamaño de nombres registrados
    if (amigos.length > 1) {
        if (amigos.length == 1) {
       indiceRandom = 0;  
        
        }else{
        indiceRandom = Math.floor(Math.random()*amigos.length)
        }

        let lista2 = document.getElementById("listaAmigos");
        lista2.innerHTML = "";
        let amigoEscogido = document.getElementById("resultado");
        amigoEscogido.textContent =`El amigo escogido es ${amigos[indiceRandom]}!` ;
        lista2.appendChild(amigoEscogido);
            
    }
    
}
