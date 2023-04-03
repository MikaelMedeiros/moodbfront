// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../utils/cookies';
import  httpExtern from '../../utils/http';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {login, password} = req.body;
    httpExtern.post("/login/",  {login, password})
    .then (response => {
        const {data} = response.data;
        console.log(data);
        setCookie('token', data.token);
        return data;
    })
    .catch(error => {
        console.log(error);
        return error;
    })
    
}

function callLogin() {

}
