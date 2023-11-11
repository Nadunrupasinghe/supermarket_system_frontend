import React, { useState, useEffect } from 'react';
import './ProductView.css';
import Navbar from '../../Components/Navbar/Navbar';
// import ProductViewCard from '../../Components/Product View Card/ProductViewCard';
import Strawberry from '../../Assets/Strawberry.png';
import Fruits from '../../Assets/Fruits.png';
import ProductAddCard from '../../Components/ProductAddCard/ProductAddCard';
// import ManageProductCard from '../../Components/ManageProductCard/ManageProductCard';

function ProductView() {
  const [products, setProducts] = useState([]);

  const getAllProducts = React.useCallback(async () => {
    //Functions to fetch all the products in the database
    return fetch('http://localhost:8083/api/product', {
      method: 'GET',
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
        //console.log(products);
        // if (!res.products) throw new Error('No Products');
        // setProducts(res.products);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='productView'>
      <Navbar />
      <h2 className='productViewText'>Shop Now</h2>
      <div className='cardsection'>
        {products.map((product, skucode) => (
          <ProductAddCard
            key={skucode}
            image={Fruits}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductView;
