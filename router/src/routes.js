import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/user/Home.vue'

// function dynamicPropsFn() {
//     return {
//         id: this.$route.params.id
//     }
// }

export const routes = [
    {path: '/', component: Home },
    {path: '/user', component: User, children: [
        { path: '', component: UserStart},
        { path: ':id', component: UserDetail},
        { path: ':id/edit', component: UserEdit}
    ]},  
    // {path: '/user/:id', component: User, props: dynamicPropsFn},   
]

// examples of route params via 'props' vue-router 2.2:
// https://github.com/vuejs/vue-router/tree/dev/examples/route-props