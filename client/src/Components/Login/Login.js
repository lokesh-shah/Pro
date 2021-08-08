import React, {useState} from "react";
import { NavLink, useHistory} from "react-router-dom";
import "../Login/Login.css";
import loginimg from "../../images/login.png";
const Login = () => {

  const history = useHistory();
  const [email,setEmail]= useState('');

  const[password,setPassword]= useState(''); 

   
  const loginusr =async(e) => {
    e.preventDefault();
    const res = await fetch('/signin',{

      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify({email,password}) 
      
    }) 

    const data=res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login successful");
      history.push("/")
    }
  }

  return (
    <>
      <div className="container">
        <div className="LoginPage">
          <div className="login-image">
            <figure>
              <img src={loginimg} alt="loginimg" />
            </figure>

            <NavLink
              to="/signup"
              id="signin-link"
              className="signin-image-link">
              Create an account
            </NavLink>
          </div>

          <form  method="POST" className="login">
            <h2>Login Page</h2>
            <div className="form-group">
              <label for="name">
                <i class="zmdi zmdi-account material-icons-name"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-field"
                autocomplete="off"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label for="password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-field"
                autocomplete="off"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="form-button">
              <input type="submit" name="signin" id="signin" value="Login" onClick={loginusr} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
