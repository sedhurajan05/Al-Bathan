/* ==============================================
   AL-BATAHAN — Core JavaScript
   Enhanced: Loader, Glass Navbar, Lightbox,
   Section Tags, Throttle, Scroll-to-Top, Filter,
   Form Validation
   ============================================== */
(function () {
    'use strict';

    /* ==============================
       THROTTLE HELPER
       ============================== */
    function throttle(fn, delay) {
        var last = 0;
        return function () {
            var now = Date.now();
            if (now - last >= delay) { last = now; fn.apply(this, arguments); }
        };
    }

    document.addEventListener('DOMContentLoaded', function () {

        /* ==============================
           PAGE LOADER
           ============================== */
        var loader = document.getElementById('pageLoader');
        function hideLoader() {
            if (!loader || loader.classList.contains('hidden')) return;
            loader.classList.add('hidden');
        }
        if (loader) {
            // Detect reload (F5) vs navigation (link click)
            var navEntry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
            var isReload  = navEntry
                ? navEntry.type === 'reload'
                : (performance.navigation && performance.navigation.type === 1);

            if (isReload) {
                // Refresh — show loader for 2 seconds
                window.addEventListener('load', function () { setTimeout(hideLoader, 300); });
                setTimeout(hideLoader, 2000);
            } else {
                // Navigation between pages — hide instantly
                loader.style.display = 'none';
            }
        }

        /* ==============================
           NAVBAR — Hamburger
           ============================== */
        var hamburger  = document.getElementById('hamburger');
        var mobileMenu = document.getElementById('mobileMenu');
        var mobileClose = document.getElementById('mobileClose');

        function openMenu() {
            if (!hamburger || !mobileMenu) return;
            hamburger.classList.add('open');
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function closeMenu() {
            if (!hamburger || !mobileMenu) return;
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
        if (hamburger) hamburger.addEventListener('click', function() { mobileMenu && mobileMenu.classList.contains('open') ? closeMenu() : openMenu(); });
        if (mobileClose) mobileClose.addEventListener('click', closeMenu);
        if (mobileMenu) {
            mobileMenu.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', closeMenu);
            });
        }
        document.addEventListener('click', function (e) {
            if (mobileMenu && mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        /* ==============================
           NAVBAR — Glass on Scroll
           ============================== */
        var navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', throttle(function () {
                navbar.classList.toggle('scrolled', window.scrollY > 60);
            }, 80), { passive: true });
        }

        /* ==============================
           SCROLL TO TOP
           ============================== */
        var scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            window.addEventListener('scroll', throttle(function () {
                scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
            }, 100), { passive: true });
            scrollTopBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        /* ==============================
           HERO SWIPER
           ============================== */
        if (typeof Swiper !== 'undefined' && document.querySelector('.hero-swiper')) {
            new Swiper('.hero-swiper', {
                loop: true,
                autoplay: { delay: 4500, disableOnInteraction: false },
                pagination: { el: '.swiper-pagination', clickable: true },
                effect: 'fade',
                fadeEffect: { crossFade: true },
                speed: 900
            });
        }

        /* ==============================
           SECTION TAGS — inject before h2.section-title
           ============================== */
        var sectionTagMap = [
            // Home page
            { sel: '.about-snapshot-text h2',
              en: 'WHO WE ARE',
              ar: '\u0645\u0646 \u0646\u062D\u0646' },
            { sel: '.services-section .section-title',
              en: 'WHAT WE OFFER',
              ar: '\u0645\u0627 \u0646\u0642\u062F\u0645\u0647' },
            { sel: '.projects-preview-section .section-title',
              en: 'OUR PORTFOLIO',
              ar: '\u0623\u0639\u0645\u0627\u0644\u0646\u0627' },
            { sel: '.why-us-section .section-title',
              en: 'OUR PROMISE',
              ar: '\u0648\u0639\u062F\u0646\u0627 \u0644\u0643' },
            { sel: '.clients-section .section-title',
              en: 'WHO TRUSTS US',
              ar: '\u0645\u0646 \u064A\u062B\u0642 \u0628\u0646\u0627' },
            // About page
            { sel: '.overview-section .section-title',
              en: 'OUR STORY',
              ar: '\u0642\u0635\u062A\u0646\u0627' },
            { sel: '.ceo-section .section-title',
              en: 'FROM THE OWNER',
              ar: '\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0627\u0644\u0643' },
            { sel: '.values-section .section-title',
              en: 'WHAT DRIVES US',
              ar: '\u0645\u0627 \u064A\u062D\u0631\u0643\u0646\u0627' },
            // Services page
            { sel: '.services-intro .section-title',
              en: 'OUR EXPERTISE',
              ar: '\u062E\u0628\u0631\u062A\u0646\u0627' },
            // Contact page
            { sel: '.contact-info-section .section-title',
              en: 'GET IN TOUCH',
              ar: '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627' }
        ];

        sectionTagMap.forEach(function (cfg) {
            var el = document.querySelector(cfg.sel);
            if (!el) return;
            var tag = document.createElement('span');
            tag.className = 'section-tag';
            tag.setAttribute('data-en', cfg.en);
            tag.setAttribute('data-ar', cfg.ar);
            tag.textContent = cfg.en;
            el.parentNode.insertBefore(tag, el);
        });

        /* ==============================
           PROJECTS FILTER
           ============================== */
        var filterBtns   = document.querySelectorAll('.filter-btn');
        var projectCards = document.querySelectorAll('.project-card-full');

        if (filterBtns.length > 0) {
            filterBtns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    filterBtns.forEach(function (b) { b.classList.remove('active'); });
                    this.classList.add('active');
                    var filter = this.getAttribute('data-filter');
                    projectCards.forEach(function (card) {
                        var cat = card.getAttribute('data-category');
                        var show = filter === 'all' || cat === filter;
                        card.style.display = show ? 'block' : 'none';
                        if (show) card.style.animation = 'fadeInUp 0.4s ease both';
                    });
                });
            });
        }

        /* ==============================
           LIGHTBOX
           ============================== */
        var lightbox = document.getElementById('lightbox');
        var lbImages = [];
        var lbIndex  = 0;

        // Build lightbox source from project cards
        document.querySelectorAll('.project-card, .project-card-full').forEach(function (card, idx) {
            var bgEl  = card.querySelector('[class*="proj-bg"]');
            var title = card.querySelector('h3');
            var catEl = card.querySelector('.project-category');
            if (!bgEl) return;

            lbImages.push({
                bg    : bgEl.className,
                icon  : bgEl.querySelector('i') ? bgEl.querySelector('i').className : '',
                title : title ? title.getAttribute('data-en') || title.textContent.trim() : 'Project',
                cat   : catEl ? catEl.getAttribute('data-en') || catEl.textContent.trim() : ''
            });

            card.style.cursor = 'pointer';
            var realIdx = lbImages.length - 1;
            card.addEventListener('click', function (e) {
                if (e.target.closest('a')) return; // don't trigger on CTA links
                openLightbox(realIdx);
            });
        });

        function openLightbox(idx) {
            if (!lightbox || !lbImages.length) return;
            lbIndex = idx;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            if (!lightbox) return;
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        function updateLightbox() {
            var img     = lbImages[lbIndex];
            if (!img) return;
            var visual  = document.getElementById('lbVisual');
            var titleEl = document.getElementById('lbTitle');
            var catEl   = document.getElementById('lbCat');
            var counter = document.getElementById('lbCounter');
            if (visual) {
                visual.className = 'lb-visual ' + img.bg.split(' ').filter(function(c){ return c.indexOf('proj-bg') >= 0; }).join(' ');
                visual.innerHTML = '<i class="' + img.icon + '" style="font-size:4rem;color:rgba(255,255,255,0.3);"></i>';
            }
            if (titleEl) titleEl.textContent = img.title;
            if (catEl)   catEl.textContent   = img.cat;
            if (counter) counter.textContent = (lbIndex + 1) + ' / ' + lbImages.length;
        }

        if (lightbox) {
            var lbClose = document.getElementById('lbClose');
            var lbPrev  = document.getElementById('lbPrev');
            var lbNext  = document.getElementById('lbNext');

            if (lbClose) lbClose.addEventListener('click', closeLightbox);
            if (lbPrev)  lbPrev.addEventListener('click', function () {
                lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
                updateLightbox();
            });
            if (lbNext)  lbNext.addEventListener('click', function () {
                lbIndex = (lbIndex + 1) % lbImages.length;
                updateLightbox();
            });

            // Click outside
            lightbox.addEventListener('click', function (e) {
                if (e.target === lightbox) closeLightbox();
            });

            // Keyboard nav
            document.addEventListener('keydown', function (e) {
                if (!lightbox.classList.contains('active')) return;
                if (e.key === 'Escape')     closeLightbox();
                if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; updateLightbox(); }
                if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbImages.length; updateLightbox(); }
            });

            // Touch swipe
            var swipeStartX = 0;
            lightbox.addEventListener('touchstart', function (e) {
                swipeStartX = e.touches[0].clientX;
            }, { passive: true });
            lightbox.addEventListener('touchend', function (e) {
                var diff = swipeStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) < 40) return;
                if (diff > 0) { lbIndex = (lbIndex + 1) % lbImages.length; }
                else          { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; }
                updateLightbox();
            }, { passive: true });
        }

        /* ---- Contact form submission via Web3Forms ---- */
        var contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                var valid = true;
                var lang  = document.documentElement.getAttribute('lang') || 'en';

                function validateField(id, rule, msgEn, msgAr) {
                    var group = document.getElementById(id + 'Group');
                    var input = document.getElementById(id);
                    var errEl = document.getElementById(id + 'Error');
                    if (!input || !group || !errEl) return true;
                    var ok = rule(input.value.trim());
                    group.classList.toggle('has-error', !ok);
                    errEl.textContent = lang === 'ar' ? msgAr : msgEn;
                    return ok;
                }

                valid = validateField('fname',    function (v) { return v.length >= 2; },
                    'Please enter your full name.',
                    '\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0643\u0627\u0645\u0644.') && valid;
                valid = validateField('femail',   function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },
                    'Please enter a valid email address.',
                    '\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D.') && valid;
                valid = validateField('fphone',   function (v) { return v.length >= 7; },
                    'Please enter a valid phone number.',
                    '\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0635\u062D\u064A\u062D.') && valid;
                valid = validateField('fsubject',  function (v) { return v.length >= 3; },
                    'Please enter a subject.',
                    '\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0645\u0648\u0636\u0648\u0639.') && valid;
                valid = validateField('fmessage', function (v) { return v.length >= 10; },
                    'Please enter a message (min 10 characters).',
                    '\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0631\u0633\u0627\u0644\u0629 (10 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644).') && valid;

                if (!valid) return;

                // Submit via Web3Forms
                var submitBtn = contactForm.querySelector('[type="submit"]');
                var successEl = document.getElementById('formSuccess');
                if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.7'; }

                var data = new FormData(contactForm);
                // Web3Forms access key — replace YOUR_ACCESS_KEY with key from web3forms.com (free)
                data.append('access_key', 'YOUR_ACCESS_KEY');
                data.append('subject', 'New Enquiry — Al-Batahan Website');
                data.append('from_name', 'Al-Batahan Website');

                fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
                    .then(function(res) { return res.json(); })
                    .then(function(json) {
                        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
                        if (json.success) {
                            contactForm.reset();
                            if (successEl) {
                                successEl.classList.add('show');
                                successEl.innerHTML = '<i class="fas fa-check-circle"></i> ' +
                                    (lang === 'ar'
                                        ? '\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643 \u0628\u0646\u062C\u0627\u062D! \u0633\u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u064B\u0627.'
                                        : "Your message was sent successfully! We\u2019ll be in touch soon.");
                                setTimeout(function () { successEl.classList.remove('show'); }, 6000);
                            }
                        } else {
                            if (successEl) {
                                successEl.classList.add('show');
                                successEl.style.color = '#c0392b';
                                successEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' +
                                    (lang === 'ar' ? '\u062D\u062F\u062B \u062E\u0637\u0623. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.' : 'Something went wrong. Please try again.');
                            }
                        }
                    })
                    .catch(function() {
                        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
                        if (successEl) {
                            successEl.classList.add('show');
                            successEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Network error. Please try again.';
                        }
                    });
            });

            contactForm.querySelectorAll('input, textarea').forEach(function (el) {
                el.addEventListener('input', function () {
                    var group = this.closest('.form-group');
                    if (group) group.classList.remove('has-error');
                });
            });
        }

        /* ==============================
           FADE-IN KEYFRAME (injected once)
           ============================== */
        if (!document.getElementById('albathan-kf')) {
            var kf = document.createElement('style');
            kf.id  = 'albathan-kf';
            kf.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}';
            document.head.appendChild(kf);
        }

        /* ==============================
           PAUSE ANIMATIONS ON TAB HIDDEN
           ============================== */
        document.addEventListener('visibilitychange', function () {
            var swiperEl = document.querySelector('.hero-swiper');
            if (!swiperEl || !swiperEl.swiper) return;
            if (document.hidden) swiperEl.swiper.autoplay.stop();
            else swiperEl.swiper.autoplay.start();
        });

    }); // DOMContentLoaded

})();
