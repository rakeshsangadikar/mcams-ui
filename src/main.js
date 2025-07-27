import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PrimeVue & Styles
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css' // Theme
import 'primevue/resources/primevue.min.css' // Core CSS
import 'primeicons/primeicons.css' // Icons
import 'primeflex/primeflex.css' // Utility CSS

// PrimeVue Components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

// Create and configure app
const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true }) // optional config
app.use(ToastService)


// Register global components
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Dropdown', Dropdown)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Card', Card)
app.component('Toast', Toast)

// Mount app
app.mount('#app')
