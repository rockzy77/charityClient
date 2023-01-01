import React, { useState } from 'react'
import boughtNFTS from './BoughtNFTS';
import cartItems from './CartItems';
import Popup from './PopUp';

export default function CollectionItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  

  const shuffleArray= ()=>{
    boughtNFTS.push(boughtNFTS.splice(props.no, 1)[0]);
    setCart(boughtNFTS);
    props.changed();
    }


  return (
    <>
    <div style={{'cursor': 'pointer'}} onClick={togglePopup} className='collection__list-item'>
        <div>
            <span className='item-number'>{!props.isSell? props.citem.id : props.no+1}</span>
            <img src={props.citem.image} alt="" />
            <span className='item-title'>{props.citem.title}</span>
        </div>
        <span>{props.citem.price}</span>
        <span>{props.citem.volume}</span>
    </div>

    {isOpen && <Popup
      name={props.citem.title}
      id={props.citem.findId}
      isSell={props.isSell}
      shuffle={shuffleArray}
      handleClose={togglePopup}
    />}
    
    </>
    

)
}
