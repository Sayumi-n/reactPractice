import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;


export default axios.create({
    baseURL:'http://api.aviationstack.com/v1',
    params:{
        access_key : `${KEY}`
    },
    headers:{
        'Access-Control-Allow-Origin' : '*'
    }
});
