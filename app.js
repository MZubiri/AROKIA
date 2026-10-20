/* ============================================
   AROKIA — Ingeniería Inmobiliaria S.A.C.
   Interactive Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ========== PRELOADER ==========
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        const hero = document.querySelector('.hero');
        if (hero) hero.classList.add('visible');
      }, 800);
    });

    // Fallback: hide preloader after 3s max
    setTimeout(() => {
      preloader.classList.add('hidden');
      const hero = document.querySelector('.hero');
      if (hero) hero.classList.add('visible');
    }, 3000);
  }

  // ========== NAVBAR SCROLL EFFECT ==========
  const navbar = document.getElementById('navbar');
  const navLogoImg = document.getElementById('nav-logo-img');
  const footerLogoImg = document.getElementById('footer-logo-img');

  const updateNavOnScroll = () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
  };

  window.addEventListener('scroll', updateNavOnScroll, { passive: true });
  updateNavOnScroll();

  // ========== DARK / LIGHT THEME TOGGLE ==========
  const themeToggle = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('theme-icon-sun');
  const iconMoon = document.getElementById('theme-icon-moon');
  const html = document.documentElement;

  // Check saved preference
  const savedTheme = localStorage.getItem('arokia-theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
    updateThemeIcons('dark');
  }

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('arokia-theme', next);
    updateThemeIcons(next);
  });

  function updateThemeIcons(theme) {
    if (theme === 'dark') {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  }

  // ========== MOBILE HAMBURGER MENU ==========
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    if (navbar) navbar.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      if (navbar) navbar.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });

  // ========== SCROLL SPY ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link[data-section]');

  const scrollSpy = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinksAll.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  };

  window.addEventListener('scroll', scrollSpy, { passive: true });
  scrollSpy();

  // ========== CAROUSEL ==========
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (track && prevBtn && nextBtn) {
    const getScrollAmount = () => {
      const card = track.querySelector('.project-card');
      if (!card) return 300;
      return card.offsetWidth + 24; // card width + gap
    };

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        }
      }
    }, { passive: true });
  }

  // ========== SCROLL REVEAL ANIMATION ==========
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ========== ANIMATED COUNTERS ==========
  const counters = document.querySelectorAll('[data-target]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(element, target, suffix) {
    const duration = 2000;
    const start = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.round(easedProgress * target);

      if (target >= 1000) {
        element.textContent = current.toLocaleString('es-PE') + suffix;
      } else {
        element.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ========== CONTACT FORM ==========
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      // Basic validation
      if (!name || !email || !message) {
        showFormMessage('Por favor completa todos los campos requeridos.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showFormMessage('Por favor ingresa un correo electrónico válido.', 'error');
        return;
      }

      // Simulate submission
      const submitBtn = form.querySelector('.form-submit');
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showFormMessage('¡Expediente recibido con éxito! La Gerencia Técnica de AROKIA revisará la información para emitir la propuesta técnico-económica.', 'success');
        form.reset();
        submitBtn.textContent = 'Enviar a Mesa de Licitaciones de AROKIA →';
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = 'form-message ' + type;

    setTimeout(() => {
      formMessage.className = 'form-message';
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== PARALLAX HERO (subtle) ==========
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
      }
    }, { passive: true });
  }

  // ========== SELECTOR DE MODELOS DE DISEÑO (4 OPCIONES) ==========
  const switcherBtns = document.querySelectorAll('.switcher-btn[data-model]');
  const modalBocetos = document.getElementById('modal-bocetos');
  const btnVerBocetos = document.getElementById('btn-ver-bocetos');
  const btnCloseBocetos = document.getElementById('modal-bocetos-close');
  const bocetoCards = document.querySelectorAll('.boceto-card');

  window.setArokiaModel = function(modelName) {
    if (!modelName) modelName = 'monolito';
    document.documentElement.setAttribute('data-design-model', modelName);
    document.body.setAttribute('data-design-model', modelName);
    localStorage.setItem('arokia-design-model', modelName);

    // Actualizar botones de la barra superior
    switcherBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.model === modelName);
    });

    // En modelos oscuros (monolito y split) asegurar tema dark; en suizo y corporativo light
    const targetTheme = (modelName === 'monolito' || modelName === 'split') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
    if (typeof updateThemeIcons === 'function') {
      updateThemeIcons(targetTheme);
    }
  };

  // Asignar eventos a los botones del switcher
  switcherBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const model = btn.dataset.model;
      window.setArokiaModel(model);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Modal de Bocetos de Diseño
  if (btnVerBocetos && modalBocetos) {
    btnVerBocetos.addEventListener('click', (e) => {
      e.preventDefault();
      modalBocetos.style.display = 'flex';
    });

    if (btnCloseBocetos) {
      btnCloseBocetos.addEventListener('click', () => {
        modalBocetos.style.display = 'none';
      });
    }

    modalBocetos.addEventListener('click', (e) => {
      if (e.target === modalBocetos) {
        modalBocetos.style.display = 'none';
      }
    });

    bocetoCards.forEach(card => {
      card.addEventListener('click', () => {
        const targetModel = card.dataset.apply;
        if (targetModel) {
          window.setArokiaModel(targetModel);
          modalBocetos.style.display = 'none';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }

  // Inicializar modelo guardado (por defecto Monolito)
  const savedModel = localStorage.getItem('arokia-design-model') || 'monolito';
  window.setArokiaModel(savedModel);
});

