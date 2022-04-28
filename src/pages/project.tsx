
import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { ButtonIcon } from '../components/ButtonIcon';
import { Input } from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd, faSortDown } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        id: 0,
        name: "MEUS PROJETOS",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 1,
        name: "MEUS PROJETOS1",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 2,
        name: "MEUS PROJETOS2",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 3,
        name: "MEUS PROJETOS3",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 4,
        name: "MEUS PROJETOS",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 5,
        name: "MEUS PROJETOS1",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 6,
        name: "MEUS PROJETOS2",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 7,
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
            
            {projects.map((item) => {
                return (
                    <div className='shadow-slate-300 mx-5 my-2'>
                        <p className='text-gray-500 text-left p-1 font-light'>
                            {item.name}
                        </p>
                        <div className='bg-gray-200 h-20 relative '></div>
                    </div>
                )
            })}

        </div>
        
    );

};

export default TailwindcssPage;