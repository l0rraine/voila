import filters from './filters';
import { getDashboard } from "../../utils/api";


export const SET_READY = 'SET_READY';
export const UPDATE = 'UPDATE';

export default {
    namespaced: true,
    modules: {
        filters
    },
    state: {
        ready: false,
        data: null,
        widgets: null,
        config: null,
        layout: null,
        user:{
            name:window.localStorage.getItem('user'||'[]') == null ? '未登录':JSON.parse(window.localStorage.getItem('user'||'[]')).name,

        }
    },
    mutations: {
        [UPDATE](state, { data, layout, widgets, config }) {
            state.data = data;
            state.widgets = widgets;
            state.layout = layout;
            state.config = config;
        },
        [SET_READY](state, ready) {
            state.ready = ready;
        },
        login(state,user){
            state.user=user;
            window.localStorage.setItem('user',JSON.stringify(user));
        },
        logout(state){
            window.localStorage.removeItem('user');
        }
    },
    actions: {
        async get({ state, commit, dispatch, getters }, { dashboardKey, filterValues }) {
            const data = await getDashboard({
                dashboardKey,
                filters: getters['filters/getQueryParams'](filterValues)
            });
            commit(UPDATE, {
                data: data.data,
                widgets: data.widgets,
                layout: data.layout,
                config: data.config
            });
            await dispatch('filters/update', {
                filters: data.config.filters,
                values: filterValues
            });
            commit(SET_READY, true);
        }
    }
}