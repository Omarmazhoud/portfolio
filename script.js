// Small helpers: year, nav toggle, fade-in
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

// Smooth close nav when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
  });
});

// Intersection Observer pour fade-in
const faders = document.querySelectorAll('.fade-in');
const obsOptions = { threshold: 0.25 };

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, obsOptions);

faders.forEach(f => observer.observe(f));
