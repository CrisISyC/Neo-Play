document.addEventListener("DOMContentLoaded", () => {
    const covers = document.querySelectorAll(".game-cover-container");
    const background = document.getElementById("background");

    // Marcar el primer cover como activo al inicio
    covers[0].classList.add("active");

    covers.forEach((cover) => {
      cover.addEventListener("mouseenter", () => {
        let newBackground = getComputedStyle(cover).backgroundImage.replace("cover", "background");

        // Cambiar el fondo
        background.style.setProperty("--background-image", newBackground);

        // Marcar este cover como activo
        covers.forEach(c => c.classList.remove("active"));
        cover.classList.add("active");
      });
    });
  });