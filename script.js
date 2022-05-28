'use strict'

// variables
const section1 = document.querySelector('.section-introduction');
const section2 = document.querySelector('.section-things');
const section3 = document.querySelector('.section-letters');
const section4 = document.querySelector('.section-zoom');

const navbar = document.querySelector('.navbar');


const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});

// nav link scrollIntoView 

document.querySelector('.navbar-nav').addEventListener('click', function(e){

  if (e.target.classList.contains('section')){
    document.querySelector(e.target.getAttribute('href').scrollIntoView({behavior: 'smooth'}));
  }
});

// Navbar Sticky navigation
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function(e){
  window.scrollY + parseInt(window.getComputedStyle(section1, null).getPropertyValue('padding-top')) > initialCoords.top ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
  console.log(window.scrollY, initialCoords.top, parseInt(window.getComputedStyle(section1, null).getPropertyValue('padding-top')));
})