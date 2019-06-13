import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyD2KkEu1NepZwkxLpi1HxpHNlFhwgHyum0",
  authDomain: "im-tutorial-2eb49.firebaseapp.com",
  databaseURL: "https://im-tutorial-2eb49.firebaseio.com",
  projectId: "im-tutorial-2eb49",
  storageBucket: "im-tutorial-2eb49.appspot.com",
  messagingSenderId: "425758985603",
  appId: "1:425758985603:web:31bea02a1c156ede"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
