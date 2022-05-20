import axios from 'axios';
import { getCookie } from './cookies';

const url = process.env.BASE_URL || 
'https://moodb-app.herokuapp.com';
// 'http://localhost:8080';

const http = axios.create({
    baseURL: url,
});

http.interceptors.request.use((request) => {
    if (typeof window === 'undefined') {
      return request;
    }
    
    const token = getCookie("token");
  
    if (token) {
      if(request.headers)
      request.headers["Authorization"] = `${token}`; // add beare after
    }
  
    return request;
  });

export default http;