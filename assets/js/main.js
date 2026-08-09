/* ==========================================
        MAIN JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initInvitation();

    initGuest();

    initBackToTop();

    initCopyButton();

    initSmoothScroll();

    initLoading();

});

/* ==========================================
        OPEN INVITATION
========================================== */

function initInvitation() {

    const opening = document.getElementById("opening");

    const button = document.getElementById("openInvitation");

    const music = document.getElementById("music");

    if (!button) return;

    button.addEventListener("click", () => {

        opening.style.opacity = "0";

        opening.style.visibility = "hidden";

        opening.style.transition = ".8s";

        document.body.style.overflow = "auto";

        music.play();

        document.getElementById("home").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ==========================================
        GUEST NAME
========================================== */

function initGuest() {

    const params = new URLSearchParams(window.location.search);

    const guest = params.get("to");

    if (guest) {

        document.getElementById("guest-name").innerHTML = decodeURIComponent(guest);

    }

}

/* ==========================================
        BACK TO TOP
========================================== */

function initBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("active");

        }

        else {

            button.classList.remove("active");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================
        COPY REKENING
========================================== */

function initCopyButton() {

    const button = document.querySelector(".rekening button");

    if (!button) return;

    button.addEventListener("click", () => {

        const rekening = document.querySelector(".rekening p").innerText;

        navigator.clipboard.writeText(rekening);

        button.innerHTML = "Berhasil Disalin ✓";

        setTimeout(() => {

            button.innerHTML = "Copy";

        },2000);

    });

}

/* ==========================================
        SMOOTH SCROLL
========================================== */

function initSmoothScroll(){

    document.querySelectorAll("a[href^='#']").forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))

            .scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}

/* ==========================================
        LOADING
========================================== */

function initLoading(){

    const loading=document.querySelector(".loading");

    if(!loading) return;

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loading.style.opacity="0";

            loading.style.visibility="hidden";

        },800);

    });

}

/* ==========================================
        SCROLL EFFECT
========================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(!hero) return;

    hero.style.backgroundPositionY=

        window.pageYOffset * .5 +"px";

});

/* ==========================================
        HEADER SHADOW
========================================== */

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(!header) return;

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ==========================================
        REVEAL ANIMATION
========================================== */

const reveals=document.querySelectorAll("[data-aos]");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-100){

            item.classList.add("fade-up");

        }

    });

});

/* ==========================================
        DISABLE RIGHT CLICK (OPTIONAL)
========================================== */

// document.addEventListener("contextmenu",(e)=>{

//     e.preventDefault();

// });

/* ==========================================
        PREVENT DRAG IMAGE
========================================== */

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});

/* ==========================================
        CONSOLE MESSAGE
========================================== */

console.log(

"%cWedding Invitation",

"color:#D4AF37;font-size:20px;font-weight:bold"

);

console.log(

"%cDeveloped with ❤️",

"color:white;font-size:14px"

);

/*======================================
        SCROLL PROGRESS
======================================*/

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/height)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});