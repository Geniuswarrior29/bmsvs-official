(function() {
    // 0. Inject premium typography (Marcellus & Poppins)
    if (!document.getElementById('premium-fonts')) {
        const fontLink = document.createElement('link');
        fontLink.id = 'premium-fonts';
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+Devanagari&family=Poppins:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(fontLink);
    }

    // 1. Instantly check localStorage and apply theme class to prevent FOUC (Flash of Unstyled Content)
    const savedTheme = localStorage.getItem('theme-preference') || 'default';
    if (savedTheme === 'light') {
        document.documentElement.classList.add('theme-light');
    } else if (savedTheme === 'dark') {
        document.documentElement.classList.add('theme-dark');
    }

    // 2. Define theme styling overrides (scoped inside @media screen so printing is never impacted)
    const themeStyles = `
    @media screen {
        /* Global premium typography overrides */
        body, 
        input, 
        textarea, 
        select, 
        button {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }

        .serif-font,
        .serif-title,
        h1, 
        h2, 
        h3,
        h4,
        h5,
        h6,
        .logo-text-main {
            font-family: 'Marcellus', 'Marcellus Devanagari', 'Merriweather', serif !important;
        }

        /* Transition utility for smooth theme changing animation */
        .theme-transition,
        .theme-transition *,
        .theme-transition *::before,
        .theme-transition *::after {
            transition: background 0.25s ease, 
                        background-color 0.25s ease, 
                        border-color 0.25s ease, 
                        color 0.25s ease, 
                        fill 0.25s ease, 
                        box-shadow 0.25s ease !important;
        }

        /* ==========================================================================
           LIGHT THEME OVERRIDES (White and Aesthetic Blue Modern Feel)
           ========================================================================== */
        html.theme-light body {
            background-color: #f8fafc !important;
            color: #1e293b !important;
        }

        /* Background overrides */
        html.theme-light .bg-\\[\\#fdfbfc\\],
        html.theme-light .bg-\\[\\#fffdf9\\],
        html.theme-light .bg-\\[\\#faf9fa\\],
        html.theme-light .bg-white {
            background-color: #ffffff !important;
        }
        html.theme-light .bg-slate-50,
        html.theme-light .bg-slate-50\\/50 {
            background-color: #f1f5f9 !important;
        }
        
        /* Body gradient in Light Mode (Login / Master Admin pages) */
        html.theme-light body.bg-gradient-to-br {
            background: linear-gradient(to bottom right, rgba(30, 64, 175, 0.04), #f8fafc, #ffffff) !important;
        }

        /* Primary Brand Color: Maroon -> Aesthetic Modern Blue (#1e40af) */
        html.theme-light .bg-\\[\\#5c061d\\] {
            background-color: #1e40af !important;
        }
        html.theme-light .hover\\:bg-\\[\\#4a0416\\]:hover {
            background-color: #1d4ed8 !important;
        }
        html.theme-light .text-\\[\\#5c061d\\] {
            color: #1e40af !important;
        }
        html.theme-light .border-\\[\\#5c061d\\] {
            border-color: #1e40af !important;
        }
        html.theme-light .hover\\:text-\\[\\#5c061d\\]:hover {
            color: #1e40af !important;
        }
        html.theme-light .border-maroon-800 {
            border-color: #1d4ed8 !important;
        }

        /* Specific header controls */
        html.theme-light header.bg-\\[\\#5c061d\\] {
            background-color: #1e40af !important;
            color: #ffffff !important;
        }
        html.theme-light div.bg-\\[\\#5c061d\\].sticky {
            background-color: #1e3a8a !important;
            border-color: #1d4ed8 !important;
        }

        /* Soft red alert/badge/icon backgrounds bg-rose-50 -> soft blue bg-blue-50 */
        html.theme-light .bg-rose-50 {
            background-color: #eff6ff !important;
            color: #1e40af !important;
        }
        html.theme-light .bg-rose-100 {
            background-color: #dbeafe !important;
            color: #1e40af !important;
        }

        /* Border Overrides */
        html.theme-light .border-amber-100 {
            border-color: #dbeafe !important;
        }
        html.theme-light .border-amber-200 {
            border-color: #bfdbfe !important;
        }
        html.theme-light .border-slate-100,
        html.theme-light .border-slate-200,
        html.theme-light .border-slate-200\\/80 {
            border-color: #e2e8f0 !important;
        }

        /* Text and Amber overrides */
        html.theme-light .text-amber-100 {
            color: #eff6ff !important;
        }
        html.theme-light .text-amber-100\\/90 {
            color: rgba(239, 246, 255, 0.9) !important;
        }
        html.theme-light .text-amber-400 {
            color: #2563eb !important;
        }
        html.theme-light .text-amber-600 {
            color: #1d4ed8 !important;
        }
        html.theme-light .bg-amber-400 {
            background-color: #2563eb !important;
            color: #ffffff !important;
        }
        html.theme-light .hover\\:bg-amber-500:hover {
            background-color: #1d4ed8 !important;
        }

        /* Background Gradient Stops */
        html.theme-light .from-\\[\\#5c061d\\]\\/5 {
            --tw-gradient-from: rgba(30, 64, 175, 0.05) var(--tw-gradient-to-position) !important;
            --tw-gradient-to: rgba(30, 64, 175, 0) var(--tw-gradient-to-position) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        html.theme-light .from-\\[\\#5c061d\\] {
            --tw-gradient-from: #1e40af var(--tw-gradient-to-position) !important;
            --tw-gradient-to: rgba(30, 64, 175, 0) var(--tw-gradient-to-position) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        html.theme-light .to-\\[\\#400210\\] {
            --tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position) !important;
        }

        /* Interactive overlays & active navigation styles */
        html.theme-light nav a.hover\\:text-\\[\\#5c061d\\]:hover {
            color: #1e40af !important;
        }

        /* ── CSS Variables overrides (e.g. for apply.html custom system) ── */
        html.theme-light {
            --maroon: #1e40af !important;
            --maroon-dark: #1e3a8a !important;
            --maroon-light: #2563eb !important;
            --gold: #0284c7 !important;
            --gold-light: #38bdf8 !important;
            --cream: #f8fafc !important;
            --bg: #f1f5f9 !important;
            --white: #ffffff !important;
            --text: #0f172a !important;
            --text-mid: #334155 !important;
            --text-muted: #64748b !important;
            --border: #cbd5e1 !important;
            --border-light: #e2e8f0 !important;
        }
        /* Blobs in apply.html */
        html.theme-light .blob1 {
            background: radial-gradient(circle, rgba(30, 64, 175, 0.08), transparent 70%) !important;
        }
        html.theme-light .blob2 {
            background: radial-gradient(circle, rgba(56, 189, 248, 0.07), transparent 70%) !important;
        }
        html.theme-light .blob3 {
            background: radial-gradient(circle, rgba(30, 64, 175, 0.05), transparent 70%) !important;
        }


        /* ==========================================================================
           DARK THEME OVERRIDES (Facebook Soothing Dark Mode: Grey/Blue)
           ========================================================================== */
        html.theme-dark body {
            background-color: #18191a !important;
            color: #e4e6eb !important;
        }

        /* Background overrides */
        html.theme-dark .bg-\\[\\#fdfbfc\\],
        html.theme-dark .bg-\\[\\#fffdf9\\],
        html.theme-dark .bg-\\[\\#faf9fa\\],
        html.theme-dark .bg-white,
        html.theme-dark .bg-white\\/95 {
            background-color: #242526 !important;
        }
        html.theme-dark .bg-slate-50,
        html.theme-dark .bg-slate-50\\/50 {
            background-color: #3a3b3c !important;
        }

        /* Body gradient in Dark Mode (Login / Master Admin pages) */
        html.theme-dark body.bg-gradient-to-br {
            background: linear-gradient(to bottom right, #18191a, #242526) !important;
        }

        /* Main headers overrides */
        html.theme-dark header,
        html.theme-dark header.bg-\\[\\#5c061d\\] {
            background-color: rgba(36, 37, 38, 0.95) !important;
            border-color: #2f3031 !important;
            color: #e4e6eb !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
        html.theme-dark div.bg-\\[\\#5c061d\\].sticky {
            background-color: #242526 !important;
            border-color: #2f3031 !important;
        }

        /* Primary Brand Color -> Soothing Facebook Accent Blue (#2d88ff) */
        html.theme-dark .bg-\\[\\#5c061d\\] {
            background-color: #2d88ff !important;
            color: #ffffff !important;
        }
        html.theme-dark .hover\\:bg-\\[\\#4a0416\\]:hover {
            background-color: #1877f2 !important;
        }
        html.theme-dark .text-\\[\\#5c061d\\] {
            color: #2d88ff !important;
        }
        html.theme-dark .border-\\[\\#5c061d\\] {
            border-color: #2d88ff !important;
        }
        html.theme-dark .hover\\:text-\\[\\#5c061d\\]:hover {
            color: #2d88ff !important;
        }
        html.theme-dark .border-maroon-800 {
            border-color: #2f3031 !important;
        }

        /* Soft red badge/badge elements -> dark slate / blue badges */
        html.theme-dark .bg-rose-50 {
            background-color: #2a2b2c !important;
            color: #2d88ff !important;
            border-color: #3e4042 !important;
        }
        html.theme-dark .bg-rose-100 {
            background-color: rgba(45, 136, 255, 0.1) !important;
            color: #60a5fa !important;
        }

        /* Section causes container (accomplishments) */
        html.theme-dark section\\#causes.bg-\\[\\#5c061d\\] {
            background-color: #242526 !important;
            border-top: 1px solid #2f3031 !important;
            border-bottom: 1px solid #2f3031 !important;
        }

        /* Texts and Font colors */
        html.theme-dark .text-slate-900,
        html.theme-dark .text-slate-800,
        html.theme-dark .text-slate-700 {
            color: #e4e6eb !important;
        }
        html.theme-dark .text-slate-600,
        html.theme-dark .text-slate-500 {
            color: #b0b3b8 !important;
        }
        html.theme-dark .text-slate-400 {
            color: #a0a3a8 !important;
        }

        /* Amber and yellow overrides */
        html.theme-dark .text-amber-100 {
            color: #e4e6eb !important;
        }
        html.theme-dark .text-amber-100\\/90 {
            color: rgba(228, 230, 235, 0.9) !important;
        }
        html.theme-dark .text-amber-400 {
            color: #2d88ff !important;
        }
        html.theme-dark .text-amber-600 {
            color: #60a5fa !important;
        }
        html.theme-dark .bg-amber-400 {
            background-color: #2d88ff !important;
            color: #ffffff !important;
        }
        html.theme-dark .hover\\:bg-amber-500:hover {
            background-color: #1877f2 !important;
        }

        /* Border Overrides */
        html.theme-dark .border-amber-100,
        html.theme-dark .border-amber-200 {
            border-color: #3e4042 !important;
        }
        html.theme-dark .border-slate-100,
        html.theme-dark .border-slate-200,
        html.theme-dark .border-slate-200\\/80,
        html.theme-dark hr {
            border-color: #2f3031 !important;
        }

        /* Form elements input controls */
        html.theme-dark input,
        html.theme-dark textarea,
        html.theme-dark select {
            background-color: #3a3b3c !important;
            color: #e4e6eb !important;
            border-color: #4e4f50 !important;
        }
        html.theme-dark input::placeholder,
        html.theme-dark textarea::placeholder {
            color: #a0a3a8 !important;
        }
        html.theme-dark select option {
            background-color: #242526 !important;
            color: #e4e6eb !important;
        }

        /* Background Gradient Stops */
        html.theme-dark .from-\\[\\#5c061d\\]\\/5 {
            --tw-gradient-from: rgba(45, 136, 255, 0.05) var(--tw-gradient-to-position) !important;
            --tw-gradient-to: rgba(45, 136, 255, 0) var(--tw-gradient-to-position) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        html.theme-dark .from-\\[\\#5c061d\\] {
            --tw-gradient-from: #242526 var(--tw-gradient-to-position) !important;
            --tw-gradient-to: rgba(36, 37, 38, 0) var(--tw-gradient-to-position) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        html.theme-dark .to-\\[\\#400210\\] {
            --tw-gradient-to: #18191a var(--tw-gradient-to-position) !important;
        }

        /* Modals & Dropdowns */
        html.theme-dark #loginModal > div,
        html.theme-dark #donateModal > div {
            background-color: #242526 !important;
            border: 1px solid #3e4042 !important;
            color: #e4e6eb !important;
        }
        html.theme-dark #loginModal button,
        html.theme-dark #donateModal button {
            color: #e4e6eb !important;
        }

        /* CSS Variables overrides (e.g. for apply.html custom system) */
        html.theme-dark {
            --maroon: #2d88ff !important;
            --maroon-dark: #60a5fa !important;
            --maroon-light: #1877f2 !important;
            --gold: #2d88ff !important;
            --gold-light: #38bdf8 !important;
            --cream: #242526 !important;
            --bg: #18191a !important;
            --white: #242526 !important;
            --text: #e4e6eb !important;
            --text-mid: #b0b3b8 !important;
            --text-muted: #8a8d91 !important;
            --border: #3e4042 !important;
            --border-light: #2f3031 !important;
        }
        /* Blobs in apply.html */
        html.theme-dark .blob1 {
            background: radial-gradient(circle, rgba(45, 136, 255, 0.08), transparent 70%) !important;
        }
        html.theme-dark .blob2 {
            background: radial-gradient(circle, rgba(56, 189, 248, 0.07), transparent 70%) !important;
        }
        html.theme-dark .blob3 {
            background: radial-gradient(circle, rgba(45, 136, 255, 0.05), transparent 70%) !important;
        }


        /* ==========================================================================
           WIDGET UI STYLES
           ========================================================================== */
        .theme-switcher-widget {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 45; /* Displayed below fullscreen modals (z-50) */
            font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
        }
        .theme-toggle-btn {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 5px rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            color: #5c061d;
            font-size: 18px;
            padding: 0;
            outline: none;
        }
        .theme-toggle-btn:hover {
            transform: scale(1.08);
            background: #ffffff;
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        }
        .theme-toggle-btn:active {
            transform: scale(0.95);
        }

        html.theme-light .theme-toggle-btn {
            color: #1e40af;
            background: rgba(255, 255, 255, 0.9);
            border-color: rgba(30, 64, 175, 0.15);
        }
        html.theme-dark .theme-toggle-btn {
            color: #2d88ff;
            background: rgba(36, 37, 38, 0.85);
            border-color: rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .theme-menu {
            position: absolute;
            bottom: 58px;
            right: 0;
            width: 155px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
            padding: 6px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            transform: scale(0.9) translateY(12px);
            opacity: 0;
            transform-origin: bottom right;
            pointer-events: none;
            transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
        }
        .theme-menu.active {
            transform: scale(1) translateY(0);
            opacity: 1;
            pointer-events: auto;
        }

        html.theme-dark .theme-menu {
            background: #242526;
            border-color: rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .theme-menu-header {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #94a3b8;
            padding: 6px 10px 4px;
        }
        html.theme-dark .theme-menu-header {
            color: #64748b;
        }

        .theme-menu-item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 8px 10px;
            border-radius: 10px;
            border: none;
            background: transparent;
            cursor: pointer;
            font-family: inherit;
            font-size: 12px;
            font-weight: 600;
            color: #475569;
            text-align: left;
            transition: all 0.15s ease;
            gap: 8px;
            outline: none;
        }
        .theme-menu-item:hover {
            background: rgba(0, 0, 0, 0.04);
            color: #0f172a;
        }
        html.theme-dark .theme-menu-item {
            color: #b0b3b8;
        }
        html.theme-dark .theme-menu-item:hover {
            background: rgba(255, 255, 255, 0.05);
            color: #e4e6eb;
        }

        .theme-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        .default-dot {
            background: #5c061d;
        }
        .light-dot {
            background: #1e40af;
        }
        .dark-dot {
            background: #2d88ff;
        }

        .theme-menu-item .theme-check {
            margin-left: auto;
            font-size: 10px;
            color: #5c061d;
            opacity: 0;
            transition: opacity 0.15s ease;
        }
        html.theme-light .theme-menu-item .theme-check {
            color: #1e40af;
        }
        html.theme-dark .theme-menu-item .theme-check {
            color: #2d88ff;
        }

        .theme-menu-item.active-item {
            color: #0f172a;
        }
        html.theme-dark .theme-menu-item.active-item {
            color: #ffffff;
        }
        .theme-menu-item.active-item .theme-check {
            opacity: 1;
        }
    }
    `;

    // 3. Inject CSS rules immediately to prevent flashing styles on content load
    const styleEl = document.createElement('style');
    styleEl.textContent = themeStyles;
    document.head.appendChild(styleEl);

    // 4. Initialize floating picker elements when the DOM becomes fully ready
    document.addEventListener('DOMContentLoaded', function() {
        // Build switcher layout container
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'theme-switcher-widget';
        widgetContainer.innerHTML = `
            <div style="position: relative;">
                <button id="theme-toggle-btn" class="theme-toggle-btn" title="Change Theme">
                    <i class="fa-solid fa-palette"></i>
                </button>
                <div id="theme-menu" class="theme-menu">
                    <div class="theme-menu-header">Select Theme</div>
                    <button class="theme-menu-item" data-theme="default">
                        <span class="theme-dot default-dot"></span>
                        <span class="theme-text">Default</span>
                        <i class="fa-solid fa-check theme-check"></i>
                    </button>
                    <button class="theme-menu-item" data-theme="light">
                        <span class="theme-dot light-dot"></span>
                        <span class="theme-text">Light</span>
                        <i class="fa-solid fa-check theme-check"></i>
                    </button>
                    <button class="theme-menu-item" data-theme="dark">
                        <span class="theme-dot dark-dot"></span>
                        <span class="theme-text">Dark</span>
                        <i class="fa-solid fa-check theme-check"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(widgetContainer);

        const toggleBtn = document.getElementById('theme-toggle-btn');
        const themeMenu = document.getElementById('theme-menu');
        const menuItems = themeMenu.querySelectorAll('.theme-menu-item');

        // Toggle drop down menu display state
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            themeMenu.classList.toggle('active');
        });

        // Close menu dropdown if clicking elsewhere outside the switcher
        document.addEventListener('click', function(e) {
            if (!widgetContainer.contains(e.target)) {
                themeMenu.classList.remove('active');
            }
        });

        // Setup theme item selections
        function updateActiveMenuItem(activeTheme) {
            menuItems.forEach(item => {
                const itemTheme = item.getAttribute('data-theme');
                if (itemTheme === activeTheme) {
                    item.classList.add('active-item');
                } else {
                    item.classList.remove('active-item');
                }
            });
        }

        // Initialize active class in item list
        const currentSelectedTheme = localStorage.getItem('theme-preference') || 'default';
        updateActiveMenuItem(currentSelectedTheme);

        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                const targetTheme = this.getAttribute('data-theme');
                const previousTheme = localStorage.getItem('theme-preference') || 'default';
                
                if (targetTheme === previousTheme) {
                    themeMenu.classList.remove('active');
                    return;
                }

                // Add transition utility class to body for smoother shift colors
                document.documentElement.classList.add('theme-transition');

                // Apply correct HTML classes
                if (targetTheme === 'light') {
                    document.documentElement.classList.remove('theme-dark');
                    document.documentElement.classList.add('theme-light');
                } else if (targetTheme === 'dark') {
                    document.documentElement.classList.remove('theme-light');
                    document.documentElement.classList.add('theme-dark');
                } else {
                    document.documentElement.classList.remove('theme-light', 'theme-dark');
                }

                // Persist theme choice
                localStorage.setItem('theme-preference', targetTheme);
                updateActiveMenuItem(targetTheme);

                // Hide dropdown menu
                themeMenu.classList.remove('active');

                // Cleanup transitions flag after it completes
                setTimeout(() => {
                    document.documentElement.classList.remove('theme-transition');
                }, 350);
            });
        });
    });
})();
