import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'fa',
})