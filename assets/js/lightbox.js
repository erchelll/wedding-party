/* ==========================================
            LIGHTBOX
========================================== */

class Lightbox {

    constructor() {

        this.images = document.querySelectorAll(".gallery-grid img");

        this.index = 0;

        this.scale = 1;

        this.init();

    }

    init() {

        this.create();

        this.events();

    }

    create() {

        this.lightbox = document.createElement("div");

        this.lightbox.className = "lightbox";

        this.lightbox.innerHTML = `

            <span class="close">
                &times;
            </span>

            <button class="prev">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <img>

            <button class="next">
                <i class="fa-solid fa-chevron-right"></i>
            </button>

        `;

        document.body.appendChild(this.lightbox);

        this.image = this.lightbox.querySelector("img");

        this.closeBtn = this.lightbox.querySelector(".close");

        this.prevBtn = this.lightbox.querySelector(".prev");

        this.nextBtn = this.lightbox.querySelector(".next");

    }

    events() {

        this.images.forEach((img,index)=>{

            img.addEventListener("click",()=>{

                this.index=index;

                this.open();

            });

        });

        this.closeBtn.onclick=()=>this.close();

        this.prevBtn.onclick=()=>this.prev();

        this.nextBtn.onclick=()=>this.next();

        this.lightbox.onclick=(e)=>{

            if(e.target===this.lightbox){

                this.close();

            }

        };

        document.addEventListener("keydown",(e)=>{

            if(!this.lightbox.classList.contains("active")) return;

            if(e.key==="Escape") this.close();

            if(e.key==="ArrowRight") this.next();

            if(e.key==="ArrowLeft") this.prev();

        });

        this.image.addEventListener("wheel",(e)=>{

            e.preventDefault();

            if(e.deltaY<0){

                this.scale+=0.1;

            }else{

                this.scale-=0.1;

            }

            if(this.scale<1) this.scale=1;

            if(this.scale>3) this.scale=3;

            this.image.style.transform=`scale(${this.scale})`;

        });

        this.image.addEventListener("dblclick",()=>{

            if(this.scale===1){

                this.scale=2;

            }else{

                this.scale=1;

            }

            this.image.style.transform=`scale(${this.scale})`;

        });

    }

    open(){

        this.lightbox.classList.add("active");

        this.image.src=this.images[this.index].src;

        this.scale=1;

        this.image.style.transform="scale(1)";

        document.body.style.overflow="hidden";

    }

    close(){

        this.lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

    next(){

        this.index++;

        if(this.index>=this.images.length){

            this.index=0;

        }

        this.open();

    }

    prev(){

        this.index--;

        if(this.index<0){

            this.index=this.images.length-1;

        }

        this.open();

    }

}

document.addEventListener("DOMContentLoaded",()=>{

    new Lightbox();

});