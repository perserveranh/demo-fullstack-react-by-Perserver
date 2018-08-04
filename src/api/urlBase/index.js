import axios from 'axios';

const api = axios.create({
    baseURL: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json"
});
export default api;