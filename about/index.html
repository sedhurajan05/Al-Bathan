/* ==============================================
   AL-BATAHAN — Scroll Animations & Counters
   Uses IntersectionObserver API
   ============================================== */
(function () {
    'use strict';

    /* ---- Animated Counter ---- */
    function animateCounter(el, target, duration) {
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out quad
            var eased = 1 - (1 - progress) * (1 - progress);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    /* ---- Observe counter elements ---- */
    var counters = document.querySelectorAll('.counter');
    if (counters.length > 0 && 'IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    var target = parseInt(entry.target.getAttribute('data-target'), 10);
                    animateCounter(entry.target, target, 1600);
                }
            });
        }, { threshold: 0.4 });

        counters.forEach(function (c) { counterObserver.observe(c); });
    } else {
        // Fallback: show values immediately
        counters.forEach(function (c) {
            c.textContent = c.getAttribute('data-target');
        });
    }

    /* ---- Fade-in on scroll ---- */
    var fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        fadeEls.forEach(function (el) { fadeObserver.observe(el); });
    } else {
        fadeEls.forEach(function (el) { el.classList.add('visible'); });
    }

})();

/* ---- FADE-UP SCROLL ANIMATION ---- */
(function() {
    var isMobile = window.innerWidth <= 768;

    var fadeTargets = [
        '.service-card','.project-card','.project-card-full',
        '.why-card','.value-card','.client-logo',
        '.service-detail-card','.contact-info-card',
        '.ceo-card','.vm-card','.about-snapshot-content'
    ].join(',');

    var fadeEls = document.querySelectorAll(fadeTargets);

    if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
        var fadeObs = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObs.unobserve(entry.target);
                }
            });
        }, {
            threshold: isMobile ? 0.05 : 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        function setupFade() {
            fadeEls.forEach(function(el) {
                el.classList.add('fade-up');
                fadeObs.observe(el);
            });
        }

        if ('requestIdleCallback' in window) {
            requestIdleCallback(setupFade, { timeout: 1500 });
        } else {
            setTimeout(setupFade, 150);
        }
    }
})();
