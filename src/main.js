import {createApp} from 'vue'
import  App  from './App.vue'
// import components from '@/components/UI'
import MainButton from '@/components/UI/MainButton.vue'
// import router from './router'

const app = createApp(App)

app.component('MainButton', MainButton)

// components.forEach(component => {
//   app.component(component.name, component)
// });
// app.use(router)

app.mount('#app')