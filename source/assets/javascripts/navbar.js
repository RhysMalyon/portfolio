window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  const arrow = document.querySelector('.arrow-container');
  arrow.classList.toggle('hidden', window.scrollY > 0);
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((element) => element.classList.toggle('hidden', window.scrollY > 0));
});

const navigation = document.querySelector('nav');
const toggle = document.querySelector('.toggle');
const links = document.getElementById('nav-list').getElementsByTagName('a');

document.querySelector('.toggle').onclick = (event) => {
  event.currentTarget.classList.toggle('active');
  navigation.classList.toggle('active');
};

links.forEach((element) => element.addEventListener('click', () => {
  navigation.classList.toggle('active');
  toggle.classList.remove('active');
}));
