import Vue from 'vue/dist/vue.esm.js'
import qualquercoisa from './qualquercoisa.vue'

const app = new Vue(
    {
        el: '#app',
        components: {
            qualquercoisa
        },
        template: '<qualquercoisa></qualquercoisa>'
    }
)