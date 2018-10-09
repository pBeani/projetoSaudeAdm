import React from 'react';
import classes from './MainContent.css';
import ListaUnidades from '../../containers/ListaUnidades/ListaUnidades';
import CadastroUnidade from '../../containers/CadastroUnidade/CadastroUnidade';

const MainContent = props => {

    let section = null;

    // por enquanto, colocar esse valor manualmente para cair no case do componente que vai desenvolver
    switch ('cadastroUnidade') {

        case 'listaUnidades':
            section = <ListaUnidades />;
            break;

        case 'cadastroUnidade':
            section = <CadastroUnidade />;
            break;

        default: 
            section = <section>Default</section>;
    }

    return (
        <main className={classes.MainContent}>
            {section}
        </main>
    )
};

export default MainContent;