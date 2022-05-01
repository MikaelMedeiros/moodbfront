import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { withAuth } from '../hof/withAuth';
import http from '../utils/http';

type Props = {
    
};
const PaginaPrivada: NextPage = (props: Props) => {
    return (
        <div>
           Você está autenticada! 
        </div>
    );
};

export const getServerSideProps = withAuth(async (ctx: GetServerSideProps , cookies: any) => {
    
    // const { data } = await http.get("/moodbs/", {
    //     headers: {
    //         'token': `${cookies.token}`,
    //     }
    // });     

    return {
        props: {}
    }
});

export default PaginaPrivada;