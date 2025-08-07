// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let máximoAmigos = 10;
let listaAmigos =[];
let amigoYaSorteado = [];

function agregarAmigo(){
    let amigoAgregado = String(document.getElementById('amigo').value);
    if(amigoAgregado ==''){
        asignarTextoElemento('h2', 'El espacio no puede estar vacío')
    }else{
        if(listaAmigos.length>=máximoAmigos){
            asignarTextoElemento('h2','Numero máximo de amigos alcanzado')
            return;
        }else{
            asignarTextoElemento('h2','Amigo agregado a la lista')
            listaAmigos.push(amigoAgregado);
            actualizarLista();
            
            setTimeout(()=>{
                limpiarCaja();
            },2000);
            
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
    
    if (listaAmigos.length === 0){
        asignarTextoElemento('h2','No hay amigos en la lista'); //lista vacía.
        return;
    }
    let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);   //aquí se genera el indice de la lista de amigos. 
    console.log (amigoSorteado);
    let nombre = listaAmigos[amigoSorteado];

    asignarTextoElemento('h2', `Tu amigo secreto es ${nombre}`);
    listaAmigos.splice(amigoSorteado,1);
    amigoYaSorteado.push(amigoSorteado);
    
    actualizarLista();
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