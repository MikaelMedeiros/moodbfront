import type { NextPage } from 'next'
import { Logo, Podcast  }  from '../assets/svg';
import Link from 'next/link';
import { Button } from '../components/Button';
import Image from 'next/image';
import { ImGooglePlus2, ImFacebook2 } from 'react-icons/im';


const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen flex flex-col  justify-evenly items-center">
      <div className='h-64 w-72 flex items-center justify-center'>
        <Image src={Logo} height={35} width={200} alt="Logo" />
      </div>
      <div className="flex flex-col gap-2 h-80 w-72 justify-evenly ">
        <Link href="/signin">
          <Button variant="black" >
            Log in
          </Button>
        </Link> 
        <Link href="/signup">
          <Button variant="white" >
            Sing in
          </Button>
        </Link>
        <span className='text-center text-xs mt-12'>
          Ou faça login com:
        </span>
        <div className='flex justify-center gap-1 w-full h-8 '>
          <Link href="/">
            <ImGooglePlus2 className='cursor-pointer' size={30} />
          </Link>
          <Link href="/">
            <ImFacebook2 className='cursor-pointer' size={30} />
          </Link>
        </div>
        <div className='w-72 flex items-end justify-center '>
          <Image  src={Podcast} height={350} width={200} alt="Podcast" />
        </div>
      </div>
    </div>
  )
}

export default Home
