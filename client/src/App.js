import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/landing/Landing.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Route path='/' component={Landing}/>
    </div>
  );
}

export default App;