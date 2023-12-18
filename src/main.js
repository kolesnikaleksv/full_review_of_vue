import {createApp} from 'vue'
import  App  from './App.vue'
import components from '@/components/UI'
import router from './router'
import Vintersection from '@/directives/Vintersection'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

app.directive('intersection', Vintersection)

app.use(router)

app.mount('#app')