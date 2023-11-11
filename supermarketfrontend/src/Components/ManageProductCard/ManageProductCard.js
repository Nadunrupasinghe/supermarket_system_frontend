import React from 'react';
import './ManageProductCard.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';



function ManageProductCard(props) {
  const handleDelete = () => {
    // Call the deleteProduct function passed as a prop with the product id
    props.deleteProduct(props.id);
  };

  return (
    <div className='manageProductCard'>
      <img src={props.image} className='manageProdImage' />
      <text>{props.name}</text>
      <text>{props.price}</text>
      <div className='manageProdButton'>
        <Link to='/editproduct'>
          <button type='submit' className='prodEditButton'>
            Edit
          </button>
        </Link>
        <button type='submit' className='prodDeleteButton'>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ManageProductCard;
