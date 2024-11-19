document.getElementById("start-button").addEventListener("click", () => {
  const messages = document.querySelector(".messages");
  const startButton = document.getElementById("start-button");

  // Show messages
  startButton.classList.add("hidden");
  messages.classList.remove("hidden");

  // Enable animations
  setTimeout(() => {
    messages.style.opacity = "1";
  }, 500);
});
