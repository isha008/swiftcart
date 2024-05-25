import Logo from "../../../assets/Logo.png"
import cart from "../../../assets/cart.svg"
import profile from "../../../assets/profile.svg"
import store from "../../../assets/Store.svg"
import heart from "../../../assets/heart_.png"
import "../Header/header.css"
import { useNavigate } from "react-router-dom"
function Header(){
    const navigate=useNavigate()
    function SignIn(){
        navigate("/user/login")

    }
    function Seller(){
        navigate("/seller/signup")
    }
    return(
        <div className="header">
            <img src={Logo} className="logo"/>
            <input type="text" placeholder="What are you looking for?"></input>
            <div className="headerdiv">
            <ul className="list">
                <div className="profile"><li><img src={profile} onClick={SignIn}/>Login</li></div>
                <div className="wishlist"><li><img src={heart} />My Items</li></div>
                <div className="profile"><li><img src={cart} />Cart</li></div>
                <div className="seller"><li><img src={store}onClick={Seller}/>Become a Seller</li></div>
            </ul>
            </div>
            
        </div>
    )
}
export default Header;