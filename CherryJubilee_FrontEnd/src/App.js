import React from 'react';
import './App.css';
import mainpage from './mainpage/mainpage';
import login from './user/login';
import signup from './user/signup';
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <main>
            <Route exact path="/" component={mainpage} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
        </main>
      </Router> 
    </div>
  );
}

export default App;
