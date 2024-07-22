const humburegerMenu = document.getElementById('humburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeList = document.getElementById('close-list');

humburegerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  closeList.classList.toggle('hidden');
  humburegerMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((link) =>
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    closeList.classList.toggle('hidden');
    humburegerMenu.classList.toggle('hidden');
  }
  ));

closeList.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  closeList.classList.toggle('hidden');
  humburegerMenu.classList.toggle('hidden');
});

const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav ul li a');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  sections.forEach(section => {
    if (isInViewport(section)) {
      const sectionId = section.id;
      menuLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`nav > ul > li > a[href="#${sectionId}"]`).classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);
