import juice from "../../../../assets/juice.jpg"
import shampoo from "../../../../assets/shampoo.jpg"
import shoppingbag from "../../../../assets/shoppingbag.jpg"
import '../grocery/grocery.css'
import ghee1 from "../../../../assets/ghee1.jpg"
import ghee2 from "../../../../assets/ghee2.jpg"
import ghee3 from "../../../../assets/ghee3.jpg"
import ghee4 from "../../../../assets/ghee4.jpg"
import ghee5 from "../../../../assets/ghee5.jpg"
import ghee6 from "../../../../assets/ghee6.jpg"
import ghee7 from "../../../../assets/ghee7.jpg"
import ghee8 from "../../../../assets/ghee8.jpg"
import Footer from "../../../Common/Footer/footer"
import Header from "../../../Common/Header/header"
import { useNavigate } from "react-router-dom"
import Category from "../category/category"
import GroceryLeftContainer from "./groceryleftcontainer"

function Grocery(){
    const navigate=useNavigate()
    navigate("/grocery")
    return(
        <div>
            <Header/>
             <Category/>

        <div className="grocerybanner">
            <div className="leftimg">
                <img src={juice}/>
                {/* <img src={shampoo}/> */}
            </div>
            <div className="middle">
                <h3>Express delivery now from 6am-11pm</h3>
                <p>Even more time to get what you need</p>
            </div>
            <div className="rightimg">
            <img src={shoppingbag}/>
            </div>
        </div>
        <div className="grocerypg">
            <div>
                <GroceryLeftContainer/>
            </div>
        <div className="ghee-main">
            <div className="shop">
            <div><h4>Shop Ghee</h4></div>
            <div className="sort">
            <p>Sort</p>
            <p>Filter</p>
            </div>
           
            </div>
            <div className="ghee">
                <div>
                <img src={ghee1}/>
                <p>Natureland Organics Premium Cow Ghee 400 ml Plastic Bottle</p>
                <p>₹400</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee2}/>
                <p>AASHIRVAAD Svasti Pure Cow 1 L Pouch</p>
                <p>₹569</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee3}/>
                <p>Nutralite Doodhshakti Pure|Rich Aroma Ghee 1 L Carton </p>
                <p>₹479</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee4}/>
                <p>Milky Mist Ghee 1000 ml Pouch </p>
                <p>₹549</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee5}/>
                <p>Milky Mist Cow Ghee Ghee 200 ml Plastic Bottle  </p>
                <p>₹133</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee6}/>
                <p>MILMA Ghee 500 ml Plastic Bottle</p>
                <p>₹334</p>
                <button>Add To Cart</button>
                </div>
                <div>
                 <img src={ghee7}/>
                <p>Amul High Aroma Cow Ghee 500 ml Plastic Bottle</p>
                <p>₹341</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee8}/>
                <p>GRB Cow Ghee 500 ml Plastic Bottle</p>
                <p>₹393</p>
                <button>Add To Cart</button>
                </div>
                <div>
                <img src={ghee1}/>
                <p>Natureland Organics Premium Cow Ghee 400 ml Plastic Bottle</p>
                <p>₹400</p>
                <button>Add To Cart</button>
                </div>
                
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Grocery