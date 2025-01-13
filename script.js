document.addEventListener("DOMContentLoaded", () => {
    // Intro Typing Effect
    const text = "Hi Vi!";
    const h1Element = document.querySelector(".hi-vi");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            h1Element.textContent += text[index];
            index++;
            setTimeout(typeEffect, 70); // Adjust typing speed by changing the delay
        }
    }

    typeEffect(); // Start the typing effect
});
