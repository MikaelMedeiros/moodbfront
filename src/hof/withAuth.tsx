import { isTokenExpired, jwtDecode } from "../utils/auth";
import { parseCookies } from "../utils/cookies";

export function withAuth(func: any) {
    return async (context: any) => {
        const cookies = parseCookies(context.req);

        if(!cookies.token || isTokenExpired(cookies.token)) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/logintest",
                }
            };
        }

        const user = jwtDecode(cookies.token);

        const result = await func(context, cookies, user);
        if('props' in result) {
            result.props = {
                user, 
                ...result.props,
            }
        }
        return result
    }
}