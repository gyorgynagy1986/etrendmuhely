// STIKY 


const sectionWorks = document.querySelector('.pillars');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.classList.add('slide-in-top');
  } else {
    nav.classList.remove('sticky');
    nav.classList.remove('slide-in-top');
  }
}


const headerObserver = new IntersectionObserver(
  stickyNav, {
    root:  null,
    threshold: 0,
    rootMargin : '-90px'
  }
);

headerObserver.observe(header);