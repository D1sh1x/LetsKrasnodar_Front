document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
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

    // Avatar edit functionality
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

    // Trip card hover effects
    const tripCards = document.querySelectorAll('.trip-card');
    tripCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Photo hover effects
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.photo-overlay');
            overlay.style.opacity = '1';
        });
        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.photo-overlay');
            overlay.style.opacity = '0';
        });
    });

    // Save button animation
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('mouseenter', () => {
            saveBtn.style.transform = 'translateY(-2px)';
        });
        saveBtn.addEventListener('mouseleave', () => {
            saveBtn.style.transform = 'translateY(0)';
        });
    }
});
