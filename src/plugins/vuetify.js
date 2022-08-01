import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            // https://colorscheme.ru/#2P31Tw0fHw0w0
            light: {
                primary: '#006400',
                secondary: '#7D3900',
                accent: '#640039',
                error: '#b71c1c',
            },
        },
    },
});
