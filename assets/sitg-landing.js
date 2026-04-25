/* ============================================
   STILL IN THE GAME — Landing Page JS
   ============================================ */

(function() {
  'use strict';

  /* ---------- FAQ Toggle ---------- */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.sitg-faq-question');
    if (!btn) return;
    var item = btn.parentElement;
    var wasActive = item.classList.contains('active');
    document.querySelectorAll('.sitg-faq-item.active').forEach(function(el) {
      el.classList.remove('active');
    });
    if (!wasActive) item.classList.add('active');
  });

  /* ---------- Purchase Plan Toggle ---------- */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.sitg-pc-toggle-btn');
    if (!btn) return;
    var plan = btn.getAttribute('data-plan');
    var wrapper = btn.closest('.sitg-purchase-card');
    wrapper.querySelectorAll('.sitg-pc-toggle-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    var sellingPlanInput = document.getElementById('sitg-selling-plan-input');
    if (sellingPlanInput) {
      if (plan === 'subscribe') {
        sellingPlanInput.value = sellingPlanInput.getAttribute('data-selling-plan-id');
      } else {
        sellingPlanInput.value = '';
      }
    }

    var priceDisplay = wrapper.querySelector('.sitg-pc-price-display');
    if (!priceDisplay) return;

    if (plan === 'subscribe') {
      priceDisplay.innerHTML =
        '<div class="sitg-pc-price">' +
          '<span class="price-original">$79.99</span>' +
          '<span class="price-main">$39.99</span>' +
          '<span class="price-period">/month</span>' +
        '</div>' +
        '<div class="sitg-pc-per-day">That\u2019s <strong>$1.89/day</strong> \u2014 less than a coffee</div>';
    } else {
      priceDisplay.innerHTML =
        '<div class="sitg-pc-price">' +
          '<span class="price-main">$67.99</span>' +
          '<span class="price-period">/bottle</span>' +
        '</div>' +
        '<div class="sitg-pc-per-day">That\u2019s <strong>$2.26/day</strong> \u00b7 Subscribe to save 30%</div>';
    }
  });

  /* ---------- Scroll Reveal ---------- */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.sitg .reveal').forEach(function(el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.sitg .reveal').forEach(function(el) {
      el.classList.add('visible');
    });
  }
})();
