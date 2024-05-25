import navbarimg from "../assets/navbar-brand.png";
function Login() {
  return (
    <div className="outerdiv">
      <div className="left">
        <div className="innerdiv">
          <h3>Login</h3>
          <p className="get">
            Get access to your Orders,Wishlist and Recommendations
          </p>
          <img src={navbarimg} />
        </div>
      </div>
      <div className="right">
        <div className="innerright">
          <input type="text" placeholder="Enter Email/Mobile number"></input>
          <p>
            By continuing, you agree to Flipkart's
            <a href="https://www.flipkart.com/pages/terms">Terms of Use</a> and{" "}
            <a href="https://www.flipkart.com/pages/terms">Privacy Policy</a>
          </p>
          <button className="req">Request OTP</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
