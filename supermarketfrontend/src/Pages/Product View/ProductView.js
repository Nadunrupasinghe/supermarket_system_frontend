import React from 'react';
import './ProductView.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProductViewCard from '../../Components/Product View Card/ProductViewCard';
import cardImg1 from '../../Assets/Strawberry.png'

function ProductView(){
    return(
        <div>
            <Navbar />
            <h2 className='productViewText'>Shop by Category</h2>
            <div className='cardsection'>
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
              <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
              <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
              <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            </div>

        <div className='cardsection2'>
        <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
            <ProductViewCard
                secondaryimg ={cardImg1}
                secondText = "Strawberry"
            />
        </div>

        </div>

    );
}

export default ProductView;