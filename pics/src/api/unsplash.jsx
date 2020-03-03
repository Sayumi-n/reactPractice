import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID hwL3GOIWxHf_sKVf0-634DElqZ5oKlEdRBPL9TVjwNU'
     }
});