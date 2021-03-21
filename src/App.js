import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Calculator from './calculator';
import Welcome from './Welcome';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';
import Login from './login'

import { connect } from "react-redux"
import React, { useState ,useEffect} from 'react';
import { Helmet } from "react-helmet";
import Ad from 'react-google-publisher-tag';
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"
// import { Bling as GPT } from "react-gpt";

// GPT.enableSingleRequest();
function App(props) {
  const [count, setCount] = useState({ count: 0, text: 'What Next' });
  const [todo, setTodo] = useState({ text: 'What you do?' });
  useEffect(()=>{
    localStorage.setItem('userName','user');
    localStorage.setItem('password','pass');
  })
  const increment = () => {
    setTodo(prevState => ({ ...prevState, text: 'Increment' }));

  }
  
  const decrement = () => {
    setTodo(prevState => ({ ...prevState, text: 'decrement' }))
  }
  // useDfpSlot({
  //   path: '/22297686590/listingloop.desktop/details',
  //   size: [300, 250],
  //   id: 'div-gpt-ad-1614569560526-0',
  // });
  return (
    <Login></Login>
    //<Calculator></Calculator>
    // <Router>
    // <div className="App">
   
    //   <Switch>
    //     <Route exact path='/' component={Login} ></Route>
    //     <Route exact path="/home" render={({ history, location }) =>
    //     <Welcome></Welcome>}
    //     />
    //   </Switch>
      
    // </div>
    // </Router>
  );

}
const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
