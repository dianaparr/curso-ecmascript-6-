// se lanzó en junio de 2020

// 1
// Dynamic import -> realizar una importación de un elemento de forma dinámica.
// cómo llamar un archivo dentro de otra pieza de código cuando se desencadene un llamado -> click
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
})
