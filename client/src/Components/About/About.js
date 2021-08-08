import React,{useEffect, useState} from "react";
import "../About/About.css";
import proPic from "../../images/pro2.png";
import {useHistory} from "react-router-dom"

const About = () => {

  const history = useHistory();
  const [userData, setUserData]= useState({});

  const callAboutPage = async () => {

    try{
        const res = await fetch('/about',{
          method: "GET",
          headers:{
            Accept:"application/json",
            "Content-type": "application/json"
          },
          credentials:"include"
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }

    }catch(err){
        console.log(err);
        history.push("/login");
    }
  }
useEffect(() => {
  callAboutPage();
}, [])


  return (
    <>
      <div className="container">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="pro-Pic">
                <img src={proPic} alt="Profile-Pic" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5 ">
                  Ranking: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs mb-3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home-tab"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile-tab"
                      aria-selected="false"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-button"
                name="btn"
                value="Edit-Profile"
              />
            </div>
          </div>

          <div className="row">
            {/* left side url */}

            <div className="col-md-4">
              <div className="profile-work">
                <p className="profile-t1">Work Link</p>
                <a className="profile-t2" href="https://github.com/lokesh-shah/Pro" target="Lokesh">
                  GitHub
                </a>
              </div>
            </div>

            {/* Right side data toggle */}

            <div className="col-md-8 pl-5 about info">
              <div className=" tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                    
                </div>

{/* timeline content */}
<div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"> 
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>

                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>

                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>

                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>English level</label>
                    </div>

                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>

                    <div className="col-md-6">
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>
            </div>
              </div>

          </div> {/*Row*/} 
        </form>
      </div>
    </>
  );
};



export default About;
