/* ==========================================
            SWIPER
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    new Swiper(".gallerySwiper",{

        loop:true,

        speed:1000,

        grabCursor:true,

        centeredSlides:true,

        autoplay:{

            delay:3000,

            disableOnInteraction:false

        },

        effect:"coverflow",

        coverflowEffect:{

            rotate:20,

            stretch:0,

            depth:120,

            modifier:1,

            slideShadows:true

        },

        pagination:{

            el:".swiper-pagination",

            clickable:true

        },

        navigation:{

            nextEl:".swiper-button-next",

            prevEl:".swiper-button-prev"

        },

        breakpoints:{

            0:{

                slidesPerView:1

            },

            768:{

                slidesPerView:2

            },

            1024:{

                slidesPerView:3

            }

        }

    });

});

console.log("Swiper Ready");