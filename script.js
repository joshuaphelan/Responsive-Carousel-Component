/* =======================
   Slider JavaScript Start
======================= */

document.addEventListener("DOMContentLoaded", function () {
    // Slider elements
    const slider = document.querySelector('.slider');
    const cards = Array.from(slider.children);
    let visibleCards = window.innerWidth <= 768 ? 1 : 3; // Dynamically determine visible cards
    let cardWidth = slider.offsetWidth / visibleCards;
    const gap = 20;
    let currentIndex = visibleCards; // Start at the first "real" card
    let isAnimating = false;
    let startX = 0;
    let endX = 0;
    let sliderTimer;

    /* =======================
       Utility Functions
    ======================== */

    // Adjust card width and visible cards for responsiveness
    function updateCardWidth() {
        visibleCards = window.innerWidth <= 768 ? 1 : 3; // Adjust visible cards for mobile/desktop
        cardWidth = Math.floor(slider.offsetWidth / visibleCards); // Round to avoid floating-point errors
    }

    // Duplicate cards for seamless looping
    function duplicateCards() {
        const clonesBefore = cards.slice(-visibleCards).map(card => card.cloneNode(true));
        const clonesAfter = cards.slice(0, visibleCards).map(card => card.cloneNode(true));
        clonesBefore.forEach(clone => slider.insertBefore(clone, slider.firstChild));
        clonesAfter.forEach(clone => slider.appendChild(clone));
    }
    duplicateCards();

    // Update card classes for scaling and opacity
    function updateCardClasses() {
        const allCards = Array.from(slider.children);
        allCards.forEach((card) => {
            card.classList.remove('middle');
        });
        const middleCard = slider.children[currentIndex];
        if (middleCard) middleCard.classList.add('middle');
    }

    /* =======================
       Slider Movement Logic
    ======================== */

    // Move the slider to center the middle card
    function moveSlider() {
        if (isAnimating) return;
        isAnimating = true;

        const sliderWidth = slider.offsetWidth;
        let offset;

        // Separate offset calculations for mobile and desktop
        if (window.innerWidth <= 768) {
            // Mobile: Use simpler alignment adjustment
            offset = Math.round(currentIndex * cardWidth - sliderWidth / 2 + cardWidth / 2 - 1); // Adjust to -1
        } else {
            // Desktop: Correct for all cards
            offset = Math.round(currentIndex * (cardWidth + gap) - sliderWidth / 2 + cardWidth / 2 - 1); // Adjust to -1
        }

        slider.style.transition = 'transform 0.3s ease-in-out';
        slider.style.transform = `translateX(-${offset}px)`;

        setTimeout(() => {
            const totalCards = slider.children.length;
            if (currentIndex >= totalCards - visibleCards) {
                slider.style.transition = 'none';
                currentIndex = visibleCards;
                moveSlider();
            } else if (currentIndex < visibleCards) {
                slider.style.transition = 'none';
                currentIndex = totalCards - visibleCards - 1;
                moveSlider();
            }
            isAnimating = false;
        }, 300);

        updateCardClasses();
    }

    /* =======================
       Timer and Controls
    ======================== */

    // Start the slider timer
    function startSliderTimer() {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(() => {
            currentIndex++;
            moveSlider();
        }, 2000);
    }

    // Pause the slider timer
    function pauseSliderTimer() {
        clearInterval(sliderTimer);
    }

    // Add touch swipe functionality
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            currentIndex++;
            moveSlider();
        } else if (endX - startX > 50) {
            currentIndex--;
            moveSlider();
        }
    });

    // Add click functionality for arrows
    const leftArrow = document.querySelector('.slider-arrow-left');
    const rightArrow = document.querySelector('.slider-arrow-right');

    leftArrow.addEventListener('click', () => {
        currentIndex--;
        moveSlider();
        startSliderTimer();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex++;
        moveSlider();
        startSliderTimer();
    });

    [leftArrow, rightArrow].forEach(arrow => {
        arrow.addEventListener('mouseenter', pauseSliderTimer);
        arrow.addEventListener('mouseleave', startSliderTimer);
    });

    /* =======================
       Initialize Slider
    ======================== */
    updateCardWidth();
    currentIndex = visibleCards;
    moveSlider();
    startSliderTimer();

    // Adjust card width and slider position dynamically on resize
    window.addEventListener('resize', () => {
        const prevVisibleCards = visibleCards;
        updateCardWidth();

        // Adjust current index when visibleCards changes
        if (visibleCards !== prevVisibleCards) {
            currentIndex = visibleCards;
        }

        moveSlider();
    });
});

/* =======================
   Slider JavaScript End
======================= */