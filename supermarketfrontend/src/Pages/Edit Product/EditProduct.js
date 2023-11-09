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
            <h6 style={{ fontWeight: 600, marginLeft: "-335px" }}>Category:</h6>

            {/* <label>Select an option:</label> */}
            <select className='dropdownaddproduct'>
              <option value='option1'>Vegetables</option>
              <option value='option2'>Fruits</option>
              <option value='option3'>Dairy Products</option>
            </select>

            <InputBox title='Price (Rs.)' />
            <InputBox title='Quantity ' />
          </div>

          <div className='editprdctbtn'>
            <Button buttonName='Add Product' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
