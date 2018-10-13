import React from 'react';
import classes from './MainContent.css';
import ListaUnidades from '../../containers/ListaUnidades/ListaUnidades';
import CadastroUnidade from '../../containers/CadastroUnidade/CadastroUnidade';
import CadastroUsuario from '../../containers/CadastroUsuario/CadastroUsuario';

const MainContent = props => {

    let section = null;

    // por enquanto, colocar esse valor manualmente para cair no case do componente que vai desenvolver
    switch ('cadastroUsuario') {

        case 'listaUnidades':
            section = <ListaUnidades />;
            break;

        case 'cadastroUnidade':
            section = <CadastroUnidade />;
            break;
        
        case 'cadastroUsuario':
            section = <CadastroUsuario />;
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