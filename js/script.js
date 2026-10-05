const mobileBtn = document.querySelector('.btn-mobile');
const navlinks = document.getElementById('nav-links');
const navMenu = document.querySelector('.nav-menu');
const icon = document.querySelector('.btn-mobile i');

function setMenu(open) {
  navlinks.classList.toggle('show', open);
  navMenu.classList.toggle('show', open);
  icon.classList.toggle('fa-xmark', open);
  icon.classList.toggle('fa-bars', !open);
  mobileBtn.setAttribute('aria-expanded', String(open));
  mobileBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

mobileBtn.addEventListener('click', () => {
  setMenu(!navlinks.classList.contains('show'));
});


navlinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) setMenu(false);
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
