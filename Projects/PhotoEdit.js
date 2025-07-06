const containers = document.querySelectorAll('.compare-container');

containers.forEach(container => {
  const slider = container.querySelector('.slider-handle');
  const afterWrapper = container.querySelector('.after-wrapper');
  let isDragging = false;

  container.addEventListener('mousedown', () => {
    isDragging = true;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    afterWrapper.style.width = offsetX + 'px';
    slider.style.left = offsetX + 'px';
  });
});
