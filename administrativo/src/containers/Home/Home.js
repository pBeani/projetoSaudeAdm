import React, { Component } from 'react';
import classes from './Home.css';

import Menu from '../../components/Navigation/Menu/Menu';
import MainContent from '../../components/MainContent/MainContent';

class Home extends Component {
    state = {};

    render () {
        return(
            <div className={classes.Home}>
                <Menu path={this.props.match.path} />
                <MainContent path={this.props.match.path} />
            </div>
        )
    }
}

export default Home;