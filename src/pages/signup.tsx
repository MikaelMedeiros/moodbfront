import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Logo }  from '../assets/svg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // aqui você pode realizar a lógica para enviar os dados do formulário para o servidor
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-evenly items-center">
      <Image src={Logo} height={35} width={200} alt="Logo" />
      <form onSubmit={handleSubmit} className="flex flex-col h-80 w-72 justify-around items-center">
        <h1 className="font-[600] text-gray-700 text-xl ">Criar a sua conta:</h1>
        <div className="flex flex-col w-full">
          <Input value={name} onChange={handleNameChange} placeholder="Nome:" type="text" id="name" name="name" />
          <div className="flex items-center border-b border-gray-500 mb-3" />
          <Input value={email} onChange={handleEmailChange} placeholder="E-mail:" type="email" id="email" name="email" />
          <div className="flex items-center border-b border-gray-500 mb-3" />
          <Input value={password} onChange={handlePasswordChange} placeholder="Senha:" type="password" id="password" name="password" />
          <div className="flex items-center border-b border-gray-500 mb-3" />
          <Input value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirmar senha:" type="password" id="confirm_password" name="confirm_password" />
          <div className="flex items-center border-b border-gray-500 mb-3" />
        </div>
        <Button type="submit" variant="black">
          Entrar
        </Button>
        <span className="text-xs">
            Já é membro? Então <Link href="/signin"><strong className=' cursor-pointer' >faça o login.</strong></Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;