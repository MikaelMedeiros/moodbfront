import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { withAuth } from '../hof/withAuth';
import http from '../utils/http';

interface PaginaPrivadaProps {
    timestamp: string
};
const PaginaPrivada: NextPage<PaginaPrivadaProps> = (props) => {
    return (
        <div>
           Você está autenticada! {props.timestamp}
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

export default PaginaPrivada;