function SellerAddProduct(){
    return(
        <div>
            <div>
                <div>
                    <h3>General Information</h3>
                    <label>Product Name</label>
                    <input type="text"></input><br></br>
                    <label>Description</label>
                    <input type="text"></input>
                </div>
                <div>
                    <h3>Pricing</h3>
                    <label>Base Price</label>
                    <input type="number"></input><br></br>
                    <label>Discount(%)</label>
                    <input type="number"></input>

                </div>
                <div>
                <h3>Inventory</h3>
                <label>SKU</label>
                    <input type="number"></input><br></br>
                    <label>Barcode</label>
                    <input type="number"></input><br></br>
                    <label>Quantity</label>
                    <input type="number"></input>
                </div>
                <div>
                    <h3>Product Media</h3>
                    <label>Photo Product</label>
                    <input type="image"></input>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default SellerAddProduct