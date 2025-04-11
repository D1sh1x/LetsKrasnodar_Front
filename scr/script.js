// Slider functionality
const slides = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideCount = slides.children.length;
let currentSlide = 0;

// Create dots
for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');

function goToSlide(index) {
    currentSlide = index;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
}

// Auto play
setInterval(nextSlide, 5000);

// Button controls
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Touch support
let touchStartX = 0;
let touchEndX = 0;

slides.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

slides.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) nextSlide();
    if (touchEndX > touchStartX) prevSlide();
}