/* ==========================================
            MUSIC PLAYER
========================================== */

const music = document.getElementById("music");

let isPlaying = false;

/*==========================================
        CREATE BUTTON
==========================================*/

const musicButton = document.createElement("button");

musicButton.className = "music-button";

musicButton.innerHTML = `<i class="fa-solid fa-music"></i>`;

document.body.appendChild(musicButton);

/*==========================================
        DEFAULT VOLUME
==========================================*/

if(music){

    music.volume = 0.3;

}

/*==========================================
        RESTORE STATE
==========================================*/

const savedState = localStorage.getItem("music");

if(savedState === "playing"){

    music.play().catch(()=>{});

    isPlaying = true;

    musicButton.classList.add("playing");

}

/*==========================================
        TOGGLE MUSIC
==========================================*/

musicButton.addEventListener("click",()=>{

    if(!music) return;

    if(isPlaying){

        music.pause();

        musicButton.classList.remove("playing");

        localStorage.setItem("music","pause");

        isPlaying=false;

    }

    else{

        music.play();

        musicButton.classList.add("playing");

        localStorage.setItem("music","playing");

        isPlaying=true;

    }

});

/*==========================================
        PLAY AFTER OPEN
==========================================*/

const openButton=document.getElementById("openInvitation");

if(openButton){

    openButton.addEventListener("click",()=>{

        if(!music) return;

        music.play();

        musicButton.classList.add("playing");

        localStorage.setItem("music","playing");

        isPlaying=true;

    });

}

/*==========================================
        END MUSIC
==========================================*/

if(music){

    music.addEventListener("ended",()=>{

        music.currentTime=0;

        music.play();

    });

}

/*==========================================
        PAGE VISIBILITY
==========================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.volume=0.1;

    }

    else{

        music.volume=0.3;

    }

});

/*==========================================
        KEYBOARD SHORTCUT
==========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        musicButton.click();

    }

});

/*==========================================
        DEBUG
==========================================*/

console.log("Music Ready");