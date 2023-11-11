import React, { useState } from "react";
import "./AddProduct.css";
import Navbar from "../../Components/Navbar/Navbar";
import InputBox from "../../Components/Input Box Product/InputBoxProduct";
import Button from "../../Components/Button/Button";
// import ImageBox from "../../Components/ImageBox/ImageBox";

function AddProducts() {
  const [formData, setFormData] = useState({
    productID: "",
    name: "",
    price: "",
    description: "",
    imageUrl: null,
    category: "",
    type: "", // Default selection
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    setFormData({
      ...formData,
      selectedType: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data to send to the Spring Boot backend
    console.log("hiiiii");
    const dataToSend = {
      skucode: formData.productID,
      name: formData.name,
      price: formData.price,
      description: formData.description,
      category: formData.category,
      imageUrl: null,
      type: formData.selectedType,
    };
    console.log(dataToSend);

    // Make a POST request to your Spring Boot backend
    fetch("http://localhost:8000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle the success scenario (e.g., show a success message)
        } else {
          // Handle errors (e.g., show an error message)
        }
      })
      .catch((error) => {
        // Handle network errors
      });
  };
  return (
    <div>
      <Navbar />
      <div className='addproductcontainer'>
        <h5 className='toptext'>Add Product</h5>
        <div className='boxbar'></div>

        <form className='formcontainer'>
          <div className='topform'>
            <div className='leftform'>
              <InputBox
                title='Product ID'
                name='productID'
                onChange={handleInputChange}
              />
              <InputBox
                title='Product Name'
                name='name'
                onChange={handleInputChange}
              />
              <InputBox
                title='Price'
                name='price'
                onChange={handleInputChange}
              />
              {/* <InputBox title='Other Details' /> */}
              <InputBox
                title='Description'
                name='description'
                onChange={handleInputChange}
              />
            </div>
            <div className='rightform'>
              <InputBox
                title='Category'
                name='category'
                onChange={handleInputChange}
              />
              {/* <InputBox title='Quantity (Kg or Units)' /> */}
              <div className='selecttype'>
                <h6>Select Type:</h6>

                <select
                  name='type'
                  value={formData.selectedType}
                  onChange={handleSelectChange}
                >
                  <option value='Grams'>Grams</option>
                  <option value='Units'>Units</option>
                </select>
              </div>
              {/* <div className='ImageInputBox'>
                <ImageBox title='Add Product Image'/>
                <div className='addImageButton' />
                <Button buttonName='Add Image' />
              </div> */}
            </div>
          </div>
          {/* <div className='bottomform'></div> */}

          <div className='addprdctbtn' onClick={handleSubmit}>
            <Button buttonName='Add Product' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
