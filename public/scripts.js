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
            }, 1000); // Match this duration with the CSS transition
        }, 1000); // Display final font for 1 second
    }, 4000); // Duration of the font animation
});