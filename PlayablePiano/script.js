const keys = document.querySelectorAll(".keys .key");
const volumeControl = document.querySelector(".volume-control input");
const hideUnhideKeys = document.querySelector(".checkbox input");

let allKeys = [];
let audio = null;

const playSound = (key) => {
    if (audio) {
        audio.pause(); // Stop the previous sound
        audio.currentTime = 0; // Reset the audio playback
    }
    
    let audio = new Audio(`tunes/${key}.wav`);  //create a new audio instance
    audio.volume = volumeControl.value; //apply volume control
    audio.play().catch(error=>console.log("Playback error:",error));   

    const pressedKey = document.querySelector(`[data-key="${key}"]`);
    pressedKey.classList.add("active");

    setTimeout(()=> {
        pressedKey.classList.remove("active");
    },150);
};

keys.forEach(key => {
    allKeys.push(key.dataset.key);  //so that no error while pressed other keys
    key.addEventListener("click", () => playSound(key.dataset.key));
});

hideUnhideKeys.addEventListener("click", (e)=> {
    keys.forEach(key => {
        key.classList.toggle("hide");
    })
});

// volumeControl.addEventListener("input", (e) => {
//     audio.volume = e.target.value; passing the range slider value as an audio volume
// });

document.addEventListener("keydown", (e) => {
    if(allKeys.includes(e.key)) {
        playSound(e.key);   //when keys are pressed
    }    
});


