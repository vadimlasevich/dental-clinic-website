export const burger = () => {
  const burgerHeader = document.querySelector('.header-burger');
  const burgerFooter = document.querySelector('.footer-burger');
  const asideHeader = document.querySelector('.aside-header');
  const asideFooter = document.querySelector('.aside-footer');
  const asideLinks = document.querySelectorAll('.aside__link');
  const shadowed = document.querySelector('.shadowed-burger');

  const openHeaderBurger = () => {
    burgerHeader.classList.toggle('burger-rotate');
    asideHeader.classList.toggle('aside-active');
    shadowed.classList.toggle('shadowed-active');
    document.body.classList.toggle('stop-scroll');
  };

  const openFooterBurger = () => {
    burgerFooter.classList.toggle('burger-rotate');
    asideFooter.classList.toggle('aside-active');
    shadowed.classList.toggle('shadowed-active');
    document.body.classList.toggle('stop-scroll');
  };

  const closeBurger = () => {
    burgerHeader.classList.remove('burger-rotate');
    burgerFooter.classList.remove('burger-rotate');
    asideFooter.classList.remove('aside-active');
    asideHeader.classList.remove('aside-active');
    shadowed.classList.remove('shadowed-active');
    document.body.classList.remove('stop-scroll');
  };

  asideLinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });

  burgerFooter.addEventListener('click', openFooterBurger);
  burgerHeader.addEventListener('click', openHeaderBurger);
  shadowed.addEventListener('click', closeBurger);
};
