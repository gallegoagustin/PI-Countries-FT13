import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/landing/Landing.jsx';
import Home from './pages/home/Home.jsx';
import NavBar from './components/nav/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={NavBar}/>
      <Route path='/home' component={Home}/>
      <Route path='/home' component={Footer}/>
    </div>
  );
}

export default App;