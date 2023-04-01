import * as React from 'react';
import { Button } from "../Button"
import { Input } from "../Input"


interface ToDefinePasswordProps {
    handleSwitchComponent: () => void;
}

 const RecoverPassword:React.FunctionComponent<any> = (props:ToDefinePasswordProps) => {
    return (
        <>
            <h1 className='font-[600] text-gray-700 text-xl self-center' >Recuperação de senha:</h1>
            <div className='flex flex-col w-full'>
                <Input value='' placeholder='E-mail:' type='email' id='email' name='email' />
                <div className="flex items-center border-b border-gray-500 mb-3" />
                <Button onClick={props.handleSwitchComponent} variant="black" >
                    Verificar e-mail
                </Button>
            </div>
        </>
    )
}

export default RecoverPassword;