import { useNavigate } from 'react-router-dom'
import '../sellerSignup/sellerSignup.css'
function SellerSignUp(){
    const navigate=useNavigate()
    function Register(){
        navigate("/seller/login")
    }
    return(
        <div className="outerdiv">
        <div className="sign">
            <div className='contents'>
            <p className='signup'>Sign-Up</p>
            <label>Your name</label><br/>
            <input type="text" placeholder='First and last name'></input><br/>
            <label>Email</label><br/>
            <input type="email" placeholder=" Enter Email ID"></input>
            <p>What are you looking to sell on ...? </p>
            <div className='btns'>
            <button className='category'>All Categories</button>
            <button className='category'>Only Books</button>
            </div>
            <label>GSTIN</label><br/>
            <input type="text" placeholder="Enter GSTIN" className='pin'></input><br/>
            <label>Password</label><br/>
            <input type="password" placeholder="Enter password"></input><br/>
            <button onClick={Register} className='register'>Register</button>
            </div>
        </div>
        </div>
    )
}
export default SellerSignUp