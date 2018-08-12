import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/user/Home.vue'
import Header from './components/Header.vue'

// function dynamicPropsFn() {
//     return {
//         id: this.$route.params.id
//     }
// }

export const routes = [
    {path: '/', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    {path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart},
        { path: ':id', component: UserDetail},
        { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},  
    // {path: '/user/:id', component: User, props: dynamicPropsFn},   
]

// examples of route params via 'props' vue-router 2.2:
// https://github.com/vuejs/vue-router/tree/dev/examples/route-props