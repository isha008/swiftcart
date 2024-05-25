import React, { useState,useContext } from "react";
import "../userSignup/userSignup.css";
import login from "../../../assets/login.jpg";
import Google from "../../../assets/Google.png";
import UserContext from "./userContext/userContext";
import Header from "../../../components/Common/Header/header";
import Footer from "../../../components/Common/Footer/footer";
function UserSignup() {
  const { updateName } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Create = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    updateName(userData);
  };
  console.log('User Details:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);
  return (
    <div>
    <Header/>
    <div className="outerdiv">
      <div className="left">
        <img src={login} className="loginimg" alt="login" />
      </div>
      <div className="right">
        <div className="innerright">
          <p className="create">Create an account</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="account" onClick={Create}>
            Create Account
          </button>
          <button className="exist">
            <div className="google">
              <img src={Google} alt="google" />
              Sign up with Google
            </div>
          </button>
          <p>
            Already have an account? <a>Login</a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default UserSignup;


