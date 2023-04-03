import Cookies from 'js-cookie';
import cookie from 'cookie'; 

export function parseCookies(req?: any) {
    if(!req || !req.headers) return {};

    return cookie.parse(req.headers.cookie || '');
}

export function setCookie(
    key: string,
    value: string,
    options?: Cookies.CookieAttributes
) {
    Cookies.set(key, value, {
        ...options,     
        secure: process.env.NODE_ENV === 'production'
    });
}

export function getCookie(key: string){
    return Cookies.get(key);
}