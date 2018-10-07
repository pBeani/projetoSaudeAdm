import React, { Component } from 'react';
import classes from './Home.css';

import Menu from '../../components/Navigation/Menu/Menu';
import MainContent from '../../components/MainContent/MainContent';

class Home extends Component {
    state = {};

    render () {

        return(
            <div className={classes.Home}>
                <Menu />
                <MainContent />
            </div>
        )
    }
}

export default Home;