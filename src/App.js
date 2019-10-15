import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'

export default function App () {  
    return(
      <div>
        
        <HashRouter> 

        <Header />

        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/addinventory'  component={Form}/>
          <Route path='/editproduct/:id'  component={Form}/>
        </Switch>
        </HashRouter>
      
      </div>          
    ) 
}

