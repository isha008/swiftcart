import Qr from "../../../assets/Qr.png"
import playstore from "../../../assets/playstore.png"
import appstore from "../../../assets/Appstore.png"
import "../Footer/footer.css"
function Footer(){
    return(
        <div className="outerdivs">
            <div className="exclusive">
                <h3>Exclusive</h3>
                <h4>Subscribe</h4>
                <h4>Get 10% off your first order</h4>
                <input type="email" placeholder="Enter your email"></input>
            </div>
            <div className="support">
                <h3>Support</h3>
                <h4>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>
                <h4>swiftcart@gmail.com</h4>
                <h4>+88015-88888-9999</h4>
            </div>
            <div className="quick">
                <h3>Privacy Policy</h3>
                <h4>Terms Of Use</h4>
                <h4>FAQ</h4>
                <h4>Contact</h4>
            </div>
            <div className="download">
                <h3>Download App</h3>
                <div className="imgs">
                    <div className="qr">
                        <img src={Qr}/>
                    </div>
                    <div className="store">
                        <img src={playstore}/>
                        <img src={appstore}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;