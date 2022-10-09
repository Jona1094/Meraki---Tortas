// NAV //
/* const nav = document.getElementById ("nav")

const itemsNav = [
    {img: "whatsapp.png"},
    {item: "Inicio", page: "index.html"},
    {item: "Productos", page: "productos.html"},
    {item: "Contactame", page: "http://google.com"}];

const navBar = (item, page, img) => { 
    const imgWpp = document.createElement ("IMG");
    const li = document.createElement ("LI");
    const href = document.createElement ("A");

    li.appendChild (imgWpp);
    li.appendChild (href)
    

    imgWpp.setAttribute("src", img);
    href.setAttribute("href", page);
    href.textContent = item;
    li.classList.add ("navItem")
    href.classList.add ("navLink")

return li;
}

let elementoTemporal = document.createDocumentFragment();

for (let i = 0; i < itemsNav.length; i++) {
    let nuevoNav = navBar(itemsNav[i].item, itemsNav[i].page);
    elementoTemporal.appendChild(nuevoNav);
}

    nav.appendChild(elementoTemporal) 
 */

/* ---------------------------------------------------- */

// Efecto Máquina //

let texto = document.getElementById ("text")
let str = texto.innerHTML;
texto.innerHTML = "";
let speed = 100;
let i = 0;

function efectoMaquina () {
    if (i < str.length) {
        text.innerHTML += str.charAt(i); i++;
    }
    setTimeout (efectoMaquina, speed)
}

setTimeout (efectoMaquina, speed)












