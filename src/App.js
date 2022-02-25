import React from "react";
import {Switch,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact'
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";

function App() {
  return (
   <React.Fragment>
     <List/>
     <Switch>
       <Route exact path="/"  component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/contact' component={Contact}/>
       <Route component={Error}/>
     </Switch>
     <Footer/>
   </React.Fragment>
  );
}

export default App;
