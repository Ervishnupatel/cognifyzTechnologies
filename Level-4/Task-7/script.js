const cards = document.querySelectorAll('.pro-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within element
        const y = e.clientY - rect.top;  // y position within element

        // Create a 3D rotation effect based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});

// Simple Scroll Reveal
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.pro-nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
    } else {
        nav.style.padding = '20px 0';
    }
});


// Add touch support for the 3D tilt
cards.forEach(card => {
    card.addEventListener('touchstart', () => {
        card.style.transform = "perspective(1000px) rotateX(5deg) translateY(-10px) scale(1.02)";
    });
    card.addEventListener('touchend', () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) translateY(0) scale(1)";
    });
});