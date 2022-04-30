import axios from 'axios';

export const httplLocal = axios.create({
    baseURL: process.env.BASE_URL_LOCAL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const httpExtern = axios.create({
    baseURL: process.env.BASE_URL_EXTERN,
});

    