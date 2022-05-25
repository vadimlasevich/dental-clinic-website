import { carousel } from './carouselSlider.js';

export const stockSlider = () => {
  const slides = document.querySelectorAll(`.stock-slider__slide`);
  const windowWidth = {
    small: 550,
    medium: 768,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.small) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 2);
    } else {
      return (slidesLenght = slides.length - 3);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'stock');
};

export const doctorsSlider = () => {
  const slides = document.querySelectorAll('.doctors-slider__slide');

  let slidesLenght = slides.length - 1;

  carousel(slidesLenght, 'doctors');
};

export const reviewsSlider = () => {
  const slides = document.querySelectorAll('.reviews-slider__slide');
  const windowWidth = {
    medium: 768,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 1);
    } else {
      return (slidesLenght = slides.length - 2);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'reviews');
};

export const licensesSlider = () => {
  const slides = document.querySelectorAll('.licenses-slider__slide');
  const windowWidth = {
    small: 550,
    medium: 768,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.small) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 2);
    } else {
      return (slidesLenght = slides.length - 4);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'licenses');
};

export const aboutSlider = () => {
  const slides = document.querySelectorAll('.about-slider__slide');
  const windowWidth = {
    small: 550,
    medium: 768,
  };

  let slidesLenght;

  const getSlidesLenght = () => {
    if (window.innerWidth <= windowWidth.small) {
      return (slidesLenght = slides.length - 1);
    } else if (window.innerWidth <= windowWidth.medium) {
      return (slidesLenght = slides.length - 2);
    } else {
      return (slidesLenght = slides.length - 4);
    }
  };

  getSlidesLenght();
  carousel(slidesLenght, 'about');
};
