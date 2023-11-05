import React from "react";
import './AddProduct.css';
import Navbar from "../../Components/Navbar/Navbar";
import InputBox from "../../Components/Input Box Product/InputBoxProduct";
import Button from "../../Components/Button/Button";

function AddProducts(){
    return(
        <div >
            <Navbar />
            <div className="addproductcontainer">
                <h5 className="toptext">Add Product</h5>
                <div className="line"></div>
    
                <form className="formcontainer">
                    <div className="topform">
                <div className="leftform">
                    <div>
                <InputBox
                title="Product Name"
                />
                </div>
                <div className="secondbox">
                <InputBox
                title="Price"
                />
                </div>
                </div>
                <div className="rightform">
                <InputBox
                title="Category"
                />
                <InputBox
                title="Quantity (Kg or Units)"
                />
                </div>
                </div>
                <div className="bottomform">
                <InputBox
                title="Other Details"
                />
                </div>
                <div className="addprdctbtn">
                <Button buttonName="Add Product" />
                </div>
                </form>

                
            </div>
        </div>
    );
}

export default AddProducts;