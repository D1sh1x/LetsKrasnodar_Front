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

// Profile Page Tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Avatar edit button
    const editAvatarBtn = document.querySelector('.edit-avatar');
    if (editAvatarBtn) {
        editAvatarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically open a file picker dialog
            // For now, we'll just show an alert
            alert('Функция изменения аватара будет доступна в ближайшее время');
        });
    }

    // Photo actions
    const photoActions = document.querySelectorAll('.photo-action');
    photoActions.forEach(action => {
        action.addEventListener('click', (e) => {
            e.stopPropagation();
            const actionType = action.querySelector('i').classList.contains('fa-heart') ? 'like' : 'share';
            // Here you would typically handle the action
            alert(`Функция ${actionType} будет доступна в ближайшее время`);
        });
    });

    // Settings form
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to the server
            alert('Настройки сохранены');
        });
    }
});