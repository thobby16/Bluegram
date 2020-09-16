import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from '../src/components/layout/header/navbar'
import './components/icons/jobFieldIcons/tech'
import Home from '../src/components/home/home'
import Login from '../src/components/authentication/login/login'
import Signup from '../src/components/authentication/signup/signup'
import PersonalInfo from './components/authentication/personalInformation/personalInfo'
import UploadeResume from './components/authentication/uploadResume/uploadResume'
import Dashboard from './components/dashboard/dashboard'
import HomeProfile from './components/dashboard/homeProfile/homeProfile'
import FindJobs from './components/layout/findJobs/findjobs'
import MyJobs from './components/dashboard/myJob/myJobs'
import './App.css';
import SearchJob from './components/dashboard/searchJob/searchJob';
import Apply from './components/dashboard/apply/apply';
import Application from './components/dashboard/applicationForm/application';


function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path ='/Home' component={Home}/>
        <Route  path ='/Dashboard' component={Dashboard}/>
        <Route path ='/Login' component={Login}/>
        <Route path ='/FindJobs' component={FindJobs}/>
        <Route path ='/Signup' component={Signup}/>
        <Route path ='/PersonalInformation' component={PersonalInfo}/>
        <Route path ='/UploadResume' component={UploadeResume}/>
        <Route path ='/HomeProfile' component={HomeProfile}/>
        <Route path ='/MyJobs' component={MyJobs}/>
        <Route path ='/SearchJobs' component={SearchJob}/>
        <Route path ='/Apply' component={Apply}/>
        <Route path ='/ApplicationForm' component={Application}/>

        </Switch>
        
      </div>
      </BrowserRouter>
    
    
  );
}

export default App;
