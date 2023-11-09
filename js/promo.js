const promo = document.getElementById("promo")

function cargarPromo (){
    promo.innerHTML = ""
    const div = document.createElement("div")
    div.classList.add("divPromo")
    div.innerHTML = `
    <img src="../img/promo-popup.webp">
    <button class="btn btn-danger top" onclick="cerrarPromo()">X</button>
    <a class="banner__items__boton position" href="https://api.whatsapp.com/send/?phone=5492304513220&text&type=phone_number&app_absent=0" target="_blank"><button>QUIERO LA PROMO</button></a>
    `
    promo.appendChild(div)
}

function cerrarPromo() {
    promo.classList.add("off")
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPromo()
})