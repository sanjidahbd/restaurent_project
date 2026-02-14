import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import '../frontend/css/bootstrap.min.css'
import '../frontend/css/all.min.css'
import '../frontend/css/animate.css'
import '../frontend/css/magnific-popup.css'
import '../frontend/css/meanmenu.css'
import '../frontend/css/swiper-bundle.min.css'
import '../frontend/css/nice-select.css'
import '../frontend/css/main.css'

import '../frontend/js/jquery-3.7.1.min.js'
import '../frontend/js/bootstrap.bundle.min.js'
import '../frontend/js/jquery.waypoints.js'
import '../frontend/js/jquery.counterup.min.js'
import '../frontend/js/viewport.jquery.js'



    // <script src="assets/js/magnific-popup.min.js"></script>
    // <!--<< Tilt Js >>-->
    // <script src="assets/js/tilt.min.js"></script>
    // <!--<< Swiper Slider Js >>-->
    // <script src="assets/js/swiper-bundle.min.js"></script>
    // <!--<< MeanMenu Js >>-->
    // <script src="assets/js/jquery.meanmenu.min.js"></script>
    // <!--<< Wow Animation Js >>-->
    // <script src="assets/js/wow.min.js"></script>
    // <!--<< Nice Select Js >>-->
    // <script src="assets/js/nice-select.min.js"></script>
    // <!--<< Main.js >>-->
    // <script src="assets/js/main.js"></script>

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
