import React, { Component } from 'react';
import classes from './LoginForm.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Line from '../../hoc/Grid/Line';
import Col from '../../hoc/Grid/Col';

class LoginForm extends Component {
    
    state = {
        cpf: '',
        pwd: ''    
    };

    submitLogin = () => {
        const { cpf, pwd } = { ...this.state };

        const hasCpf = cpf.trim('').length > 0;
        const hasPwd = pwd.trim('').length > 0;
        if (!hasCpf && !hasPwd) {
            window.alert('Informe seu documento e senha para prosseguir.');
        } else if (!hasCpf) {
            window.alert('Informe seu documento para prosseguir.');
        } else if (!hasPwd) {
            window.alert('Informe sua senha para prosseguir.');
        } else {
            window.alert("Logado com sucesso");
        }
    }

    onChangeHandler = (target, value) => {
        let updatedState = { ...this.state };
        updatedState[target] = value;
        this.setState({...updatedState});
    }

    render() {

        const { cpf, pwd } = { ...this.state };

        return (
            <div className={classes.LoginForm}>
                <Line>
                    <Col className="col-12">
                        <Input type="text" label="CPF" value={cpf} changed={ (e) => {
                            this.onChangeHandler('cpf', e.target.value);
                        }}/>
                    </Col>
                </Line>
                <Line>
                    <Col className="col-12">
                        <Input type="password" label="Senha" value={pwd} changed={ (e) => {
                            this.onChangeHandler('pwd', e.target.value);
                        }}/>
                    </Col>
                </Line>
                <Line>
                    <Button 
                        type="button"
                        clicked={this.submitLogin}>Entrar</Button>
                </Line>
            </div>
        );
    }
}

export default LoginForm;