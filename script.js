window.onload = function () {
    const text = "ProjectVault 🚀";
    let index = 0;
    const typingElement = document.getElementById("typing");
    function typeEffect() {
        if (index < text.length) {
            typingElement.classList.add("blink"); // Blinking cursor after typing
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Typing speed
        } else {            
            setTimeout(() => {
                typingElement.style.borderRight = "none"; // Remove cursor after 2s
            }, 300);
        }
    }
    typeEffect();
};


