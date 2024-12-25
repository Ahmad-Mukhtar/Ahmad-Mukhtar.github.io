const texts = ["Software Developer", "Java Expert", "Web Enthusiast"];
let currentIndex = 0;
const textElement = document.getElementById("animated-text-h2");

function typeText(text, callback) {
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    textElement.textContent = text.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === text.length) {
      clearInterval(typingInterval);
      setTimeout(() => backspaceText(text, callback), 3000); // Pause before backspace
    }
  }, 100); // Typing speed
}

function backspaceText(text, callback) {
  let charIndex = text.length;
  const backspaceInterval = setInterval(() => {
    textElement.textContent = text.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 1) {
      clearInterval(backspaceInterval);
      setTimeout(callback, 50); // Small pause before starting next text
    }
  }, 50); // Backspace speed
}

function startAnimation() {
  typeText(texts[currentIndex], () => {
    currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
    startAnimation();
  });
}

startAnimation();
