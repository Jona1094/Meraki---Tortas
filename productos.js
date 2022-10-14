// PRODUCTOS //

// Galería dinámica //

let art1P = document.getElementById ("prod1");
let sect1P = document.getElementById ("sect1P")

let productos = [
    "../imagenes/alfajoresInicio.png",
    "../imagenes/alfajores.png",
    "../imagenes/muffins.jpeg",
    "../imagenes/muffins2.webp",
    "../imagenes/muffins.jpeg"]

    let mostrarProd = (imgProd) => {
        
        let divImg = document.createElement ("DIV")
        let imgP = document.createElement ("IMG");
        imgP.setAttribute ("src", imgProd);



        imgP.classList.add ("imgProd");

        return divImg;

        }

let temporal = document.createDocumentFragment();

for (let i = 0; i < productos.length; i++) {
	let nuevaImg = mostrarProd(productos[i]);
	temporal.appendChild(nuevaImg);
}
    art1P.appendChild(temporal)

    
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