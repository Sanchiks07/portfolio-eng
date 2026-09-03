const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
    );
});


// ========== CLOSE MOBILE MENU AFTER CLICKING A LINK ==========
document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');

        menuButton?.setAttribute(
            'aria-expanded',
            'false'
        );
    });
});


// ========== SCROLL REVEAL ANIMATION ==========
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);


// Find every element with the "reveal" class and watch for it entering the screen.
document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
});

// ========== COPY EMAIL ==========
function copyEmail() {
    const email = document.getElementById('email').textContent;
    const button = document.querySelector('.copy-email');

    navigator.clipboard.writeText(email).then(() => {
        button.textContent = 'Copied!';

        setTimeout(() => {
            button.textContent = 'Copy';
        }, 1500);
    });
}