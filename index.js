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

// Abrir Menú Mobile // 

let menuMobile = document.getElementById ("menuMobile")
let contMenuMobile = document.getElementById ("container-mobile")

let abrirMenuMobile = () => {
    if ("click") {
        contMenuMobile.style.display =  "block";
        contMenuMobile.classList.add ("abrirNav")
    } 
}

menuMobile.addEventListener ("click", abrirMenuMobile)

// Cerrar Menú Mobile X //

let xSalida = document.getElementById ("xSalida")

let cerrarMenuMobile = () => {
    if ("click") {
        contMenuMobile.style.display = "none";
        contMenuMobile.classList.add ("cerrarNav")
    }
}

xSalida.addEventListener ("click", cerrarMenuMobile)

// SECT 1 - INICIO //

let sect1 = document.getElementById ("sect1")

let Inicio = [{
    "titulo": "Tortas",
    "desc": "las mejores tortas de Argentina",
    "imagen": "./imagenes/alfajores.png"},
    {"titulo": "Muffins",
    "desc": "los mejores muffins de LATAM",
    "imagen": "./imagenes/muffins.jpeg"}];

    let mostrarInicio = (titulo, desc, imagen) => {
        let div = document.createElement ("DIV");
        let imgg = document.createElement ("IMG")
        let h1 = document.createElement ("H1");
        let p = document.createElement ("P");

        div.appendChild (h1);
        div.appendChild (p);
        div.appendChild (imgg);

        imgg.setAttribute ("src", imagen);
        h1.textContent = titulo;
        p.textContent = desc;
        
        div.classList.add ("sect1Inicio")
        imgg.classList.add ("img")
        h1.classList.add ("sect1Titulo")
        p.classList.add ("sect1Desc")

        return div;
    }

    let elementoTemporal = document.createDocumentFragment();

for (let i = 0; i < Inicio.length; i++) {
	let inicioCajas = mostrarInicio(Inicio[i].titulo,Inicio[i].desc,Inicio[i].imagen);
	elementoTemporal.appendChild(inicioCajas);
}

sect1.appendChild(elementoTemporal)



















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












