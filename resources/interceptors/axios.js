import axios from 'axios'
import store from '../store'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.request.use(function (config) {

    config.headers['Authorization'] = this.$store.user.apiToken

    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response=> {
    // Do something with response data
    return response;
}, error =>  {
    if (err.response.status == 504||err.response.status == 404) {
        // Message.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
        // Message.error({message: '权限不足,请联系管理员!'});
    }else {
        // Message.error({message: '未知错误!'});
    }
    return Promise.reject(error);
});