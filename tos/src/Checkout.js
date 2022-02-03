import React from 'react';
import "./Checkout.css";
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return <div className="checkout">
    <div className="checkout__left">
      
     </div>
    <div className="checkout__f">
 <h2>Heyy!, {user?.email}</h2>
     <div className="checkout__title">
       {basket.map (item => (
         <Checkoutproduct 
         id={item.id}
         title={item.title}r
         image={item.image}
         price={item.price}
         ratings={item.ratings}/>       
         ))}
         </div>
      
     </div>
 
    <div className="checkout__right">
      <Subtotal />
      
    </div>


    


  </div>;
}


export default Checkout;