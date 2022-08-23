import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/LandingPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: LandingPage
        }
    ]
});
