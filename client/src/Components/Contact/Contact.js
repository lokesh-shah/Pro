import React, {useEffect,useState}from "react";
import "../Contact/Contact.css";

const Contact = () => {


  // const history = useHistory();
  const [userData, setUserData]= useState({name:"", email:"", message:""});

  const userContact = async () => {

    try{
        const res = await fetch('/getData',{
          method: "GET",
          headers:{
            // Accept:"application/json",
            "Content-type": "application/json"
          },
          // credentials:"include"
        });

        const data = await res.json();
        console.log(data);
        setUserData({...userData, name:data.name, email:data.email});

        if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }

    }catch(err){
        console.log(err);
       // history.push("/login");
    }
  }
useEffect(() => {
  userContact();
}, [])

//we are storing data in state

const handleInputs = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setUserData({...userData, [name]:value});
}

//send data to backend

const contactForm = async (e) => {
    e.preventDefault();
    const {name, email, message}= userData;

    const res = await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, message})
    });

    const data = await res.json();

    if(!data){
      console.log("message not sent");

    }else{
      alert("Message Send");
      setUserData({...userData,message:""});
    }
}

  return (

    <>
      
      <div className="container">
        
          <div className="contact-section">
            <div className="contact-info">
                  <div><i class="zmdi zmdi-google-maps"></i>Address,City,Country</div>
                  <div><i class="zmdi zmdi-email"></i>contact@email.com</div>
                  <div><i class="zmdi zmdi-phone"></i>+00 0000 000 000</div>
                  <div><i class="zmdi zmdi-time"></i>Mon - Fri 9:00 AM to 6:00 PM </div>
            </div>

            <div className="contact-form">
            <h1>Contact Us</h1>
            <form method="POST" className="contact-det">
              <input type="text" name="name" class="text-box" name="name" onChange={handleInputs} value={userData.name} placeholder="Your Name" requird/>
              <input type="email" name="email" class="text-box"name="email" onChange={handleInputs} value={userData.email} placeholder="Your Email" requird/>
              <textarea name="message" rows="5"name="message" onChange={handleInputs} value={userData.message}placeholder="Your Message" requird/>
              <input type="submit" name="submit" class="send-button" onClick={contactForm} value="Send"/>
            </form>

            </div>
          </div>
        </div>
        
    </>
  );
};

export default Contact;
