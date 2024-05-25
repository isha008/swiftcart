import Banner from "../../../components/User/userHome/banner/banner.jsx"
import Category from "../../../components/User/userHome/category/category.jsx"
import Header from "../../../components/Common/Header/header.jsx"
import Footer from "../../../components/Common/Footer/footer.jsx"
import "../userHome/userHome.css"
import Mainbanner from "../../../components/User/userHome/mainBanner/mainbanner.jsx"
import Container from "../../../components/User/userHome/container/container.jsx"
import Secondbanner from "../../../components/User/userHome/secondbanner/secondbanner.jsx"
import ShopByCategory from "../../../components/User/userHome/shopbycategory/shopbycategory.jsx"
function UserHome(){
    return(
        <div className="userhome">
            <Header className="header"/>
            <Category className="category"/>
            <Mainbanner className="mainbanner"/>
            <Banner className="banner"/>
            <Container className="container"/>
            <Secondbanner className="secondbanner"/>
            <ShopByCategory/>
            <Footer className="footer"/>
        </div>
    )
}
export default UserHome;