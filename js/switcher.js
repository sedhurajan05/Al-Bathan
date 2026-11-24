/* ==============================================
   AL-BATAHAN — Language Switcher
   Premium dropdown: EN / AR + RTL/LTR + localStorage
   ============================================== */
(function () {
    'use strict';

    var STORAGE_KEY = 'albathan-lang';

    function applyLanguage(lang) {
        var html = document.documentElement;

        // Set direction + lang attribute
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }

        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(function (el) {
            var text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
            if (text !== null) el.textContent = text;
        });

        // Update trigger label
        var label = document.getElementById('langCurrentLabel');
        if (label) label.textContent = lang === 'ar' ? 'AR' : 'EN';

        // Update active state on options
        document.querySelectorAll('.lang-option').forEach(function (opt) {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Save to localStorage
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    function closeDropdown() {
        var trigger = document.getElementById('langTrigger');
        var menu    = document.getElementById('langMenu');
        if (trigger) { trigger.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
        if (menu)    menu.classList.remove('open');
    }

    function init() {
        // Load saved preference
        var saved = 'en';
        try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
        applyLanguage(saved);

        var trigger  = document.getElementById('langTrigger');
        var menu     = document.getElementById('langMenu');
        var dropdown = document.getElementById('langDropdown');

        // Open / close dropdown
        if (trigger && menu) {
            trigger.addEventListener('click', function (e) {
                e.stopPropagation();
                var isOpen = menu.classList.contains('open');
                trigger.classList.toggle('open', !isOpen);
                menu.classList.toggle('open', !isOpen);
                trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
            });
        }

        // Select language from option
        document.querySelectorAll('.lang-option').forEach(function (opt) {
            opt.addEventListener('click', function () {
                var lang = this.getAttribute('data-lang');
                applyLanguage(lang);
                closeDropdown();
            });
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (dropdown && !dropdown.contains(e.target)) {
                closeDropdown();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeDropdown();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
