import type { NextPage } from 'next'
import { Input } from '../components/Input';
import Link from 'next/link';
import { Button } from '../components/Button';
import Image from 'next/image';
import { Logo }  from '../assets/svg';


const SigninPage: NextPage  = () => {

    return (
        <div className="bg-white h-screen flex flex-col justify-evenly items-center  ">
            <Image src={Logo} height={35} width={200} alt=''/>
            <div className="flex flex-col h-80 w-72 justify-evenly items-center ">
                <h1 className='font-[600] text-gray-700 text-xl self-start' >Bem-vindo(a) <br /> de volta!</h1>
                <div className='flex flex-col w-full'>
                    <Input value='' placeholder='E-mail:' type='email' id='email' name='email' />
                    <div className="flex items-center border-b border-gray-500 mb-3" />
                    <Input value='' placeholder='Senha:' type='password' id='password' name='password' />
                    <div className="flex items-center border-b border-gray-500 mb-3" />
                    <Link href="/signup">
                    <span className='text-xs self-end'>
                        Esqueceu a senha?
                    </span>
                </Link>
                </div>
                
                <Button variant="black" >
                    Entrar
                </Button>
                {/* isso devevirar um componente typography */}
                <span className='text-xs'>
                    Ainda não é membro? Então  <Link href="/signup"><strong className='cursor-pointer ' >cadastre-se</strong></Link>
                </span>
            </div>
        </div>
    );

};

export default SigninPage;