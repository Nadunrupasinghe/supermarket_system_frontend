import React, { useState} from 'react';
import './SupplierProductView.css';
import Navbar from '../../Components/Navbar/Navbar';
import ManageProductCard from '../../Components/ManageProductCard/ManageProductCard';

function SupplierProductView(){
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10.99, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 20.99, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 30.99, image: 'product3.jpg' },
      ]);
    
      const deleteProductById = (productId) => {
        // Filter out the product with the given productId
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      };

    return(
        <div className='supplierproductview'>
            <Navbar/>
      <h2 className='SPproductViewText'>Your Listed Products</h2>
        <div className='SPcardsection'>
           <ManageProductCard /> 
           <ManageProductCard /> 
           <ManageProductCard /> 
        </div>

        </div>
    );
}

export default SupplierProductView;