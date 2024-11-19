// Select elements
const startButton = document.getElementById('start-button');
const messagesContainer = document.querySelector('.messages');
const messages = document.querySelectorAll('.message');
const heart = document.querySelector('.heart');

// Add click event to start button
startButton.addEventListener('click', () => {
  // Reveal messages container and hide the button
  messagesContainer.style.opacity = '1';
  messagesContainer.style.pointerEvents = 'all';
  startButton.style.display = 'none';

  // Reveal messages one by one with delay
  messages.forEach((message, index) => {
    setTimeout(() => {
      message.style.opacity = '1';
      message.style.transform = 'translateY(0)';
    }, index * 2000); // 2-second delay between messages
  });

  // Reveal the heart after all messages
  setTimeout(() => {
    heart.style.opacity = '1';
    heart.style.transform = 'translateY(0)';
  }, messages.length * 2000 + 1000); // Extra delay for the heart
});
