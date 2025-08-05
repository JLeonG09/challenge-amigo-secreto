// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let máximoAmigos = 10;
let listaAmigos =[];

alert('Pagina actualizada');

function agregarAmigo(){
    let amigoAgregado = String(document.getElementById('amigo').value);
    if(amigoAgregado ==''){
        alert('El espacio no puede estar vacío.')
    }else{
        if(listaAmigos.length>=máximoAmigos){
            alert('Numero máximo de amigos alcanzado.')
            asignarTextoElemento('h2','Numero máximo de amigos alcanzado')
            return;
        }else{
            asignarTextoElemento('h2','Amigo agregado a la lista')
            listaAmigos.push(amigoAgregado);
            actualizarLista();
            
            limpiarCaja();
            console.log(listaAmigos);
            
        }
    }
}


function actualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';

    listaAmigos.forEach((amigo)=>{
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
    
}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);       
    if (listaAmigos.length == 0){
        asignarTextoElemento('h2','Ya se sortearon todos los amigos.')
    }else{
        if (listaAmigos.includes(amigoSorteado)){
            return sortearAmigo();
        
        }else{
            mostrarResultado();
            return amigoSorteado;
            
        }
    }
}

function mostrarResultado(amigoSorteado) {
    let resultado = amigoSorteado;
    alert(resultado);
}




function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector('h2');
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    asignarTextoElemento('h2','Digite el nombre del Amigo')
}

function condicionesDeInicio(){
    nuevoAmigo = agregarAmigo();
    amigoSorteado = sortearAmigo();
}

function reiniciarAmigos(){
    limpiarCaja();
    condicionesDeInicio();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}
