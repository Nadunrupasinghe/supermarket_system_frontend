import React from 'react';
import './ProductView.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProductViewCard from '../../Components/Product View Card/ProductViewCard';
import cardImg1 from '../../Assets/Strawberry.png';
import cardImg2 from '../../Assets/Vegetables.png';
import cardImg3 from '../../Assets/Dairy.png';
import cardImg4 from '../../Assets/Fruits.png';
import cardImg5 from '../../Assets/Beverages.png';
import cardImg6 from '../../Assets/Meat&Seafood.jpg';
import cardImg7 from '../../Assets/Household.jpg';
import cardImg8 from '../../Assets/Bakery.png';
import cardImg9 from '../../Assets/CookingEssentials.jpg';
import cardImg10 from '../../Assets/BabyProducts.jpg';


function ProductView(){
    return(
        <div className='productView'>
            <Navbar />
            <h2 className='productViewText'>Shop by Category</h2>
            <div className='cardsection'>
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            <ProductViewCard
                secondaryimg ={cardImg2}
                secondText = "Vegetables"
            />
              <ProductViewCard
                secondaryimg ={cardImg3}
                secondText = "Dairy Products"
            />
              <ProductViewCard
                secondaryimg ={cardImg4}
                secondText = "Fruits"
            />
              <ProductViewCard
                secondaryimg ={cardImg5}
                secondText = "Beverages"
            />
            </div>

        <div className='cardsection2'>
        <ProductViewCard
                secondaryimg ={cardImg6}
                secondText = "Meat & Seafood"
            />
            <ProductViewCard
                secondaryimg ={cardImg7}
                secondText = "Household"
            />
            <ProductViewCard
                secondaryimg ={cardImg8}
                secondText = "Bakery"
            />
            <ProductViewCard
                secondaryimg ={cardImg9}
                secondText = "Cooking Essentials"
            />
            <ProductViewCard
                secondaryimg ={cardImg10}
                secondText = "Baby Products"
            />
        </div>

        </div>

    );
}

export default ProductView;