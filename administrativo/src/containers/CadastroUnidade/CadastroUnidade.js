import React, { Component } from 'react';
import classes from './CadastroUnidade.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Line from '../../hoc/Grid/Line';
import Col from '../../hoc/Grid/Col';

const nano = require('nano')('http://localhost:5984');

class CadastroUnidade extends Component {

    state = {
        nome: '',
        cnes: '',
        bairro: '',
        endereco: ''
    };

    registerUnit = () => {
    	const { nome, cnes, bairro, endereco } = { ...this.state};
        //Registrar no DB
        nano.use('rp2_saude_unidades').insert({nome: nome, cnes: cnes, bairro:bairro, endereco:endereco},
		function(err, body) {
	  	if (!err)
	    		console.log(body);
		});
    }

    submitLogin = () => {
        let { nome, cnes, bairro, endereco } = { ...this.state };

        const hasNome = nome.trim('').length > 0;
        const hasCnes = cnes.trim('').length > 0;
        const hasBairro = bairro.trim('').length > 0;
        const hasEndereco = endereco.trim('').length > 0;

        if (!hasNome) {
            window.alert('O nome da unidade é necessário para o cadastro.');
        } else if (!hasCnes) {
            window.alert('O número de CNES da unidade é necessário para o cadastro.');
        } else if (!hasBairro) {
            window.alert('O bairro da unidade é necessário para o cadastro.');
    	} else if (!hasEndereco) {
            window.alert('O endereço é necessário para o cadastro.');
        }
         else {
         	this.registerUnit();
            //Limpa os campos
         	nome = "";
         	cnes = "";
         	bairro = "";
         	endereco = "";
         	this.setState({nome, cnes, bairro, endereco});
        }
    }

    onChangeHandler = (target, value) => {
        let updatedState = { ...this.state };
        updatedState[target] = value;
        this.setState(updatedState);
    }

    render() {
        const { nome, cnes, bairro, endereco } = { ...this.state };

        return (
            <div className={classes.CadastroUnidade}>
                <Line>
                    <Col className="col-12">
                        <Input type="text" label="Nome" value={nome} changed={ (e) => {
                            this.onChangeHandler('nome', e.target.value);
                        }}/>
                    </Col>
                </Line>
                <Line>
                    <Col className="col-12">
                        <Input type="text" label="CNES" value={cnes} changed={ (e) => {
                            this.onChangeHandler('cnes', e.target.value);
                        }}/>
                    </Col>
                </Line>
                <Line>
                    <Col className="col-12">
                        <Input type="text" label="Bairro" value={bairro} changed={ (e) => {
                            this.onChangeHandler('bairro', e.target.value);
                        }}/>
                    </Col>
                </Line>
                <Line>
                    <Col className="col-12">
                        <Input type="text" label="Endereço" value={endereco} changed={ (e) => {
                            this.onChangeHandler('endereco', e.target.value);
                        }}/>
                    </Col>
                </Line>
                <Line>
                    <Button 
                        type="button"
                        clicked={this.submitLogin}>Entrar</Button>
                </Line>
            </div>
        )
    }
}

export default CadastroUnidade;