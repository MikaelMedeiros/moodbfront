import type { NextPage } from 'next'
import Image from 'next/image';
import { Logo }  from '../assets/svg';
import { RecoverPassword, ToDefinePassword } from '../components/PasswordResetComponet';
import { useState } from 'react';



const PasswordReset: NextPage  = () => {
    //esse estado vai ser usado para trocar de componente
    const [switchComponent, setSwitchComponent] = useState(false);
    console.log('sssssssssssssssss ',switchComponent);

    const handleSwitchComponent = () => {
        setSwitchComponent(!switchComponent);
    };

    return (
        <div className="bg-white h-screen flex flex-col justify-around items-center  ">
            <Image src={Logo} height={35} width={200} />
            <div className="flex flex-col h-80 w-72 justify-around items-center ">
                {
                    !switchComponent ?
                    <RecoverPassword  handleSwitchComponent={() => {handleSwitchComponent}}  />
                    :
                    <ToDefinePassword handleSwitchComponent={() => {handleSwitchComponent}} />
                }
            </div>
        </div>
    );

};

export default PasswordReset;