// Make windows all draggable and close buttons for each
document.querySelectorAll('.draggable').forEach(window => {
  const header = window.querySelector('.header');
  const closeButton = window.querySelector('.close');

  let isDragging = false;
  let offsetX, offsetY;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - window.offsetLeft;
    offsetY = e.clientY - window.offsetTop;
  });
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      window.style.left = `${e.clientX - offsetX}px`;
      window.style.top = `${e.clientY - offsetY}px`;
    }
  });
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
  header.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - window.offsetLeft;
    offsetY = touch.clientY - window.offsetTop;
  });
  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      window.style.left = `${touch.clientX - offsetX}px`;
      window.style.top = `${touch.clientY - offsetY}px`;
    }
  });
  document.addEventListener('touchend', () => {
    isDragging = false;
  });
  closeButton.addEventListener('click', () => {
    window.remove();
  });
});
