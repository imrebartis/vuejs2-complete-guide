import User from './components/user/User.vue'
import Home from './components/user/Home.vue'

export const routes = [
    {path: '/', component: Home },
    {path: '/user/:id', component: User },
    
]