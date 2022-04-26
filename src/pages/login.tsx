import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const TailwindcssPage: NextPage  = () => {

    return (
        <div className="flex flex-col text-center container mx-auto px-16">
            <div>
                <h1 className='text-4xl mt-20 text-gray-500 align-baseline'>
                    MoodB
                </h1>
            </div>
            <div>
                <h2 className='text-left text-xl font-bold text-gray-400 mt-20'>Login</h2>    
            </div>
            <div className="flex flex-col space-y-5 items-center mt-5">
                <Input type='text' placeholder='E-mail'></Input>
                <Input type='password' placeholder='Senha'></Input>
            </div>

            <div className='mt-10'>
                <Button>Entrar</Button>
            </div>

            <div className='text-xs italic text-gray-500 absolute inset-x-0 bottom-4'>
                &copy;2022 Powered by YSNP. All rights reserved.
            </div>
        </div>
    );

};

export default TailwindcssPage;