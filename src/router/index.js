import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/LandingPage.vue';
import OtherStuff from '@/OtherStuff.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: LandingPage
        },
        {
            path: '/other',
            name: 'Other Stuff',
            component: OtherStuff
        }
    ]
});
