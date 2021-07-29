import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Contact from './Components/Contact'


function App() {
  return (
    <>
        <NavBar/>
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
        
    </>
  )
}
export default App
