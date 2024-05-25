import '../category/category.css'
import appliances from '../../../../assets/appliances.webp'
import electronics from '../../../../assets/electronics.webp'
import fashion from '../../../../assets/fashion.webp'
import furniture from '../../../../assets/furniture.webp'
import grocery from '../../../../assets/grocery.webp'
import toys from '../../../../assets/toys.webp'
import { useNavigate } from 'react-router-dom'
function Category(){
    const navigate=useNavigate()
    function groceryFunction(){
        navigate("/grocery")
    }
    return(
        <div className='categorydiv'>
            <div className='outercategorydiv'>
                <div className='innercategorydiv'>
                    <img src={grocery} onClick={groceryFunction}/>
                    <p>Grocery</p>
                    </div>
                    <div className='innercategorydiv'>
                    <img src={electronics}/>
                    <p>Electronics</p>
                    </div>
                    <div className='innercategorydiv'>
                    <img src={fashion}/>
                    <p>Fashion</p>
                    </div>
                    <div className='innercategorydiv'>
                    <img src={furniture}/>
                    <p>Home & Furniture</p>
                    </div>
                    <div className='innercategorydiv'>
                    <img src={appliances}/>
                    <p>Appliances</p>
                    </div>
                    <div className='innercategorydiv'>
                    <img src={toys}/>
                    <p>Toys</p>
                </div>
            </div>
        </div>
    )
}
export default Category