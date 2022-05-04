import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import Link from 'next/link';

const TailwindcssPage: NextPage  = () => {

    return (
        <div className="flex flex-col justify-between text-center h-screen px-10 pt-14 pb-1 md:px-28">
            <h1 className='text-gray-500 text-4xl align-baseline '>MoodB</h1>
            <div>
                <h2 className='text-gray-500 text-left text-xl font-medium font-sans'>Cadastre-se</h2>    
                <div className="flex flex-col items-center space-y-2 mt-5">
                    <Input type='text' placeholder='E-mail'></Input>
                    <Input type='password' placeholder='Senha'></Input>
                    <Input type='password' placeholder='Confirmar senha'></Input>
                </div>
                <div className='mt-10'>
                    <Button><Link href=""><a>Cadastrar</a></Link></Button>
                    <div className='mt-1'>
                        <span className='text-gray-500 font-normal text-xs'>ou </span>
                        <Link href="/signin"><a className='text-gray-500 font-normal text-xs'>Faça login</a></Link>
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