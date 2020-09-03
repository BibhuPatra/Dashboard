import axios from 'axios';


const URL  = 'https://api.aftership.com/v4/trackings/';
const API_KEY = 'f36f473a-9e54-4c27-9692-d3f414de6ec4';

const config = {
    headers: { 'aftership-api-key': API_KEY,
    'Content-Type': 'application/json' }
};

export const fetchData = async (query) => {
    
    const data  = await axios.get(URL + '?id=' +query, {
        headers: {
          'Content-Type': 'application/json',
          'aftership-api-key': API_KEY,
        }
      }).then((response) => {
        return response.data
      }).catch((error) => { return Promise.reject(error)})
    return data;
} 
