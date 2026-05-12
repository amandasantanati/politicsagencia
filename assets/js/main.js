'use strict';

/* ── Mobile menu ── */
const hbg     = document.getElementById('hbg');
const mobMenu = document.getElementById('mobMenu');

hbg.addEventListener('click', () => {
  const open = mobMenu.classList.toggle('open');
  hbg.setAttribute('aria-expanded', String(open));
});

function closeMobileMenu() {
  mobMenu.classList.remove('open');
  hbg.setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ── Nav shadow on scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').style.boxShadow =
    window.scrollY > 20
      ? '0 4px 28px rgba(0,0,0,.40)'
      : '0 2px 20px rgba(0,0,0,.30)';
}, { passive: true });

/* ── Form submission → WhatsApp ── */
function submitForm(e) {
  e.preventDefault();

  const nome     = document.getElementById('fn').value.trim();
  const email    = document.getElementById('fe').value.trim();
  const cargo    = document.getElementById('fc').value || 'Não informado';
  const mensagem = document.getElementById('fm').value.trim();

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    document.getElementById('fe').focus();
    return;
  }

  const texto = [
    'Olá, Politics Agência!',
    '',
    `*Nome:* ${nome}`,
    `*E-mail:* ${email}`,
    `*Cargo / Campanha:* ${cargo}`,
    mensagem ? `*Mensagem:* ${mensagem}` : '',
  ].filter(Boolean).join('\n');

  const whatsappURL = 'https://wa.me/5579991756666?text=' + encodeURIComponent(texto);
  window.open(whatsappURL, '_blank', 'noopener,noreferrer');

  const btn = document.getElementById('submitBtn');
  const original = btn.textContent;
  btn.textContent = '✓ Redirecionando para WhatsApp';
  btn.style.background = '#27AE60';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    e.target.reset();
  }, 4000);
}

document.getElementById('contactForm').addEventListener('submit', submitForm);

/* ── Scroll-reveal (Intersection Observer) ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
