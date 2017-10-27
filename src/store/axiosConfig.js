import axios from 'axios';
import store from './configureStore';


const instance = axios.create({
    baseURL: 'https://clembucketlistapi.herokuapp.com/',
});


// intercept requests and add authorization token
instance.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
});
  
export default instance;
