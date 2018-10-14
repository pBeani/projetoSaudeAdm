import React from 'react';
import classes from './MainContent.css';
import ListaUnidades from '../../containers/ListaUnidades/ListaUnidades';
import CadastroUnidade from '../../containers/CadastroUnidade/CadastroUnidade';
import CadastroUsuario from '../../containers/CadastroUsuario/CadastroUsuario';
import ListaUsuarios from '../../containers/ListaUsuarios/ListaUsuarios';
import { Switch, Route, withRouter } from 'react-router-dom';

const MainContent = props => {

    let section = null;
    const path = props.path;
    // por enquanto, colocar esse valor manualmente para cair no case do componente que vai desenvolver
    // switch ('listaUsuarios') {

    //     case 'listaUnidades':
    //         section = <ListaUnidades />;
    //         break;

    //     case 'cadastroUnidade':
    //         section = <CadastroUnidade />;
    //         break;

    //     case 'listaUsuarios':
    //         section = <ListaUsuarios />;
    //         break;

    //     case 'cadastroUsuario':
    //         section = <CadastroUsuario />;
    //         break;

    //     default:
    //         section = <section>Default</section>;
    // }

    return (
        <main className={classes.MainContent}>
            <Switch>
                <Route path={path + '/listaUnidades'} component={ListaUnidades} />
                <Route path={path + '/cadastroUnidade'} component={CadastroUnidade} />
                <Route path={path + '/listaUsuarios'} component={ListaUsuarios} />
                <Route path={path + '/cadastroUsuario'} component={CadastroUsuario} />
                <Route path={path} render={() => <section>Default</section>} />
            </Switch>
        </main>
    )
};

export default withRouter(MainContent);