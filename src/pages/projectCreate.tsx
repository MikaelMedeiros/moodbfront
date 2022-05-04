
import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { ButtonIcon } from '../components/ButtonIcon';
import { Input } from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd, faSortDown, faArrowLeft, faSave} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const projects = [
    {
        id: 0,
        name: "Nome do projeto/cliente 01",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 1,
        name: "Nome do projeto/cliente 02",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 2,
        name: "Nome do projeto/cliente 03",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 3,
        name: "Nome do projeto/cliente 04",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 4,
        name: "Nome do projeto/cliente 05",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 5,
        name: "Nome do projeto/cliente 06",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 6,
        name: "Nome do projeto/cliente 07",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    },
    {
        id: 7,
        name: "Nome do projeto/cliente 08",
        url: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_960_720.png"
    }
]

const TailwindcssPage: NextPage  = () => {

    return (
        <div className="content-between relative text-center">
            <div className='flex justify-between align-middle px-2 py-15 border-b-2 border-gray-300'>
               <Link href="/projectList"><ButtonIcon><FontAwesomeIcon icon={faArrowLeft}/></ButtonIcon></Link>
               <Link href="/projectList"><ButtonIcon><FontAwesomeIcon icon={faSave}/></ButtonIcon></Link>
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
        
    );

};

export default TailwindcssPage;