import React from 'react';
import classes from './Menu.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const Menu = props => {

    return (
        <nav className={classes.Menu}>
            <ul>
                <NavigationItem link={props.path + "/cadastroUsuario"}>Cadastro de Usuário</NavigationItem>
                <NavigationItem link={props.path + "/listaUsuarios"}>Lista de Usuários</NavigationItem>
                <NavigationItem link={props.path + "/cadastroUnidade"}>Cadastro de Unidade</NavigationItem>
                <NavigationItem link={props.path + "/listaUnidades"}>Lista de Unidades</NavigationItem>  
                <NavigationItem link={props.path + "/dadosUnidade"}>Dados da Unidade</NavigationItem>              
            </ul>
        </nav>
    )
};

export default Menu;