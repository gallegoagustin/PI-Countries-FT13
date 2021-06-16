import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActivities, getAllCountries, getCountries, switchLoading } from './actions/index.js';
import Landing from './pages/landing/Landing.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Activity from './pages/activity-form/Activity.jsx';
import Detail from './pages/country-detail/Detail.jsx';
import NavBar from './components/nav/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App(props) {
  
  useEffect(() => {
    const start = async () => {
        await props.getCountries();
        await props.getAllCountries();
        props.switchLoading(false);
      }
      start();
  }, [])
  
  return (
    <>
      <Route exact path='/' component={Landing}/>
      <Route path='/:s' component={NavBar}/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/detail/:id' component={Detail}/>
      <Route path='/activity' component={Activity}/>
      <Route path='/:s' component={Footer}/>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => dispatch(getCountries()),
    getAllCountries: () => dispatch(getAllCountries()),
    getActivities: () => dispatch(getActivities()),
    switchLoading: () => dispatch(switchLoading())
  };
}

export default connect(null, mapDispatchToProps)(App);