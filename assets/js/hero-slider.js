let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide'); // Fetch slides inside function
    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = "0";
        slide.style.visibility = "hidden";
    });
    
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = "1";
    slides[currentSlide].style.visibility = "visible";
}

function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    
    // Auto Play
    setInterval(() => {
        changeSlide(1);
    }, 6000);
});