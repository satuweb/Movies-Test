import axios from 'axios';
const TKN = ''
// create axios instance 
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 10000,
});

instance.defaults.headers.common['Authorization'] = `Bearer ${TKN}`;
instance.defaults.headers.common['Content-Type'] = `application/json;charset=utf-8`;

export default instance