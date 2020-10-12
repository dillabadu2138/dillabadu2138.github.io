// Make navbar transparent when it is on the top.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});


// Scroll down to section when navbar menu item is clicked.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});


// Handle click on navbar toggle button for small screen.
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});


// Handle click on "Contact Me" button
const contactMeButton = document.querySelector('.home__contact');
contactMeButton.addEventListener('click', () => {
  const scrollTo = document.querySelector('#contact'); 
  scrollTo.scrollIntoView({ behavior: "smooth" });
});


// Make home section transparent as the window scrolls down.
const home = document.querySelector('#home .section__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Filter out projects
const categoryBtnContainer = document.querySelector(".work__categories");
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.work__projects')
categoryBtnContainer.addEventListener('click', (e) => {
  const type = e.target.dataset.type;
  if (type === undefined) {
    return;
  }

  // Remove selection from the previous item.
	const active = document.querySelector('.category__btn.active');
	active.classList.remove('active');
	// Add selection to the current item.
	e.target.classList.add('active');

  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach(project => {
      if (type === "*" || type === project.dataset.type) {
        project.classList.remove('hide');
      } else {
        project.classList.add('hide');
      }
    });
    projectsContainer.classList.remove('anim-out');
  }, 300);
});