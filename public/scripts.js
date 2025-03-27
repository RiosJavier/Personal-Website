document.addEventListener("DOMContentLoaded", function() {
    // Add sparkles
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        document.getElementById('welcome-screen').appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }

    setInterval(createSparkle, 200);

    // Make header transparent during welcome screen
    const header = document.querySelector('header');
    header.classList.add('transparent');

    // Adjust font animation speed: fast then slow down
    setTimeout(function() {
        document.getElementById('welcome-name').style.animationDuration = '1s';
    }, 1000); // Fast animation for 1 second
    setTimeout(function() {
        document.getElementById('welcome-name').style.animationDuration = '3s';
    }, 2000); // Slow down after 1 second

    // Display final font for 1 second before fading out
    setTimeout(function() {
        document.getElementById('welcome-name').style.animation = 'none';
        document.getElementById('welcome-name').style.fontFamily = 'Poppins, sans-serif';
        setTimeout(function() {
            document.getElementById('welcome-screen').classList.add('hidden');
            setTimeout(function() {
                document.getElementById('welcome-screen').style.display = 'none';
                document.body.style.overflow = 'auto';
                header.classList.remove('transparent'); // Remove transparent class after welcome screen
            }, 1000); // Match this duration with the CSS transition
        }, 1000); // Display final font for 1 second
    }, 4000); // Duration of the font animation
});

// Scroll-triggered animations
document.querySelectorAll('.section-content').forEach(section => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = "translateY(20px)";
            }
        });
    });
    observer.observe(section);
});

// Improved scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-content');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the visible class
            } else {
                entry.target.classList.remove('visible'); // Remove if out of viewport
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Parallax Scrolling
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.parallax-layer').forEach((layer, index) => {
        const speed = index / 100;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Floating Elements Enhancement
document.querySelectorAll('.shape, .star').forEach((element) => {
    element.style.animationDelay = `${Math.random() * 5}s`;
    element.style.animationDuration = `${10 + Math.random() * 5}s`;
});