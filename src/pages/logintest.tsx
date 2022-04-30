import { NextPage } from 'next';
import { FormEvent } from 'react';
import { setCookie } from '../utils/cookies';
import { httpExtern, httplLocal } from '../utils/http';

const LogintestPage: NextPage = () => {
    
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        const login = (document.querySelector('#username') as HTMLInputElement).value;
        const password = (document.querySelector('#password') as HTMLInputElement).value;
    
        const { data } = await httplLocal.post("api/autenticacao",  {login, password});
        console.log(data);
        setCookie('token', data.token); 
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