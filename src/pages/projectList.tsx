
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

interface projectListProps {
    timestamp: string
};
const ProjectList: NextPage<projectListProps> = (props) => {

    const router = useRouter();
    const [data, setData] = useState(projects.moodbList);

    
    useEffect(() => {
        getMoodb;

    },[]);

    async function getMoodb() {
        try {
            const { data } = await http.get("/moodbs/");
            // setData(data);
            console.log('oioi');
        } catch (error: any) {
            console.log(error)
            toast.notify(error.response.data.error, 'error', 2000 );
        }
    }

    return (
        <div className="content-between relative text-center">
           
            <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
                <ButtonIcon><FontAwesomeIcon icon={faSearch}/></ButtonIcon>
                <Link href="/projectCreate"><ButtonIcon><FontAwesomeIcon icon={faAdd}/></ButtonIcon></Link>
            </div>
        
            <div className='flex justify-center items-center'>
                <h1 className="text-gray-500 font-bold">MEUS PROJETOS</h1>
                {/* <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon> */}
            </div>
            
            {data.map((item) => {
                return (
                    <div key={item.id} className='shadow-slate-300 mx-5 my-2 md:mx-24'>
                        <Link href="/projectDetail"><p className='text-gray-500 text-left text-sm p-1 font-light cursor-pointer mt-'>{item.name}</p></Link>
                        <div className='bg-gray-200 h-20 relative '></div>
                    </div>
                )
            })}

        </div>
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

export default ProjectList;
