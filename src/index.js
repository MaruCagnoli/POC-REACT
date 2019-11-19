import React from 'react';
import ReactDOM from 'react-dom';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import './index.css';
import Lienzo from './Lienzo';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
import { BrowserRouter, Route} from 'react-router-dom';

  const RourterDeLienzo = (
    <BrowserRouter>
        <Route path="/" component={Lienzo}/>
    </BrowserRouter>
  );

  ReactDOM.render(
  RourterDeLienzo,
  document.getElementById('root')
);
