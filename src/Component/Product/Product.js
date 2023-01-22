import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,  } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
const Product = ({product, hendleAddToCart}) => {
    const { name, img, price, ratings, seller } = product
    return (
<div className="product">
  <img src={img} alt="" />
  <div className='product-info'>
<p className="product-name">{name}</p>
<p>price:${price}</p>
<p><small>saller:{seller}</small></p>
<p><small>ratings:{ratings}</small></p>
  </div>

  <button onClick={()=>hendleAddToCart(product)} className='btn-cart'>
  <p className="btn-text">Add to cart</p>
  <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
  </button>
  

</div>
    );
};

export default Product;