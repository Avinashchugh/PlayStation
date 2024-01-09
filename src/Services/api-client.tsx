import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd8e9dee8a0ac40898e8a8c888070e793'
    }
})