import "../sellerLogin/sellerLogin.css"
import login from "../../../assets/login.jpg";
function SellerLogin(){
    return(
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
                <a>Forgot password?</a>
              </p>
          </div>
        </div>
      </div>
    )
}
export default SellerLogin