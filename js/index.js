/*-----BARRA DE MENÚ----- */
/*LE DECIMOS QUE AL PASAR EL MOUSE SE VISUALIZARA LOS SUB-MENUS */
window.addEventListener(scroll,function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

/*-----FINAL DE BARRA DE MENÚ----- */

/* ------ inicio de boton leer más ------ */
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".ventana")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-conteiner")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity ="1";
    modalC.style.visibility ="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity ="0";
        modalC.style.visibility ="hidden";
    }, 900)
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalC.style.opacity ="0";
            modalC.style.visibility ="hidden";
         }, 900)

    }
});
/* ----- FINAL de boton leer más ------ */


/*--------himno-boton descarga----------*/
var boton = document.getElementById("download");
var contador = 15;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 15 segundos para descargar.</b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;
/*-------- FINAL DE himno-boton descarga----------*/




/*------ INICIO DE BOTON MODAL--------*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

/*--------FINAL DE BOTON MODAL----------*/

/*Agregamos Carrusel de Docentes*/
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*-----Agregamos relacion de nuestro carrusel-----*/

var slider = document.querySelector(".slier-prin");

slider.innerHTML += slider.innerHTML;
/*-----FINAL DE carrusel -----*/