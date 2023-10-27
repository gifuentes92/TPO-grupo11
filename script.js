const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // muestra/esconde el proximo icono de hacia la izquierda
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // obtener el maximo ancho scrolleo 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // margen añadido hasta 14 imagenes
        //  if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});
const autoSlide = () => {
    // si no queda ninguna imagen por desplazar, vuelve desde acá
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // cambia el valor de positionDiff a positivo
    let firstImgWidth = firstImg.clientWidth + 14;
    // obtener el valor de diferencia que hay que añadir o reducir del carrusel de la izquierda para tomar el centro img medio
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // si el user desplaza hacia la derecha
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // si el user desplaza hacia la izquierda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // actualización del valor de las variables globales al pulsar el mouse
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // desplazat imagen/carrusel hacia la izquierda de acuerdo al puntero del mouse
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


//modal1
var modal = document.getElementById("myModal");

// botón que abre el modal
var btn = document.getElementById("myBtn");

// obtener <span> que cierrra el modal
var span = document.getElementsByClassName("close")[0];

// click al boton para abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// click <span> (x) para cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// click fuera del modal para cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//modal2
var modal2 = document.getElementById("myModal2");

// botón que abre el modal
var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];

// click al boton para abrir el modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// click <span> (x) para cerrar el modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// click fuera del modal para cerrarlo
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//modal3
var modal3 = document.getElementById("myModal3");

// botón que abre el modal
var btn3 = document.getElementById("myBtn3");

// obtener <span> que cierrra el modal
var span3 = document.getElementsByClassName("close3")[0];

// click al boton para abrir el modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// click <span> (x) para cerrar el modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// click fuera del modal para cerrarlo
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

//modal4
var modal4 = document.getElementById("myModal4");

// botón que abre el modal
var btn4 = document.getElementById("myBtn4");

// obtener <span> que cierrra el modal
var span4 = document.getElementsByClassName("close4")[0];

// click al boton para abrir el modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// click <span> (x) para cerrar el modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// click fuera del modal para cerrarlo
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

