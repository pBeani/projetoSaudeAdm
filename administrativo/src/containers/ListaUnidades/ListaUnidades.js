import React, { Component } from 'react';
import classes from './ListaUnidades.css';
import Line from '../../hoc/Grid/Line';
import Col from '../../hoc/Grid/Col';

const nano = require('nano')('http://localhost:5984');

/*listUnits = () => {
    nano.db.use('rp2_saude_adm').list().then((body) => {
	  return(body);
	});
}*/

class ListaUnidades extends Component {

    state = {};

	render() {
        return null;
    }


}

export default ListaUnidades;