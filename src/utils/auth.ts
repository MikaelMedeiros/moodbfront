export function isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token);
    return decoded.exp < Math.floor(Date.now() / 1000)
}

function jwtDecode(token: string): any {
    console.log(token.split('.')[1]);
    return JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString('utf8')
    );
}