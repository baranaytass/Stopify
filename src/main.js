import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import store from './store';

const app = createApp(App)


const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        'stopify-black-1': 'green'
      }
    }
  },
  components,
  directives,
})

app.use(router)

app.use(vuetify)

app.use(store)

app.mount('#app')
