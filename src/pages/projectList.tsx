
import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { ButtonIcon } from '../components/ButtonIcon';
import { Input } from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd, faSortDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


import { projects } from '../dataFake/projects';


const TailwindcssPage: NextPage  = () => {

    return (
        <div className="content-between relative text-center">
            <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
                <ButtonIcon><FontAwesomeIcon icon={faSearch}/></ButtonIcon>
                <Link href="/projectCreate"><ButtonIcon><FontAwesomeIcon icon={faAdd}/></ButtonIcon></Link>
            </div>
           
            <div className='flex justify-center items-center'>
                <h1 className="text-gray-500 font-bold">MEUS PROJETOS</h1>
                <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon>
            </div>
            
            {projects.map((item) => {
                return (
                    <div className='shadow-slate-300 mx-5 my-2 md:mx-24'>
                        <Link href="/projectDetail"><p className='text-gray-500 text-left text-sm p-1 font-light cursor-pointer mt-'>{item.name}</p></Link>
                        <div className='bg-gray-200 h-20 relative '></div>
                    </div>
                )
            })}

        </div>
        
    );

};

export default TailwindcssPage;