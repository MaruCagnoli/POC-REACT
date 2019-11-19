import React, {Component} from 'react';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';

import Platillos from './Platillos';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';




class Lienzo extends Component{
	render(){
		console.log(this.props.location);	
		console.log(this.props.match);	
		console.log(this.props.history);	

		return(
				<div className="container">
						<div className="jumbotron">
							<h2>Nombre de Tienda</h2>
						</div>
				
							<div>
								<div>
									<Link className="btn btn-danger active" to="/platillos">Platillos</Link>
									<Link className="btn btn-danger active" to="/bebidas">Bebidas</Link>
								</div>
								<div>
									<Route path="/bebidas" component={Bebidas}/>
									<Route path="/platillos" component={Platillos}/>
								</div>
							</div>
					     
						<Pedidos/>
				</div>
			);
	}
}
export default Lienzo;