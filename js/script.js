/*=========================================================
    DIPEI
    SCRIPT.JS

    Framework JavaScript
=========================================================*/



/*=========================================================
    ESPERAR CARGA DEL DOCUMENTO
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initNavbar();

    initReveal();

    initBackToTop();

    initSmoothScroll();

});



/*=========================================================
    NAVBAR INTELIGENTE
=========================================================*/

function initNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            navbar.classList.add("navbar-scrolled");

        }

        else{

            navbar.classList.remove("navbar-scrolled");

        }

    });

}



/*=========================================================
    ANIMACIÓN REVEAL
=========================================================*/

function initReveal(){

    const reveals=document.querySelectorAll(".reveal");

    function reveal(){

        reveals.forEach(element=>{

            const top=element.getBoundingClientRect().top;

            const visible=window.innerHeight-100;

            if(top<visible){

                element.classList.add("active");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);

}



/*=========================================================
    BOTÓN VOLVER ARRIBA
=========================================================*/

function initBackToTop(){

    const button=document.createElement("button");

    button.innerHTML="↑";

    button.id="backToTop";

    document.body.appendChild(button);

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            button.classList.add("show");

        }

        else{

            button.classList.remove("show");

        }

    });

}



/*=========================================================
    SCROLL SUAVE
=========================================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const destino=document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/*=========================================================
    EFECTO HOVER TARJETAS
=========================================================*/

document.querySelectorAll(".card-custom").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});



/*=========================================================
    CONTADORES
=========================================================*/

function animateCounter(counter){

    const target=+counter.dataset.target;

    const increment=target/120;

    let value=0;

    function update(){

        value+=increment;

        if(value<target){

            counter.innerText=Math.floor(value);

            requestAnimationFrame(update);

        }

        else{

            counter.innerText=target;

        }

    }

    update();

}



document.querySelectorAll(".counter").forEach(counter=>{

    animateCounter(counter);

});



/*=========================================================
    LAZY IMAGES
=========================================================*/

const images=document.querySelectorAll("img");

images.forEach(img=>{

    img.loading="lazy";

});



/*=========================================================
    AÑO AUTOMÁTICO
=========================================================*/

const year=document.querySelector("#year");

if(year){

    year.textContent=new Date().getFullYear();

}
