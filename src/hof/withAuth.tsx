import { isTokenExpired } from "../utils/auth";
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
        return func(context, cookies);
    }
}