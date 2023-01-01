import { useEffect } from "react";
import { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import cartItems from "../components/CartItems";
import Collection from "../components/Collection";
import {MdDelete} from "react-icons/md";
import { NavLink } from "react-router-dom";

const Cart = (props) => {

    const [changed, setChanged] = useState(0);

    const [done, setDone] = useState(false);

    if(!done){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        setDone(true);
    }

    useEffect(()=>{}, [changed]);

  return (
    <div className="cartsection">
      <br />
      <br />
      <br />
      <h1>My Cart</h1>
      <br />
      {
        cartItems.length !== 0 ? 
        <div className="cart-cards">
            {cartItems.map((item,i)=>{
                return <div className="cart-card">
                    <div className="nft-row">
                           <NavLink to={'/viewNFT/'+item.findId}>
                           <img src={item.image} alt="" />
                           </NavLink>
                            
                            <div>
                                <h5>{item.title}</h5>
                                <div className="row">
                                <div className="col">
                                                <p><span>Price</span> <br /> {item.price}</p>
                                            </div>
                                            <div className="col">
                                                <p><span>Volume</span> <br /> {item.volume}</p>
                                            </div>
                                </div>
                            </div>

                            <p onClick={()=>{
                                cartItems.splice(i, 1);
                                setChanged(changed+1);
                                alert("Cart item removed successfully");
                            }} className="remove"><MdDelete/></p>
                    </div>
                    <br />
                    <center><p  onClick={()=>{
                                cartItems.splice(i, 1);
                                setChanged(changed+1);
                                alert("Cart item removed successfully");
                            }} className="remove-sm">Remove <MdDelete/></p></center>
                   
                    </div>
            })}
        </div>
         : <p className="none">
        Cart is empty
      </p>
      }
    </div>
  );
};

export default Cart;
