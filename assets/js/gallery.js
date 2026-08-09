/* ==========================================
        GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

let currentImage = 0;

/*==========================================
        CREATE LIGHTBOX
==========================================*/

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `

    <span class="close">&times;</span>

    <button class="prev">&#10094;</button>

    <img src="" alt="Gallery">

    <button class="next">&#10095;</button>

`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");

const closeButton = lightbox.querySelector(".close");

const nextButton = lightbox.querySelector(".next");

const prevButton = lightbox.querySelector(".prev");

/*==========================================
        OPEN
==========================================*/

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentImage=index;

        openImage();

    });

});

function openImage(){

    lightbox.classList.add("active");

    lightboxImage.src=galleryImages[currentImage].src;

    document.body.style.overflow="hidden";

}

/*==========================================
        CLOSE
==========================================*/

function closeImage(){

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

}

closeButton.addEventListener("click",closeImage);

/*==========================================
        NEXT
==========================================*/

function nextImage(){

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    lightboxImage.src=galleryImages[currentImage].src;

}

/*==========================================
        PREVIOUS
==========================================*/

function prevImage(){

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    lightboxImage.src=galleryImages[currentImage].src;

}

nextButton.addEventListener("click",nextImage);

prevButton.addEventListener("click",prevImage);

/*==========================================
        KEYBOARD
==========================================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    switch(e.key){

        case "Escape":

            closeImage();

        break;

        case "ArrowRight":

            nextImage();

        break;

        case "ArrowLeft":

            prevImage();

        break;

    }

});

/*==========================================
        CLICK OUTSIDE
==========================================*/

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeImage();

    }

});

/*==========================================
        TOUCH SWIPE
==========================================*/

let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

    startX=e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    const endX=e.changedTouches[0].screenX;

    if(startX-endX>60){

        nextImage();

    }

    if(endX-startX>60){

        prevImage();

    }

});

console.log("Gallery Ready");