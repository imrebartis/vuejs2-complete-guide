import User from './components/user/User.vue'
import Home from './components/user/Home.vue'

function dynamicPropsFn() {
    return {
        id: this.$route.params.id
    }
}

export const routes = [
    {path: '/', component: Home },
    {path: '/user/:id', component: User, props: dynamicPropsFn},   
]

// examples of route params via 'props' vue-router 2.2:
// https://github.com/vuejs/vue-router/tree/dev/examples/route-props