import "../header/header.css"
import email from "../../../assets/email.png"
import user from "../../../assets/user.png"
function AdminHeader(){
    return(
        <div className="adminheader">
            <div>
                <input type="text"></input>
            </div>
            <div>
            <img src={email}/>
                <img src={user}/>
            </div>
                
        </div>
    )
}
export default AdminHeader