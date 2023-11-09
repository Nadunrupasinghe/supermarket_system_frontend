import React from 'react';
import './ManageProductCard.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function ManageProductCard(props) {
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
