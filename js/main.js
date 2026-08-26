// Mad House Machines - Main JS

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Machine filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const machineCards = document.querySelectorAll('.machine-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      machineCards.forEach(card => {
        if (filter === 'all' || card.dataset.supplier === filter || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // RFQ form handling (client-side demo)
  const form = document.getElementById('rfq-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate submission (replace with real backend / Formspree / Netlify Forms later)
      setTimeout(() => {
        alert('Thank you! Your Request for Quote has been received. We will contact you shortly from Corona, CA.');
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
      }, 900);
    });
  }

  // Set active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});
