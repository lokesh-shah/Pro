import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Contact from './Components/Contact/Contact'
import Errorpage from './Components/ErrorPage/Errorpage'

function App() {
  return (
    <>
        <NavBar/>
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>

        <Route path="/about">
        <About/>
        </Route> 

        <Route path="/signup">
        <Signup/>
        </Route> 

        <Route path="/contact">
        <Contact/>
        </Route> 

        <Route path="/login">
        <Login/>
        </Route> 
        
        <Route>
        <Errorpage/>
        </Route>
        </Switch>
    </>
  )
}
export default App
