import './assets/scss/app.scss'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
/* import '@fontsource-variable/nunito'; */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

library.add(faBrain, faHeart, faGithub, faLinkedinIn, faInstagram, faArrowRight)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
