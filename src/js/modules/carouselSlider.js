export const carousel = (slidesLenght, sectionName) => {
  const sliderContainer = document.querySelector(`.${sectionName}-slider__container`);
  const sliderButtonPrev = document.querySelector(`.${sectionName}-slider__button-prev`);
  const sliderButtonNext = document.querySelector(`.${sectionName}-slider__button-next`);
  const slides = document.querySelectorAll(`.${sectionName}-slider__slide`);
  const sliderDots = document.querySelectorAll(`.${sectionName}-slider__dot`);
  let count = 0;

  const activeDots = (count) => {
    sliderDots.forEach((dot) => {
      dot.classList.remove('dot-active');
    });
    sliderDots[count].classList.add('dot-active');
  };

  const nextSlide = () => {
    if (count === slidesLenght) {
      count = 0;
      rollSlider(count);
      activeDots(count);
    } else {
      count++;
      rollSlider(count);
      activeDots(count);
    }
  };

  const prevSlide = () => {
    if (count === 0) {
      count = slidesLenght;
      rollSlider(count);
      activeDots(count);
    } else {
      count--;
      rollSlider(count);
      activeDots(count);
    }
  };

  const rollSlider = (count) => {
    let widthSlide = slides[0].offsetWidth;
    sliderContainer.style.transform = `translate(-${count * widthSlide}px)`;
  };

  sliderDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      rollSlider(dotIndex);
      activeDots(dotIndex);
    });
  });

  sliderButtonNext.addEventListener('click', nextSlide);
  sliderButtonPrev.addEventListener('click', prevSlide);
};
