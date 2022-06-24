
import type { NextPage } from 'next'
import { Input } from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAdd, faArrowLeft, faSave} from '@fortawesome/free-solid-svg-icons';


import { GetServerSideProps } from 'next';
import * as React from 'react';
import { withAuth } from '../hof/withAuth';
import http from '../utils/http';
import { ButtonSignOut } from '../components/ButtonSignout';
import { LinkButton } from '../components/LinkButton';

interface projectCreateProps {
    timestamp: string
};
const projectCreate: NextPage<projectCreateProps> = (props) => {
    

    return (
        <>
            <div className="content-between relative text-center">
                <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
                    <LinkButton href="/projectList"><FontAwesomeIcon icon={faArrowLeft}/></LinkButton>
                    <LinkButton href="/projectCreate"><FontAwesomeIcon icon={faSave}/></LinkButton>
                </div>
            
                <div className='mt-5 px-5 md:mx-24'>
                    <div className="flex flex-col items-center space-y-2 mb-5">
                        <Input type='text' placeholder='Nome do Projeto/Cliente'></Input>
                        <Input type='text' placeholder='Descrição'></Input>
                    </div>

                    <div className='flex flex-col bg-gray-200 text-white font-black text-5xl h-20 relative justify-center cursor-pointer'>
                        <FontAwesomeIcon icon={faAdd}/>
                    </div>
                </div>
            </div>
            <ButtonSignOut />
        </>

    );
};
    
export const getServerSideProps = withAuth(async (ctx: GetServerSideProps , cookies: any, user: any) => {
    
    const { data } = await http.get("/moodbs/", {
        headers: {
            'token': `${cookies.token}`,
        }
    });
    
    return {
        props: data
    }
});

export default projectCreate;