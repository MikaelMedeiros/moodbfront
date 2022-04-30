import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { withAuth } from '../hof/withAuth';
import { httpExtern } from '../utils/http';

type Props = {
    
};
export const PaginaPrivada: NextPage = (props: Props) => {
    return (
        <div>
           Você está autenticada! 
        </div>
    );
};

export const getServerSideProps = withAuth(async (ctx: GetServerSideProps , cookies: any) => {
   const { data } = await httpExtern.get("/moodbs/rafael/2/enter", {
        headers: {
            'Authorization': `Bearer ${cookies.token}`,
        },
        params: {
            name: 'Nome do cliente'
        }
    });     
});