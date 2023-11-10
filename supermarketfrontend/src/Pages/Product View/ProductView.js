import React from 'react';
import './ProductView.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProductViewCard from '../../Components/Product View Card/ProductViewCard';
import Strawberry from '../../Assets/Strawberry.png';
import Vegetables from '../../Assets/Vegetables.png';
import cardImg3 from '../../Assets/Dairy.png';
import cardImg4 from '../../Assets/Fruits.png';
import cardImg5 from '../../Assets/Beverages.png';
import cardImg6 from '../../Assets/Meat&Seafood.jpg';
import cardImg7 from '../../Assets/Household.jpg';
import cardImg8 from '../../Assets/Bakery.png';
import cardImg9 from '../../Assets/CookingEssentials.jpg';
import cardImg10 from '../../Assets/BabyProducts.jpg';
import ProductAddCard from '../../Components/ProductAddCard/ProductAddCard';
import ManageProductCard from '../../Components/ManageProductCard/ManageProductCard';

function ProductView() {
  return (
    <div className='productView'>
      <Navbar />
      <h2 className='productViewText'>Shop Now</h2>
      <div className='cardsection'>
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Vegetables} name='Strawberry' price='450' />
      </div>

      <div className='cardsection2'>
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
        <ProductAddCard image={Vegetables} name='Strawberry' price='450' />
        <ManageProductCard />
      </div>
    </div>
  );
}

export default ProductView;
