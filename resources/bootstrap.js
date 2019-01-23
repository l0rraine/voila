import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

// vuetify
import Vuetify from 'vuetify/lib'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'md',
})


import axios from 'axios';
import cookies from 'axios/lib/helpers/cookies';



import * as qs from './helpers/querystring';
