import logo from "../../../../assets/Logo.png"
import user from "../../../../assets/user.png"
import email from "../../../../assets/email.png"
import "../../sellerdashboard/header/header.css"
import Latestorder from "../lastestorders/latestorder"
import Menu from "../menu/menu"
function SellerDashboardHeader(){
    return(
        <div>
        <div className="sellerheader">
        <div className="logo">
            <img src={logo}/>
            <input type="text"/>
        </div>
        <div className="user">
        <img src={email} className="email"/>
            <img src={user}/>
        </div>
        </div>
        <div className="horizontal">
        <Latestorder/>
        <Menu/>
        </div>
        </div>
      
    )
}
export default SellerDashboardHeader