import appliances from "../../../../assets/appliancesbanner.jpeg"
import electronicsbanner from "../../../../assets/electronicsbanner.jpeg"
import fashionbanner from"../../../../assets/fashionbanner.jpeg"
import furniturebanner from"../../../../assets/furniturebanner.jpeg"
import grocerybanner from"../../../../assets/grocerybann.png"
import toysbanner from "../../../../assets/toysbanner.png"
import bannerimage from "../../../../assets/image 17.png"
import "../banner/banner.css"
function Banner(){
    return(
        <div className="outerbanner">
            <div className="images">
               <div className="leftbanner">
                <img src={grocerybanner} className="grocerybanners"/>
               </div>
                <div className="middlebanner">
                <img src={electronicsbanner} className="electronicsbanner"/>
                <img src={fashionbanner} className="fashionbanner"/>
                </div>
                <div className="rightbanner">
                <img src={furniturebanner} className="furniturebanner"/>
                </div>
            </div>
                <div>
                <img src={toysbanner} className="toysbanner"/>
                <img src={bannerimage} className="bannerimage"/>
                <img src={appliances} className="appliances"/>
                </div>
               
            </div>
    )
}
export default Banner

