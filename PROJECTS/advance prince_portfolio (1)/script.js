// Certificate Slider Logic
const slideContainer = document.querySelector('.slide');
const items = document.querySelectorAll('.slide .item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let activeIndex = 1;

// Update the slider layout
function updateSlider() {
  items.forEach((item, index) => {
    const position = (index - activeIndex) * 250 + 50;

    item.classList.remove('active');
    item.style.zIndex = 0;
    item.style.transform = 'scale(0.8)';
    item.style.left = `${position}%`;
    item.querySelector('.content').style.display = 'none';

    if (index === activeIndex) {
      item.classList.add('active');
      item.style.zIndex = 1;
      item.style.transform = 'scale(1)';
      item.querySelector('.content').style.display = 'block';
    }
  });
}

// Go to next slide
function goNext() {
  activeIndex = (activeIndex + 1) % items.length;
  updateSlider();
}

// Go to previous slide
function goPrev() {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  updateSlider();
}

// Event Listeners
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);

// Allow clicking on any item to focus it
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeIndex = index;
    updateSlider();
  });
});

// Initialize on load
updateSlider();
