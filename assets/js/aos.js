/* ==========================================
            AOS CONFIG
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    AOS.init({

        duration: 1000,

        easing: "ease-in-out",

        once: true,

        mirror: false,

        offset: 80,

        delay: 100,

        anchorPlacement: "top-bottom"

    });

    console.log("AOS Initialized");

});