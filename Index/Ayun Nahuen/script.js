// Bootstrap form validation
(function(){
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', e => {
        if (!form.checkValidity()) {
          e.preventDefault(); e.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a.nav-link, .navbar-brand').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 65, behavior: 'smooth' });
      }
    });
  });
  
  // Inicializar tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el =>
    new bootstrap.Tooltip(el)
  );
  
  // Lazy-load de imágenes
  document.querySelectorAll('img[data-src]').forEach(img => {
    img.loading = 'lazy';
    img.src = img.dataset.src;
  });
