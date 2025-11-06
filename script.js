// Année actuelle dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile - Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
  });
});

// Effet de scroll sur la navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animation fade-in au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer tous les éléments avec la classe fade-in
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Effet 3D sur la carte de profil
const profileCard = document.querySelector('.profile-card-3d');

if (profileCard) {
  profileCard.addEventListener('mousemove', (e) => {
    const rect = profileCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  profileCard.addEventListener('mouseleave', () => {
    profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
}