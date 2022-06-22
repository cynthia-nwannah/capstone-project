const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-link');
const times = document.querySelector('.menu-closebtn');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('active');
  nav.classList.add('active');
});

times.addEventListener('click', () => {
  times.classList.remove('active');
  nav.classList.remove('active');
});
