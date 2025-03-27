/*
Script que recoge el id del documento sobre el cual se hacer
*/

let elements = document.getElementsByClassName("game-cover-container");

let buttons = document.getElementsByClassName("options-button")
//resulta que getElementsByClassName devuelve un arreglo
//lo habia intentado hacer de otra forma, llamando la funcion directamente desde
//el index, lo cual no es apropiado, asi que decidi utilizar getElementsByClassName
//y posteriormente el addEventListener para cada elemento (videojuego)

//console.log(elements)

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", desplegarInfo);
  elements[i].addEventListener("click", hideGames);
}

function desplegarInfo(game) {
  description(game.target.id);
  document.getElementById("game-info").className += " animation-info"
  document.getElementById("background").className += " background-resize"
  document.getElementById("button-xbox-B").classList.add("exit-button")
  removeButtons();
}

function removeButtons(){
  for(let i = 0; i<buttons.length; i++){
    buttons[i].classList.add("hide-buttons")
  }
}

function description(id) {
  if (id == "re4") {
    // mirar como se modifica el contenido de la tarjeta de informacion
    document.getElementById("title").innerHTML = "Resident Evil 4";
    document.getElementById("text").innerHTML = "Resident Evil 4 Remake is a reimagining of the classic 2005 survival horror game, developed by Capcom and released in 2023. It follows Leon S. Kennedy, now a special agent, on a mission to rescue Ashley Graham, the U.S. president’s daughter, from a cult in a remote Spanish village.<br><br>The remake modernizes the graphics using the RE Engine, enhances gameplay with stealth mechanics, parrying with a knife, and smoother exploration, and delivers a darker, more terrifying atmosphere. It retains the essence of the original while improving the story and making enemies more challenging.";
  }
  if (id == "rdr2") {
    document.getElementById("title").innerHTML = "Red Dead Redemption 2";
    document.getElementById("text").innerHTML = "Red Dead Redemption is an open-world action-adventure game developed by Rockstar Games and released in 2010. Set in the American Wild West in 1911, it follows John Marston, a former outlaw forced by the government to hunt down his old gang members to reunite with his family.<br><br>The game features a vast open world, intense gunfights, horseback riding, and a rich narrative exploring themes of redemption, loyalty, and the end of the Wild West era.";
  }
  if (id == "acs") {
    document.getElementById("title").innerHTML = "Assasins Creed Shadows";
    document.getElementById("text").innerHTML = "Assassin's Creed Shadows is the fourteenth main installment in the series, released in March 2025. Set in Feudal Japan during the 16th century Sengoku period, the story follows two protagonists: Fujibayashi Naoe, a kunoichi (female ninja), and Yasuke, an African samurai inspired by the historical figure of the same name.<br><br>The game features an open world covering regions like Kyoto, Kobe, Osaka, and the Iga Province, with meticulously recreated castles and historical sites. Gameplay mechanics include katana combat, shuriken usage, parkour exploration, and a grappling hook for climbing. Additionally, it introduces a seasonal system that impacts gameplay, such as frozen waters in winter and dense vegetation in spring.";
  }
  if (id == "gow") {
    document.getElementById("title").innerHTML = "Gears Of War 5";
    document.getElementById("text").innerHTML = "Gears 5 is a third-person shooter developed by The Coalition and published by Xbox Game Studios in 2019. It continues the story of the Gears of War series, following Kait Diaz as she embarks on a journey to uncover the origins of the Locust and her own connection to them.<br><br>The game features an intense campaign with a mix of linear and open-world elements, cooperative and competitive multiplayer modes, and refined combat mechanics. With stunning visuals, deep storytelling, and brutal action, Gears 5 expands the franchise’s legacy while offering fresh gameplay experiences.";
  }
  if (id == "infinite") {
    document.getElementById("title").innerHTML = "Halo Infinite";
    document.getElementById("text").innerHTML = "Halo Infinite is a first-person shooter developed by 343 Industries and published by Xbox Game Studios in 2021. It continues the story of Master Chief as he faces the Banished, a powerful faction that has taken control of Zeta Halo, one of the remaining Halo rings.<br><br>The game features an expansive semi-open world, improved combat mechanics, and a new grappling hook that adds verticality and mobility to the gameplay. With its blend of classic Halo elements and modern innovations, Halo Infinite offers an epic campaign and a free-to-play multiplayer";
  }
  if (id == "lop") {
    document.getElementById("title").innerHTML = "Lies Of P";
    document.getElementById("text").innerHTML = "Lies of P is a soulslike action RPG developed by Neowiz Games and released in 2023. Inspired by the story of Pinocchio, the game follows P, a puppet who must navigate the dark and twisted city of Krat while uncovering the truth behind its downfall.<br><br>With challenging combat, deep storytelling, and a unique 'lie system' that influences the narrative, Lies of P delivers a gripping experience. The game features weapon crafting, strategic battles, and a gothic steampunk aesthetic, making it a standout in the genre.";
  }
}

function hideGames() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].className += " despliegue";
  }
}

//Logic to return the main screen
let exit = document.getElementById("button-xbox-B")

exit.addEventListener("click",returnDescripction)

function returnDescripction(){
  document.getElementById("game-info").classList.remove("animation-info")
  document.getElementById("background").classList.remove("background-resize")
  showGames();
  addButtons();
  document.getElementById("button-xbox-B").classList.remove("exit-button")
}

function addButtons(){
  for(let i = 0; i<buttons.length; i++){
    buttons[i].classList.remove("hide-buttons")
  }
}

let games = document.querySelectorAll(".game-cover-container")
function showGames(){
  games.forEach(game => {
      game.classList.remove("despliegue")
  });
}