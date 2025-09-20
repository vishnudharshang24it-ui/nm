// Responsive mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Highlight current nav link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach((nav) => {
    nav.classList.remove('active');
    if (nav.getAttribute('href').substring(1) === current) {
      nav.classList.add('active');
    }
  });
});

// Contact form validation and status display
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name && email && message) {
    formStatus.textContent = '✅ Message sent successfully!';
    formStatus.style.color = '#00ff00';
    contactForm.reset();
  } else {
    formStatus.textContent = '❌ Please fill in all fields.';
    formStatus.style.color = '#ff4444';
  }
});