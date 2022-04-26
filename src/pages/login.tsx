import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const TailwindcssPage: NextPage  = () => {

    return (
        <div className="flex flex-col text-center container mx-auto px-16">
            <div>
                <h1 className='text-4xl mt-20 text-gray-600 align-baseline'>
                    MoodB
                </h1>
            </div>
            
            <h2 className='text-left text-xl mt-20'>Login</h2>    
            <div className="flex flex-col space-y-5 items-center">
                <Input placeholder='E-mail'></Input>
                <Input placeholder='Password'></Input>
            </div>

            <div className='mt-2'>
                <Button>Entrar</Button>
            </div>
        </div>
    );

};

export default TailwindcssPage;