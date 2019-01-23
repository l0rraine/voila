import filters from './filters';
import {getDashboard} from "../../utils/api";



export const SET_READY = 'SET_READY';
export const UPDATE = 'UPDATE';

export default {
    namespaced: true,
    modules: {
        filters
    },
    
}