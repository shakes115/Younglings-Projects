import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faExternalLinkAlt)

createApp(App).mount('#app')
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')