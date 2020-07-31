import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import routes from "./routes";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (


          <Router>

              <Switch>

                  {routes.map((route, index)=> {
                      return(

                          <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              render={(props)=>{
                                  return (
                                      <route.layout {...props}>
                                          <route.component  {...props}/>
                                      </route.layout>
                                  )
                              }}
                          />
                      )
                  })}
                  <Redirect to={"/"} />
              </Switch>
          </Router>

  );
}

export default App;
