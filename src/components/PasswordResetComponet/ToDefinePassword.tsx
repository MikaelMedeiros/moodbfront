import * as React from 'react';
import { Button } from "../Button"
import { Input } from "../Input"

interface ToDefinePasswordProps {
    handleSwitchComponent: () => void;
}

 const ToDefinePassword:React.FunctionComponent<any> = (props:ToDefinePasswordProps) => {

    return (
        <>
            <h1 className='font-[600] text-gray-700 text-xl self-center' >Defina sua nova senha:</h1>
            <div className='flex flex-col w-full'>
                <Input value='' placeholder='Nova senha:' type='password' id='password' name='password' />
                <div className="flex items-center border-b border-gray-500 mb-3" />
                <Input value='' placeholder='Confirme a senha:' type='password' id='password' name='password' />
                <div className="flex items-center border-b border-gray-500 mb-3" />
                <Button onClick={props.handleSwitchComponent} variant="black" >
                    Definir senha
                </Button>
            </div>
        </>
    )
}

export default ToDefinePassword;