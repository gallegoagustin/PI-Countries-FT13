import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/landing/Landing.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Activity from './pages/activity-form/Activity.jsx';
import Detail from './pages/country-detail/Detail.jsx';
import NavBar from './components/nav/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing}/>
      <Route path='/:s' component={NavBar}/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/detail/:id' component={Detail}/>
      <Route path='/activity' component={Activity}/>
      <Route path='/:s' component={Footer}/>
    </div>
  );
}

export default App;