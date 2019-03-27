let fotoSlide = document.getElementsByClassName("foto")
let slide = 0

function slideEsq(){
    if (slide == 0) slide = fotoSlide.length - 1;
    else slide--

    fotoSlide[0].style.marginLeft = "-" + slide * 600 + "px"
}

function slideDir(){
    if (slide == fotoSlide.length -1) slide = 0
    else slide++

    fotoSlide[0].style.marginLeft = "-" + slide * 600 + "px"
}

setInterval(slideDir, 2000)
