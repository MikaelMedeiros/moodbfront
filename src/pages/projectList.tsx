
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { withAuth } from './../hof/withAuth';
import { ButtonIcon } from '../components/ButtonIcon';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { toast } from '../components/Toast';
import http from '../utils/http';

import { projects } from '../dataFake/projects';
import { ButtonSignOut } from '../components/ButtonSignout';
import { LinkButton } from '../components/LinkButton';
import { Project } from '../components/Projetc/Projetc';

interface moodbListTypes {
    id: number,
    name: string,
    subtitle: string,
    image: Array<string>,

}
interface projectListProps {
    timestamp: string,
    moodbList: Array<moodbListTypes>,
};
const projectList: NextPage<projectListProps> = (props) => {

    const router = useRouter();


    return (
        <>
            <div className="content-between relative text-center">
            
                <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
                    <ButtonIcon><FontAwesomeIcon icon={faSearch}/></ButtonIcon>
                    <LinkButton href="/projectCreate" ><FontAwesomeIcon icon={faAdd}/></LinkButton>
                </div>
            
                <div className='flex justify-center items-center'>
                    <h1 className="text-gray-500 font-bold">MEUS PROJETOS</h1>
                    {/* <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon> */}
                </div>
                { 
                    (props.moodbList.length > 0)
                    ?
                    props.moodbList.map((item) => {
                        return (
                            <Project key={item.id} id={item.id} name={item.name} />
                        )
                    }) : <></>
                }
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
    console.log(data);
    return {
        props: {
            timestamp: data.timestamp,
            moodbList: data.moodbList,
        } 
    }
});

export default projectList;
