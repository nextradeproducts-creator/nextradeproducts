document.addEventListener('DOMContentLoaded', function () {

  // ==================== HERO SLIDER ====================
  var slides = document.querySelectorAll('.slide');
  var prevBtn = document.querySelector('.slider-arrow.prev');
  var nextBtn = document.querySelector('.slider-arrow.next');
  var currentSlide = 0;
  var slideInterval;

  function goToSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  if (slides.length > 1) {
    slideInterval = setInterval(nextSlide, 5000);
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        resetInterval();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        resetInterval();
      });
    }
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // ==================== MOBILE HAMBURGER MENU ====================
  var hamburger = document.getElementById('hamburger');
  var mainNav = document.querySelector('.main-nav');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  var navLinks = document.querySelectorAll('.main-nav ul li a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }

  // Mobile dropdown toggle
  var dropdownLinks = document.querySelectorAll('.has-dropdown > a');
  for (var i = 0; i < dropdownLinks.length; i++) {
    dropdownLinks[i].addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  }

  // ==================== STICKY HEADER ====================
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
      } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)';
      }
    });
  }

  // ==================== ENQUIRE POPUP ====================
  var popup = document.getElementById('enquirePopup');
  var popupClose = document.querySelector('.popup-close');

  // Open popup on any button that says ENQUIRE
  var allBtns = document.querySelectorAll('.btn-primary, .enquire-btn');
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', function (e) {
      var txt = this.textContent.trim().toUpperCase();
      if (txt.indexOf('ENQUIRE') !== -1 || txt.indexOf('ENQUIRY') !== -1 || this.classList.contains('enquire-btn')) {
        e.preventDefault();
        if (popup) {
          popup.classList.add('show');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }

  if (popupClose && popup) {
    popupClose.addEventListener('click', function () {
      popup.classList.remove('show');
      document.body.style.overflow = '';
    });
    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }

  // ==================== SMOOTH SCROLL ====================
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ==================== SCROLL REVEAL ANIMATION ====================
  var revealElements = document.querySelectorAll(
    '.category-card, .feature-card, .cert-card, .about-grid, .brand-grid, .product-card, .blog-card, .facility-card, .why-choose-item, .download-card, .office-card'
  );

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.style.opacity = '1';
        entries[i].target.style.transform = 'translateY(0)';
      }
    }
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  for (var i = 0; i < revealElements.length; i++) {
    revealElements[i].style.opacity = '0';
    revealElements[i].style.transform = 'translateY(30px)';
    revealElements[i].style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(revealElements[i]);
  }

  // ==================== SET ACTIVE NAV LINK ====================
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks2 = document.querySelectorAll('.main-nav ul li a');
  for (var i = 0; i < navLinks2.length; i++) {
    var href = navLinks2[i].getAttribute('href');
    if (href === currentPath) {
      navLinks2[i].classList.add('active');
    }
  }

});
