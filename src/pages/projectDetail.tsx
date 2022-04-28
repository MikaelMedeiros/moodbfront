
import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { ButtonIcon } from '../components/ButtonIcon';
import { Input } from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd, faSortDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        id: 0,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 1,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS1",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 2,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS2",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 3,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS3",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 4,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 5,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS1",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 6,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS2",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 7,
        description: "Descrição breve do projeto",
        name: "MEUS PROJETOS3",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    }
]

const TailwindcssPage: NextPage  = () => {

    return (
        <div className="content-between relative text-center">
            <div className='flex justify-between align-middle px-10 py-15 border-b-2 border-gray-300'>
                <ButtonIcon><FontAwesomeIcon icon={faSearch}/></ButtonIcon>
                <ButtonIcon><FontAwesomeIcon icon={faAdd}/></ButtonIcon>
            </div>
           
            <div className='flex justify-center items-center'>
                <h1 className="text-gray-500 font-bold">{projects[0].name}</h1>
                <ButtonIcon><FontAwesomeIcon icon={faSortDown}/></ButtonIcon>
            </div>
            <p className='text-center font-light text-gray-400'>{projects[0].description}</p>
          
            <ul className='flex overflow-hidden ' >
            {projects.map((item) => {
                return (
                    <div className='flex justify-center flex-col '> 
                        <div className='flex shadow-slate-300 mx-5 my-6'>
                            <ButtonIcon>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            </ButtonIcon>
                        
                            <div className='bg-gray-200 h-96 w-96 relative'></div>
                          
                            <ButtonIcon>
                            <FontAwesomeIcon icon={faArrowRight}/>
                            </ButtonIcon>
                            
                        
                        </div>
                        <p className='border-t-2 px-16 py-4 font-normal text-gray-500 text-left p-1 font-light'>
                            Comentário
                        </p>
                    </div>
                )
               
            })}
            </ul>

        </div>
        
    );

};

export default TailwindcssPage;