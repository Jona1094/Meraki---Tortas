let sect1 = document.getElementById ("sect1")

let inicio = () => {
    let divInicio = document.createElement ("DIV")
    let divCirc = document.createElement ("DIV")
    let imgInicio = document.createElement ("IMG")
    let divContText = document.createElement ("DIV")
    let tituloInicio = document.createElement ("H1")
    let pInicio = document.createElement ("P")
    let btnInicio = document.createElement ("BUTTON")

    divInicio.appendChild (divCirc)
    divCirc.appendChild (imgInicio)
    imgInicio.setAttribute ("src", "../imagenes/torta.jpg")
    divContText.appendChild (tituloInicio)
    divContText.appendChild (pInicio)
    divContText.appendChild (btnInicio)

    tituloInicio.textContent = "Tortas"
    pInicio.textContent = "Las mejores tortas de LATAM"
    btnInicio.textContent = "Más info"

    return divInicio;

}