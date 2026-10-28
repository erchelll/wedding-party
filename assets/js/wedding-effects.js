
document.addEventListener("DOMContentLoaded", function () {

    const opening = document.getElementById("opening");
    const openButton = document.getElementById("openInvitation");

    const music = document.getElementById("music");
    const home = document.getElementById("home");

    if (!opening || !openButton) return;

    // Kunci scroll sebelum undangan dibuka
    document.body.style.overflow = "hidden";


    // ==================================
    // ANIMASI BUNGA SAKURA
    // ==================================

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        const petalLayer = document.createElement("div");

        petalLayer.id = "sakura-petals";

        petalLayer.setAttribute("aria-hidden", "true");

        const petalCount =
            window.innerWidth < 600 ? 13 : 20;

        for (let i = 0; i < petalCount; i++) {

            const petal = document.createElement("span");

            petal.className = "sakura-petal";

            const size = 8 + Math.random() * 9;

            const duration = 9 + Math.random() * 10;

            const delay = Math.random() * -18;

            const drift = Math.round(
                -90 + Math.random() * 180
            );

            const spin = Math.round(
                360 + Math.random() * 600
            );

            petal.style.setProperty(
                "--left",
                `${Math.random() * 100}%`
            );

            petal.style.setProperty(
                "--size",
                `${size}px`
            );

            petal.style.setProperty(
                "--duration",
                `${duration}s`
            );

            petal.style.setProperty(
                "--delay",
                `${delay}s`
            );

            petal.style.setProperty(
                "--drift",
                `${drift}px`
            );

            petal.style.setProperty(
                "--spin",
                `${spin}deg`
            );

            petalLayer.appendChild(petal);
        }

        document.body.appendChild(petalLayer);
    }


    // ==================================
    // TOMBOL MEMBUKA AMPLOP
    // ==================================

    window.addEventListener("click", function (event) {

        const clickedButton =
            event.target.closest("#openInvitation");

        if (!clickedButton) return;

        event.preventDefault();

        event.stopImmediatePropagation();

        if (opening.classList.contains("is-opening")) {
            return;
        }

        clickedButton.disabled = true;

        // Jalankan animasi amplop
        opening.classList.add("is-opening");


        // Tunggu animasi selesai
        setTimeout(function () {

            opening.classList.add("is-hidden");

            document.body.style.overflow = "auto";


            // Memulai musik setelah interaksi pengguna
            if (music) {

                const playAttempt = music.play();

                if (playAttempt &&
                    typeof playAttempt.catch === "function") {

                    playAttempt.catch(function () {
                        // Musik bisa diputar melalui tombol musik lama
                    });
                }
            }


            // Scroll ke halaman utama
            if (home) {

                home.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }, 1550);

    }, true);

});
