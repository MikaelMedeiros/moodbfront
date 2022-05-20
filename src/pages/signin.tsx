import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import Link from 'next/link';


import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { toast } from '../components/Toast';
import { setCookie } from '../utils/cookies';
import http from '../utils/http';

const TailwindcssPage: NextPage  = () => {
    const router = useRouter();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(event: FormEvent) {
        // event.preventDefault();
        try {
            const { data } = await http.post("/login/",  {login, password});
            setCookie('token', data.token);
            router.push('/projectList')
        } catch (error: any) {
            toast.notify(error.response.data.error, 'error', 2000 );
        }
    }
    
    return (
        <div className="flex flex-col justify-between text-center h-screen px-10 pt-14 pb-1 md:px-28">
            <h1 className='text-gray-500 text-4xl align-baseline '>MoodB</h1>
            <div>
                <h2 className='text-gray-500 text-left text-xl font-medium font-sans'>Login</h2>    
                <div className="flex flex-col items-center space-y-2 mt-5">
                    <Input type='text' placeholder='E-mail' id='login' name='login' value={login} onChange={event => setLogin(event.target.value)}></Input>
                    <Input type='password' placeholder='Senha' id='username' name='username' value={password} onChange={event => setPassword(event.target.value)}></Input>
                    <Link href="#"><a className='text-gray-500 text-right w-full font-extralight text-xs'>Esqueci a senha</a></Link>    
                </div>
                <div className='mt-10'>
                    <Button onClick={onSubmit}><Link href="#"><a>Entrar</a></Link></Button>
                    <div className='mt-1'>
                    <span className='text-gray-500 font-normal text-xs'>ou </span>
                        <Link href="/signup"><a className='text-gray-500 font-normal text-xs'>Cadastre-se</a></Link>
                    </div>
                </div>
            </div>
            <div className='text-xs italic text-gray-500 '>
                &copy;2022 Powered by YSNP. All rights reserved.
            </div>
        </div>
    );

};

export default TailwindcssPage;