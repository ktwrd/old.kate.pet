import Vue from 'vue';
import Router from 'vue-router';
import BlankPage from '@/BlankPage.vue';
import OtherStuff from '@/OtherStuff.vue';
import TrackCredits from '@/TrackCredits.vue';
import Since from '@/Since.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'blank',
            component: BlankPage
        },
        {
            path: '/other',
            name: 'Other Stuff',
            component: OtherStuff
        },
        {
            path: '/track-credits',
            name: 'Track Credits',
            component: TrackCredits
        },
        {
            path: '/since',
            name: 'Time Since',
            component: Since
        }
    ]
});
