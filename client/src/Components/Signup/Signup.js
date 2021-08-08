import {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../Signup/Signup.css";
import signup from "../../images/signup3.png";

const Signup = () => {

  const history = useHistory();
  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const postData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify({name, email, phone, work, password, cpassword})

    });

    const data = await res.json();
    
    if(data.status === 422 || !data){
      window.alert("Invalid Registraction");
      console.log("Invalid Registraction");
    }
    else{
      window.alert("successful Registraction");
      console.log("successful Registraction");
      
      history.push("/login");
    }
  }
  return (
    <>
      <div className="container">
        <div className="RegisterPage">
          <form method= "POST" id="register">
            <h2>Sign Up</h2>
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
                value={user.name}
                onChange={handleInput}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label for="email">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-field"
                autocomplete="off"
                value={user.email}
                onChange={handleInput}
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label for="Phone">
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                class="form-field"
                autocomplete="off"
                value={user.phone}
                onChange={handleInput}
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group">
              <label for="Work">
                <i class="zmdi zmdi-slideshow material-icons-name"></i>
              </label>
              <input
                type="text"
                name="work"
                id="work"
                class="form-field"
                autocomplete="off"
                value={user.work}
                onChange={handleInput}
                placeholder="Your Profession"
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
                value={user.password}
                onChange={handleInput}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label for="cpassword">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                class="form-field"
                autocomplete="off"
                value={user.cpassword}
                onChange={handleInput}
                placeholder="Confirm Password"
              />
            </div>

            <div className="form-button">
              <input type="submit" name="signup" id="signup" value="Register" onClick={postData}/>
            </div>
          </form>

          <div className="signup-image">
            <figure>
              <img src={signup} alt="signupimg" />
            </figure>

            <NavLink to="/login" id="signup-link" className="signup-image-link">
              I am already register
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
