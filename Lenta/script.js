document.addEventListener('DOMContentLoaded', () => {
    // Language switching functionality
    let currentLanguage = 'ru';
    const translations = {
        ru: {
            'feed-title': 'Лента путешествий',
            'filter-popular': 'Популярные',
            'filter-recent': 'Недавние',
            'filter-following': 'Подписки',
            'load-more': 'Загрузить еще',
            'like': 'Нравится',
            'comment': 'Комментировать',
            'share': 'Поделиться',
            'footer-copyright': '© 2024 Lets Krasnodar. Все права защищены.'
        },
        en: {
            'feed-title': 'Travel Feed',
            'filter-popular': 'Popular',
            'filter-recent': 'Recent',
            'filter-following': 'Following',
            'load-more': 'Load More',
            'like': 'Like',
            'comment': 'Comment',
            'share': 'Share',
            'footer-copyright': '© 2024 Lets Krasnodar. All rights reserved.'
        }
    };

    function updateTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
    }

    // Language buttons event listeners
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = button.getAttribute('data-lang');
            updateTranslations();
        });
    });

    // Initialize translations
    updateTranslations();

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'popular';

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update current filter
            currentFilter = button.getAttribute('data-filter');
            // Here you would typically fetch and display filtered posts
            console.log(`Filter changed to: ${currentFilter}`);
        });
    });

    // Post interaction functionality
    const postCards = document.querySelectorAll('.post-card');

    postCards.forEach(card => {
        // Like button
        const likeBtn = card.querySelector('.action-btn[data-action="like"]');
        if (likeBtn) {
            likeBtn.addEventListener('click', () => {
                const icon = likeBtn.querySelector('i');
                icon.classList.toggle('fas');
                icon.classList.toggle('far');
                // Here you would typically update the like count on the server
            });
        }

        // Comment button
        const commentBtn = card.querySelector('.action-btn[data-action="comment"]');
        if (commentBtn) {
            commentBtn.addEventListener('click', () => {
                // Here you would typically show the comment section
                console.log('Comment button clicked');
            });
        }

        // Share button
        const shareBtn = card.querySelector('.action-btn[data-action="share"]');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                // Here you would typically show sharing options
                console.log('Share button clicked');
            });
        }
    });

    // Load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // Here you would typically fetch and append more posts
            console.log('Load more clicked');
        });
    }

    // Infinite scroll functionality
    let isLoading = false;
    window.addEventListener('scroll', () => {
        if (isLoading) return;

        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight - scrollTop - clientHeight < 100) {
            isLoading = true;
            // Here you would typically fetch and append more posts
            console.log('Loading more posts...');
            setTimeout(() => {
                isLoading = false;
            }, 1000);
        }
    });

    // Post hover effects
    postCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Tag hover effects
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.background = 'var(--primary)';
            tag.style.color = 'var(--text-primary)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.background = 'var(--glass-bg)';
            tag.style.color = 'var(--text-secondary)';
        });
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            link.classList.add('active');
        }
    });
});
