import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
// const KEY ="AIzaSyDoXqldJeF7KqVL9wTL7RjZ9ha5Q13Nqfg";


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: `${KEY}`
    }
});
