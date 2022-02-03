import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './fbase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import ContactUs from './Contact';


const promise = loadStripe('pk_test_51KLinmSG2JN0CZOvBaGXKpzg5kLk1fpAjyry1CtOljSF7qROcyGQzRu51d06GMFRBQlVQrt5Qj00agxQSHmtLPVP00IXnB3962')


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
     <div className="app">
     
       <Switch>
       <Route path="/checkout">
       <Header />
       <Checkout />
      </Route>
      <Route path="/login">
        <Login/>
       
      </Route>
      <Route path="/contact">
        <Header />
        <ContactUs />
       
      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
          <Payment />

        </Elements>
        
       
      </Route>
        <Route path="/">
        <Header />
        <Home />
        
      </Route> 
       
      </Switch>
    </div>    
    </Router>
  );
}

export default App;
