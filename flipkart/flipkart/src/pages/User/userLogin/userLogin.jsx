import "../userLogin/userLogin.css";
import login from "../../../assets/login.jpg";
import Header from "../../../components/Common/Header/header.jsx"
import Footer from "../../../components/Common/Footer/footer.jsx"
import { useNavigate } from "react-router-dom";
function UserLogin() {
  const navigate=useNavigate()
  function New(){
    navigate("/user/signup")
  }
  return (
    <div>
    <Header/>
    <div className="outerdiv">
      <div className="left">
        <img src={login} className="loginimg" />
      </div>
      <div className="right">
        <div className="innerright">
          <p className="welcome">Welcome back</p>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
            <button className="login">Login</button>
            <p>
              <a className="forgot">Forgot password?</a>
              <a onClick={New}>New to Flipkart? </a>
            </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
//   return (
//     <div className="outerdiv">
//       <div className="left">
//         <div className="innerdiv">
//           <h3>Login</h3>
//           <p className="get">
//             Get access to your Orders,Wishlist and Recommendations
//           </p>
//           {/* <img src={navbarimg} /> */}
//         </div>
//       </div>
//       <div className="right">
//         <div className="innerright">
//           <input type="text" placeholder="Enter Email/Mobile number"></input>
//           <p>
//             By continuing, you agree to Flipkart's
//             <a href="https://www.flipkart.com/pages/terms">Terms of Use</a> and{" "}
//             <a href="https://www.flipkart.com/pages/terms">Privacy Policy</a>
//           </p>
//           <button className="req">Request OTP</button>
//         </div>
//       </div>
//     </div>
//   );
// }
export default UserLogin;
