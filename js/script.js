/*
Script que recoge el id del documento sobre el cual se hacer
*/


let elements = document.getElementsByClassName("game-cover-container")

//resulta que getElementsByClassName devuelve un arreglo
//lo habia intentado hacer de otra forma, llamando la funcion directamente desde
//el index, lo cual no es apropiado, asi que decidi utilizar getElementsByClassName
//y posteriormente el addEventListener para cada elemento (videojuego)

//console.log(elements)

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', desplegarInfo);
}

function desplegarInfo(game) {
  console.log(game.target.id); //target para acceder al elemento que lanzo el evento onclick
}

function description(id){
  if(id == 're4'){
    // mirar como se modifica el contenido de la tarjeta de informacion
  }
}
