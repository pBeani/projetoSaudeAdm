import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Line from '../../hoc/Grid/Line';
import Col from '../../hoc/Grid/Col';

import stateData from '../../data/estados';
import sexData from '../../data/sexo';
import typeData from '../../data/tipoUsuario';
import cidData from '../../data/cid';

import classes from './CadastroUsuario.css';

const nano = require('nano')('http://localhost:5984');

class CadastroUsuario extends Component {
    
    state = {
        form: {
            nome: {
                type: 'text',
                label: 'Nome',
                value: ''
            },
            cpf: {
                type: 'text',
                label: 'CPF',
                value: ''
            },
            email: {
                type: 'text',
                label: 'Email',
                value: ''
            },
            senha: {
                type: 'password',
                label: 'Senha',
                value: ''
            },
            sexo: {
                type: 'select',
                label: 'Nome',
                value: sexData[0].value,
                options: sexData
            },
            nascimento: {
                type: 'date',
                label: 'Data de nascimento',
                value: ''
            },
            estado: {
                type: 'select',
                label: 'Estado',
                value: stateData[0].value,
                options: stateData
            },
            cidade: {
                type: 'text',
                label: 'Cidade',
                value: ''
            },
            bairro: {
                type: 'text',
                label: 'Bairro',
                value: ''
            },
            rua: {
                type: 'text',
                label: 'Rua',
                value: ''
            },
            numero: {
                type: 'text',
                label: 'Número',
                value: ''
            },
            telefone: {
                type: 'text',
                label: 'Telefone',
                value: ''
            },
            cartao: {
                type: 'text',
                label: 'Cartão SUS',
                value: ''
            },
            tipo: {
                type: 'select',
                label: 'Tipo de Usuário',
                value: typeData[0].value,
                options: typeData,
                customChange: (e) => {
                    this.userTypeChanged(e)
                }
            },
            unidade: {
                type: 'text',
                label: 'Unidade',
                value: '',
                hide: true
            }
            // doencas: {
            //     type: 'array',
            //     label: 'Doenças',
            //     value: [],
            //     options: cidData,
            //     hide: true
            // }
        }
    };

    registerUser = () => {
        // Implementar registro no BD
        // Não limpei os campos porque acho melhor redirecionar 
        // pra tela de listagem inves de permanecer nessa pagina
        console.log('Usuário Cadastrado com Sucesso');
    }

    submitUser = () => {
        let { form } = { ...this.state };
        let valid = true;

        for (let field in form) {
            if (form[field].value.trim() === '') {
                valid = false;
                break;
            }
        }

        if(valid) {
            this.registerUser();
        } else {
            window.alert('Preencha todos os campos para realizar o cadastro!');
        }
    }

    userTypeChanged = () => {
        let hide = true;
        const value = this.state.form.tipo.value;

        if (value === 'FUNCIONARIO' || value === 'MEDICO') {
            hide = false;
        }

        let updatedForm = {
            ...this.state.form
        };

        let updatedFormElement = {
            ...updatedForm['unidade']
        };

        updatedFormElement.hide = hide;
        updatedForm['unidade'] = updatedFormElement;

        this.setState({ form: updatedForm });
    }

    onChangeHandler = (event, key) => {
        console.log(event, ' - ', key)

        let updatedForm = {
            ...this.state.form
        };

        let updatedFormElement = {
            ...updatedForm[key]
        };

        updatedFormElement.value = event.target.value;
        updatedForm[key] = updatedFormElement;



        this.setState({ form: updatedForm }, () => {
            if (this.state.form[key].customChange) {
                this.state.form[key].customChange();
            }
        });
    }

    render() {
        let formElements = [];

        for (let key in this.state.form) {
            formElements.push({
                key: key,
                config: this.state.form[key]
            });
        }

        return (
            <div className={classes.CadastroUsuario}>
                <h3>Dados do Usuário</h3>
                <form>
                    {formElements.map(formElement => {
                        return (
                            !formElement.config.hide ?
                                <Line key={formElement.key}>
                                    <Col className='col-12'>
                                        <Input
                                            type={formElement.config.type}
                                            value={formElement.config.value}
                                            label={formElement.config.label}
                                            options={formElement.config.options || []}
                                            changed={(event) => { this.onChangeHandler(event, formElement.key) }} />
                                    </Col>
                                </Line> : null
                        )
                    })}
                    <Line>
                        <Button
                            type="button"
                            clicked={this.submitUser}>Salvar</Button>
                    </Line>
                </form>
            </div>
        )
    }
}

export default CadastroUsuario;