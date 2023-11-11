import React from "react";
import "./EditProduct.css";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import InputBox from "../../Components/Input Box Product/InputBoxProduct";

function EditProduct() {
  return (
    <div>
      <Navbar />
      <div className='editproductcontainer'>
        <h5 className='toptext'>Edit Product</h5>
        <div className='line'></div>

        <form className='formcontainer'>
          <div className='topform1'>
            <InputBox title='Product Name' />

            {/* <label>Select an option:</label> */}

            <InputBox title='Category' />

            <InputBox title='Price (Rs.)' />
            <InputBox title='Quantity ' />
          </div>

          <div className='editprdctbtn'>
            <Button buttonName='Save Changes' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
