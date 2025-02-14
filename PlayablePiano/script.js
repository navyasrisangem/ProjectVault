const keys = document.querySelectorAll(".keys .key");
const volumeControl = document.querySelector(".volume-control input");
const hideUnhideKeys = document.querySelector(".checkbox input");

let allKeys = [];
let audio = new Audio(); // Initialize audio to avoid reference issues

const playSound = (key) => {
    audio.src = `tunes/${key}.wav`; // Change the source instead of creating a new object
    audio.volume = volumeControl.value; // Apply volume control
    audio.play().catch(error => console.log("Playback error:", error));

    const pressedKey = document.querySelector(`[data-key="${key}"]`);
    pressedKey.classList.add("active");

    setTimeout(() => {
        pressedKey.classList.remove("active");
    }, 150);
};

keys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playSound(key.dataset.key));
});

hideUnhideKeys.addEventListener("click", () => {
    keys.forEach(key => key.classList.toggle("hide"));
});

document.addEventListener("keydown", (e) => {
    if (allKeys.includes(e.key)) {
        playSound(e.key);
    }
});
