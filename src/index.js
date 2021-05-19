import React from 'react';
import ReactDOM from 'react-dom';
//import Nav from './components/Router/nav';
//import { BrowserRouter, Route } from 'react-router-dom'
//import Home from './components/Router/home';
//import About from './components/Router/about';
//import Index from './components/Router/index';
//import Login from './components/Router/login';
//import Grids from './components/Grids/Grids';
import Grids2 from './components/Grids2/Grids2';
//import App from './App';
//import CompA from './components/useContext/CompA';
//import GitAppMain from './components/GitApp/GitAppMain';
//import LoginForm from './components/loginForm/LoginForm';
//import UseEffect2 from './components/useEffect/UseEffect2';
//import UseEffects1 from './components/useEffect/UseEffects1';

ReactDOM.render(
  <React.StrictMode>
      {/* <BrowserRouter>
          <Nav/>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/index">
            <Index/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </BrowserRouter> */}
        <Grids2/>
  </React.StrictMode>,
  document.getElementById('root')
);