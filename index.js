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


/* SCROLL */

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let header= document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= (desplazamientoActual)){
        header.style.top = "0";
    } 
    else{
        header.style.top = "-125px"
    }
    ubicacionPrincipal = desplazamientoActual;

} 

// Abrir Menú Mobile // 

let menuMobile = document.getElementById ("menuMobile")
let contMenuMobile = document.getElementById ("container-mobile")
let imgLogo = document.getElementById ("logo")

let abrirMenuMobile = () => {
    if ("click") {
        contMenuMobile.style.display =  "flex";
        contMenuMobile.classList.add ("abrirNav")
        contMenuMobile.classList.remove ("cerrarNav")
        imgLogo.classList.add ("logoMostrar")
        imgLogo.classList.remove ("logo")
    } 
}

menuMobile.addEventListener ("click", abrirMenuMobile)

// Cerrar Menú Mobile X //

let xSalida = document.getElementById ("xSalida")

let cerrarMenuMobile = () => {
    if ("click") {
        contMenuMobile.style.display = "none";
        contMenuMobile.classList.add ("cerrarNav")
        imgLogo.classList.remove ("logoMostrar")
        imgLogo.classList.add ("logo")

    }
}

xSalida.addEventListener ("click", cerrarMenuMobile)

// SECT 1 - INICIO //

let sect1 = document.getElementById ("sect1")

let Inicio = [{
    "titulo": "Alfajores",
    "desc": "Alfajores de colores rellenos. Varios gustos!",
    "imagen": "imagenes/alfajoresInicio2.jpeg",
    "boton": "Ver más"},
    {"titulo": "Muffins",
    "desc": "los mejores muffins de LATAM",
    "imagen": "./imagenes/alfajoresInicio.png",
    "boton": "Ver más"},
    {"titulo": "Muffins",
    "desc": "los mejores muffins de LATAM",
    "imagen": "./imagenes/muffins.jpeg",
    "boton": "Ver más"},
    {"titulo": "Muffins",
    "desc": "los mejores muffins de LATAM",
    "imagen": "./imagenes/muffins.jpeg",
    "boton": "Ver más"}];

    let mostrarInicio = (titulo, desc, imagen, boton) => {
        let div = document.createElement ("DIV");
        let imgg = document.createElement ("IMG");
        let h1 = document.createElement ("H1");
        let p = document.createElement ("P");
        let btnMas = document.createElement ("BUTTON")

        div.appendChild (h1);
        div.appendChild (p);
        div.appendChild (imgg);
        div.appendChild (btnMas);

        
        imgg.setAttribute ("src", imagen);
        h1.textContent = titulo;
        p.textContent = desc;
        btnMas.textContent = boton;

        div.classList.add ("sect1Inicio")
        imgg.classList.add ("imgInicio")
        h1.classList.add ("sect1Titulo")
        p.classList.add ("sect1Desc")
        btnMas.classList.add ("btnMas")

        // Modal //

let modalContainer = document.createElement ("DIV")
let modal = document.createElement ("DIV")
let imgModal = document.createElement ("IMG")

let abrirModal = () => {
    imgModal.setAttribute ("src", imagen)
    
    modalContainer.appendChild (modal)
    modal.appendChild (imgModal)

    modalContainer.classList.add ("containerModal")
    modal.classList.add ("modal")
    imgModal.classList.add ("imgModal")
}

btnMas.addEventListener ("click", abrirModal)
        return div;
    }

    let elementoTemporal = document.createDocumentFragment();

for (let i = 0; i < Inicio.length; i++) {
	let inicioCajas = mostrarInicio(Inicio[i].titulo,Inicio[i].desc,Inicio[i].imagen, Inicio[i].boton);
	elementoTemporal.appendChild(inicioCajas);
}

sect1.appendChild(elementoTemporal);

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


// SECT 2 //
/* let sect2 = document.getElementById ("sliderSect2")
sect2.addEventListener('load', function (){
    let imagenes = [];

    imagenes [0] = './imagenes/alfajores.png';
    imagenes [1] = './imagenes/alfajoresInicio.png';
    imagenes [2] = './imagenes/alfajoresInicio2.jpeg';

    let indiceImagenes = 0;
    let tiempo = 500;

    function cambiarImagenes () {
        document.slider.src = imagenes [indiceImagenes];

        if (indiceImagenes < 2) {
            indiceImagenes++
        } else {
            indiceImagenes = 0;
        }
    }
    setInterval(cambiarImagenes, 2000)

}) */






