const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!expanded));
    navLinks.style.display = expanded ? 'none' : 'block';
  });
}