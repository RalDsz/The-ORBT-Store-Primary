import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function Checkoutproduct({id, image, title, price, rating,}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })

  }
  return <div className="checkoutProduct">
    <div>
      <img className= "checkoutPRoduct__img" src= {image} />
      
      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price"></p>
                <small>₹</small>
                <strong>{price}</strong>
          </div>
            
        <div className="checkoutProduct__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className= "btn" onClick= {removeFromBasket}>
            Remove from basket
        </button>

        
          
          


      </div>

  </div>;
}

export default Checkoutproduct;
