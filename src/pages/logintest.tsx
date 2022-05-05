import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { toast } from '../components/Toast';
import { setCookie } from '../utils/cookies';
import http from '../utils/http';

const LogintestPage: NextPage = () => {
    const router = useRouter();
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        const login = (document.querySelector('#username') as HTMLInputElement).value;
        const password = (document.querySelector('#password') as HTMLInputElement).value;
        try {
            const { data } = await http.post("/login/",  {login, password});
            setCookie('token', data.token);
            router.push('/paginaPrivada')
        } catch (error: any) {
            console.log(error);
            toast.notify(error.response.data.error, 'error', 2000 );
        }
    }
    
    return (
        <form method='post' onSubmit={onSubmit}>
            <div className='flex flex-col'>
                <label htmlFor='username'>Usuário</label>
                <input type="text" id='username' name='username'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='password'>Senha</label>
                <input type="password" id='password' name='password'/>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LogintestPage;