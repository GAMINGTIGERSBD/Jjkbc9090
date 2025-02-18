document.addEventListener("DOMContentLoaded", function () {
    console.log("Filevex website loaded successfully!");

    // Add staggered fade-in animations
    document.querySelectorAll(".fade-in").forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Copy code to clipboard
function copyCode(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
        element.style.backgroundColor = '#4CAF50';
        element.innerText = 'Copied!';
        setTimeout(() => {
            element.style.backgroundColor = '#2d2d2d';
            element.innerText = text;
        }, 2000);
    });
}