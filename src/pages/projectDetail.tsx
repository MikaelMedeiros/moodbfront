
import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { ButtonIcon } from '../components/ButtonIcon';
import { Input } from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd, faSortDown, faArrowLeft, faArrowRight, faSave} from '@fortawesome/free-solid-svg-icons';


import Link from 'next/link';
 
import { projects } from '../dataFake/projects';


const TailwindcssPage: NextPage  = () => {

    return (
        <div className="content-between relative text-center ">
            <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
               <Link href="/projectList"><ButtonIcon><FontAwesomeIcon icon={faArrowLeft}/></ButtonIcon></Link>
               <Link href="/projectList"><ButtonIcon><FontAwesomeIcon icon={faSave}/></ButtonIcon></Link>
            </div>
           
            <div className='flex justify-center items-center'>
                <h1 className="text-gray-500 font-normal">{projects[0].name}</h1>
                {/* <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon> */}
            </div>
            <p className='text-center font-light text-xs text-gray-400'>{projects[0].description}</p>
          
            <ul className='flex overflow-hidden w-screen' >
            {projects.map((item) => {
                return (
                    <div className='flex justify-center flex-col '> 
                        <div className='flex shadow-slate-300 my-6 px-1 w-screen justify-between content-center md:px-10 '>
                            <div className='flex'><ButtonIcon><FontAwesomeIcon icon={faArrowLeft}/></ButtonIcon></div>
                            <div className='bg-gray-200 h-40 w-4/6 relative'></div>
                            <div className='flex'><ButtonIcon><FontAwesomeIcon icon={faArrowRight}/></ButtonIcon></div>
                        </div>
                        <p className='border-t-2 px-14 py-4 p-1 text-gray-500 text-left text-sm font-extralight'>
                            Comentário breve feito pelo cliente...
                        </p>
                    </div>
                )
               
            })}
            </ul>
           

        </div>
        
    );

};

export default TailwindcssPage;