
$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const newLeft = -index * 100 + '%';
        $('.slides').css('transform', 'translateX(' + newLeft + ')');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Auto slide
    setInterval(nextSlide, 3000);
});
