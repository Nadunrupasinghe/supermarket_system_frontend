import './ProductCategory.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import InputBox from '../../Components/InputBox/InputBox';
import { FaCaretRight } from 'react-icons/fa';
import ProductAddCard from '../../Components/ProductAddCard/ProductAddCard';
import Strawberry from '../../Assets/Strawberry.png';
import Vegetables from '../../Assets/Vegetables.png';

function ProductCategory() {
  return (
    <div>
      <Navbar />
      <div className='categorySection'>
        <div className='productCategory'>
          <ul className='categorylist'>
            Shop by Category
            <li>
              Vegetables
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Fruits
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Household
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Meat and seafood
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Frozen Food
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Diary Products
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Bevarages
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Baby Products
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Cooking Essentials
              <FaCaretRight></FaCaretRight>
            </li>
            <li>
              Bakery
              <FaCaretRight></FaCaretRight>
            </li>
          </ul>
        </div>
        <div className='proCard'>
          <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
          <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
          <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
          <ProductAddCard image={Strawberry} name='Strawberry' price='450' />
          <ProductAddCard image={Vegetables} name='Strawberry' price='450' />
          <ProductAddCard image={Vegetables} name='Strawberry' price='450' />
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
