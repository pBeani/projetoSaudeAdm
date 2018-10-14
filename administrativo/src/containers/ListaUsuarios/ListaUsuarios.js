import React, { Component } from 'react';
import Line from '../../hoc/Grid/Line';
import Col from '../../hoc/Grid/Col';
import classes from './ListaUsuarios.css';
import { withRouter } from 'react-router-dom';

import userMock from '../../data/usuarios';

// TODO IMPORTAR USER MOCK
class ListaUsuarios extends Component {

    state = {
        userList: []
    };

    selectUser = (user) => {
        this.props.history.push({
            pathname: 'cadastroUsuario',
            state: {
                user: user
            }
        });
    }

    componentDidMount() {
        // pegar os usuarios do banco
        const users = userMock;
        this.setState({ userList: users });
    }

    render() {
        const { userList = [] } = { ...this.state };
        return (
            <div className={classes.UserList}>
                <h1><span>{userList.length}</span> {userList.length === 1 ? 'Usuário Cadastrado' : 'Usuários Cadastrados'}</h1>
                {userList.map((user) => {
                    let fullAddress = `${user.rua}, ${user.numero}. ${user.bairro}, ${user.cidade} - ${user.estado}.`
                    return (
                        <div
                            className={classes.User}
                            onClick={() => { this.selectUser(user) }}
                            key={user.id}>
                            
                            <h4>{user.nome}</h4>
                            <Line>
                                <Col>
                                    <span className={classes.Type}>{user.tipo}</span>
                                </Col>
                            </Line>
                            <div className={classes.Info}>
                                <Line>
                                    <Col>
                                        <span>{fullAddress}</span>
                                    </Col>
                                </Line>
                                <Line>
                                    <Col className={'col-6'}>
                                        <span>{user.email}</span>
                                    </Col>
                                    <Col className={'col-6'}>
                                        <span>{user.telefone}</span>
                                    </Col>
                                </Line>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default withRouter(ListaUsuarios);