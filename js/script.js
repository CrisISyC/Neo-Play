/*
Script que recoge el id del documento sobre el cual se hacer
*/

let elements = document.getElementsByClassName("game-cover-container");

//resulta que getElementsByClassName devuelve un arreglo
//lo habia intentado hacer de otra forma, llamando la funcion directamente desde
//el index, lo cual no es apropiado, asi que decidi utilizar getElementsByClassName
//y posteriormente el addEventListener para cada elemento (videojuego)

//console.log(elements)

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", desplegarInfo);
}

function desplegarInfo(game) {
  description(game.target.id);
}

function description(id) {
  if (id == "re4") {
    // mirar como se modifica el contenido de la tarjeta de informacion
    document.getElementById("title").innerHTML = "Resident Evil 4";
    document.getElementById("text").innerHTML = "Remake of Resident Evil 4";
  }
  if (id == "rdr2") {
    document.getElementById("title").innerHTML = "Red Dead Redemption 2";
    document.getElementById("text").innerHTML = "Cowboy";
  }
  if (id == "acs") {
    document.getElementById("title").innerHTML = "Assasins Creed Shadows";
    document.getElementById("text").innerHTML = "Samurais";
  }
  if (id == "gow") {
    document.getElementById("title").innerHTML = "Gears Of War 5";
    document.getElementById("text").innerHTML = "Futurist soldiers";
  }
  if (id == "infinite") {
    document.getElementById("title").innerHTML = "Halo Infinite";
    document.getElementById("text").innerHTML = "Open World Halo";
  }
  if (id == "lop") {
    document.getElementById("title").innerHTML = "Lies Of P";
    document.getElementById("text").innerHTML = "Pinocho souls like";
  }

  //document.getElementById("id").classList.add("despliegue");
}
