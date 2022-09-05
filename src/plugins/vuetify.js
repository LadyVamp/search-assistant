import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            // https://colorscheme.ru/#3-31T--mXw0w0
            light: {
                primary: '#000080',
                secondary: '#B7A600',
                accent: '#B76900',
                error: '#b71c1c',
            },
        },
    },
});
