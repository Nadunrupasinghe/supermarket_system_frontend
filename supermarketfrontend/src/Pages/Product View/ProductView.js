import React, { useState, useEffect } from 'react';
import './ProductView.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProductViewCard from '../../Components/Product View Card/ProductViewCard';
import Strawberry from '../../Assets/Strawberry.png';
import ProductAddCard from '../../Components/ProductAddCard/ProductAddCard';
import ManageProductCard from '../../Components/ManageProductCard/ManageProductCard';

function ProductView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API and update the state.
    getAllProducts();

    const getAllProducts = async () => {
      try {
        // Replace 'apiEndpoint' with the actual URL of your API that serves product data.
        const response = await fetch('localhost:8181/API/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  }, []);
  return (
    <div className='productView'>
      <Navbar />
      <h2 className='productViewText'>Shop Now</h2>
      <div className='cardsection'>
        {products.map((product, skucode) => (
          <ProductAddCard
            key={skucode}
            // image={product.imageURL} // Replace with the actual property name from your API response
            name={product.name}
            price={product.price}
          />
        ))}
        {/* <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Vegetables} name='Strawberry' price='450' /> */}
      </div>

      <div className='cardsection2'>
        {/* <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Vegetables} name='Strawberry' price='450' />
        <ManageProductCard /> */}
      </div>
    </div>
  );
}

export default ProductView;
