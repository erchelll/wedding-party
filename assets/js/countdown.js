/* ==========================================
            COUNTDOWN
========================================== */

// ================================
// UBAH TANGGAL PERNIKAHAN DISINI
// Format : Tahun, Bulan (0-11), Hari,
// Jam, Menit, Detik
// ================================

const weddingDate = new Date(
    2026,
    12,
    15,
    7,
    0,
    0
).getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        clearInterval(timer);

        if(days) days.innerHTML = "00";
        if(hours) hours.innerHTML = "00";
        if(minutes) minutes.innerHTML = "00";
        if(seconds) seconds.innerHTML = "00";

        const countdownBox = document.getElementById("countdown");

        if(countdownBox){

            countdownBox.innerHTML = `
                <div class="countdown-finish">
                    <h2>🎉 Hari Bahagia Telah Tiba 🎉</h2>
                </div>
            `;

        }

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    if(days) days.innerHTML = String(d).padStart(2,"0");
    if(hours) hours.innerHTML = String(h).padStart(2,"0");
    if(minutes) minutes.innerHTML = String(m).padStart(2,"0");
    if(seconds) seconds.innerHTML = String(s).padStart(2,"0");

}

countdown();

const timer = setInterval(countdown,1000);