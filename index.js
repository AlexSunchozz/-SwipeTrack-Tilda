document.addEventListener("DOMContentLoaded", function () {
  const blocks = ['#rec899810341']; // Добавь сюда ID нужных блоков

  blocks.forEach(id => {
    const el = document.querySelector(id + ' .t396__artboard');
    if (!el) return;

    el.classList.add('dragscroll');

    let isDown = false;
    let startX;
    let scrollLeft;

    el.addEventListener('mousedown', (e) => {
      isDown = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });

    el.addEventListener('mouseleave', () => {
      isDown = false;
      el.classList.remove('active');
    });

    el.addEventListener('mouseup', () => {
      isDown = false;
      el.classList.remove('active');
    });

    el.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // скорость скролла
      el.scrollLeft = scrollLeft - walk;
    });
  });
});
