function initTestimonials() {

  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const nextBtn = document.querySelector(".slider-btn.next");
  const prevBtn = document.querySelector(".slider-btn.prev");

  if (!track || !slides.length) return;

  let index = 0;

  function getSlidesPerView() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function updateSlider() {
    const slidesPerView = getSlidesPerView();
    const slideWidth = slides[0].offsetWidth + 30; // 30 = gap
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const slidesPerView = getSlidesPerView();
    if (index < slides.length - slidesPerView) {
      index++;
    } else {
      index = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    const slidesPerView = getSlidesPerView();
    if (index > 0) {
      index--;
    } else {
      index = slides.length - slidesPerView;
    }
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);

  updateSlider();
}