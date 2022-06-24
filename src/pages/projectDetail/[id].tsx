
import type { NextPage } from 'next'
import { ButtonIcon } from '../../components/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSave} from '@fortawesome/free-solid-svg-icons';

import { projects } from '../../dataFake/projects';

import { GetServerSideProps } from 'next';
import {useState}from 'react';
import { withAuth } from '../../hof/withAuth';
import http from '../../utils/http';
import { ButtonSignOut } from '../../components/ButtonSignout';
import { LinkButton } from '../../components/LinkButton';

interface projectDetailProps {
    timestamp: string
};
const projectDetail: NextPage<projectDetailProps> = (props) => {
    
    const [data, setData] = useState(projects.moodbList);
    
    return (
        <>
            <div className="content-between relative text-center ">
            <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
            <LinkButton href="/projectList"><FontAwesomeIcon icon={faArrowLeft}/></LinkButton>
            <LinkButton href="/projectDetail"><FontAwesomeIcon icon={faSave}/></LinkButton>
            </div>
        
            <div className='flex justify-center items-center'>
                <h1 className="text-gray-500 font-normal">{data[0].name}</h1>
                {/* <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon> */}
            </div>
            <p className='text-center font-light text-xs text-gray-400'>{data[0].subtitle}</p>
        
            <ul className='flex overflow-hidden w-screen' >
            {data[0].imagens.map((item) => {
                return (
                    <div key={item.id} className='flex justify-center flex-col '> 
                        <div className='flex shadow-slate-300 my-6 px-1 w-screen justify-between content-center md:px-10 '>
                            <div className='flex'><ButtonIcon><FontAwesomeIcon icon={faArrowLeft}/></ButtonIcon></div>
                            <div className='bg-gray-200 h-40 w-4/6 relative'></div>
                            <div className='flex'><ButtonIcon><FontAwesomeIcon icon={faArrowRight}/></ButtonIcon></div>
                        </div>
                        <p className='border-t-2 px-14 py-4 p-1 text-gray-500 text-left text-sm font-extralight'>
                        {item.comment}
                        </p>
                    </div>
                )
            
            })}
            </ul>
        

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

export default projectDetail;



// const TailwindcssPage: NextPage  = () => {

//     return (
//         <div className="content-between relative text-center ">
//             <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
//                <Link href="/projectDetail"><ButtonIcon><FontAwesomeIcon icon={faArrowLeft}/></ButtonIcon></Link>
//                <Link href="/projectDetail"><ButtonIcon><FontAwesomeIcon icon={faSave}/></ButtonIcon></Link>
//             </div>
           
//             <div className='flex justify-center items-center'>
//                 <h1 className="text-gray-500 font-normal">{projects[0].name}</h1>
//                 {/* <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon> */}
//             </div>
//             <p className='text-center font-light text-xs text-gray-400'>{projects[0].description}</p>
          
//             <ul className='flex overflow-hidden w-screen' >
//             {projects.map((item) => {
//                 return (
//                     <div className='flex justify-center flex-col '> 
//                         <div className='flex shadow-slate-300 my-6 px-1 w-screen justify-between content-center md:px-10 '>
//                             <div className='flex'><ButtonIcon><FontAwesomeIcon icon={faArrowLeft}/></ButtonIcon></div>
//                             <div className='bg-gray-200 h-40 w-4/6 relative'></div>
//                             <div className='flex'><ButtonIcon><FontAwesomeIcon icon={faArrowRight}/></ButtonIcon></div>
//                         </div>
//                         <p className='border-t-2 px-14 py-4 p-1 text-gray-500 text-left text-sm font-extralight'>
//                             Comentário breve feito pelo cliente...
//                         </p>
//                     </div>
//                 )
               
//             })}
//             </ul>
           

//         </div>
        
//     );

// };

// export default TailwindcssPage;