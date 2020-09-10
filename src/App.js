import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from '../src/components/layout/header/navbar'
import './components/icons'
import Home from '../src/components/home/home'
import Login from '../src/components/authentication/login/login'
import Signup from '../src/components/authentication/signup/signup'
import PersonalInfo from './components/authentication/personalInformation/personalInfo'
import UploadeResume from './components/authentication/uploadResume/uploadResume'
import './App.css';


function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path ='/Home' component={Home}/>
        <Route path ='/Login' component={Login}/>
        <Route path ='/Signup' component={Signup}/>
        <Route path ='/PersonalInformation' component={PersonalInfo}/>
        <Route path ='/UploadResume' component={UploadeResume}/>

        </Switch>
        
      </div>
      </BrowserRouter>
    
    
  );
}

export default App;
