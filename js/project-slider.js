// Project Image Slider

class ProjectSlider {
    constructor(sliderId, images) {
        this.slider = document.getElementById(sliderId);
        if (!this.slider) return;

        this.images = images;
        this.currentIndex = 0;
        this.totalImages = images.length;

        this.init();
    }

    init() {
        // If only one image, show it without slider controls
        if (this.totalImages === 1) {
            this.renderSingleImage();
            return;
        }

        // Render slider with controls
        this.renderSlider();
        this.attachEventListeners();
        this.startAutoplay();
    }

    renderSingleImage() {
        this.slider.innerHTML = `
            <img src="${this.images[0]}" alt="Project screenshot" class="single-image">
        `;
    }

    renderSlider() {
        const imagesHTML = this.images.map(img =>
            `<img src="${img}" alt="Project screenshot" class="slider-image">`
        ).join('');

        const dotsHTML = this.images.map((_, index) =>
            `<span class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
        ).join('');

        this.slider.innerHTML = `
            <div class="slider-container">
                <div class="slider-images" id="${this.slider.id}-images">
                    ${imagesHTML}
                </div>

                <button class="slider-btn prev" id="${this.slider.id}-prev" aria-label="Previous image">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>

                <button class="slider-btn next" id="${this.slider.id}-next" aria-label="Next image">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>

                <div class="slider-counter">
                    <span id="${this.slider.id}-current">1</span> / ${this.totalImages}
                </div>

                <div class="slider-dots" id="${this.slider.id}-dots">
                    ${dotsHTML}
                </div>
            </div>
        `;

        // Store references
        this.imagesContainer = document.getElementById(`${this.slider.id}-images`);
        this.prevBtn = document.getElementById(`${this.slider.id}-prev`);
        this.nextBtn = document.getElementById(`${this.slider.id}-next`);
        this.counter = document.getElementById(`${this.slider.id}-current`);
        this.dotsContainer = document.getElementById(`${this.slider.id}-dots`);
    }

    attachEventListeners() {
        // Previous button
        this.prevBtn.addEventListener('click', () => this.prev());

        // Next button
        this.nextBtn.addEventListener('click', () => this.next());

        // Dots
        const dots = this.dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.goToSlide(index);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });

        // Pause autoplay on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
        this.updateSlider();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalImages;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }

    updateSlider() {
        // Update images position
        const translateX = -this.currentIndex * 100;
        this.imagesContainer.style.transform = `translateX(${translateX}%)`;

        // Update counter
        this.counter.textContent = this.currentIndex + 1;

        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });

        // Update button states
        this.prevBtn.disabled = false;
        this.nextBtn.disabled = false;
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - go to next
                this.next();
            } else {
                // Swiped right - go to previous
                this.prev();
            }
        }
    }

    startAutoplay() {
        if (this.totalImages <= 1) return;

        this.autoplayInterval = setInterval(() => {
            this.next();
        }, 5000); // Change slide every 5 seconds
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a project detail page
    const sliderElement = document.querySelector('.project-slider');
    if (sliderElement && window.projectImages) {
        new ProjectSlider('project-slider', window.projectImages);
    }
});
