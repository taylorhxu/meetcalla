/* ═══════════════════════════════════════
   CALLA — Main JavaScript
   ═══════════════════════════════════════ */

// ── Scroll-triggered fade-ins
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.07 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── Mobile burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── Seamless ticker duplication
const ticker = document.getElementById('ticker');
if (ticker) ticker.innerHTML += ticker.innerHTML;

// ── Waitlist form handler
function handleSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput');
  const success = document.getElementById('formSuccess');
  if (email && success && email.value) {
    email.parentElement.style.display = 'none';
    success.style.display = 'block';
    // In production: POST to Mailchimp, Formspree, ConvertKit, etc.
    console.log('Calla waitlist signup:', email.value);
  }
}

// ── Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
