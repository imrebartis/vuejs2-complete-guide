import Home from './components/Home.vue'
import Header from './components/Header.vue'

const User = resolve => {
    // asynchronous function for lazy loading routes
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};

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
        { path: ':id/edit', component: UserEdit, name: 'userEdit', beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        }}
    ]},  
    { path: '/redirect-me', redirect: { name: 'home' }},
    { path: '*', redirect: '/'} 
]

// examples of route params via 'props' vue-router 2.2:
// https://github.com/vuejs/vue-router/tree/dev/examples/route-props