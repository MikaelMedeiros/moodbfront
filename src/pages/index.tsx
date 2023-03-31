import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'

import styles from '../styles/Home.module.css'


import Link from 'next/link';
import { Button } from '../components/Button';


const Home: NextPage = () => {
  return (

    // <h1 className="title">
    //   <Link href="/signin">
    //     <a>Acessar tela de Signin</a>
    //   </Link>
    // </h1>
  <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Moody</h1>
      <div className="flex flex-col justify-center items-center">
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
      </div>
    </div>
  </div>

  )
}

export default Home
