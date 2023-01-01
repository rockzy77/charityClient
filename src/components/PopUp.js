import React from "react";
import { NavLink } from "react-router-dom"; 

const Popup = (props) => {
  return (
    <div  className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
       <center>
       <b style={{'fontSize': '1.1rem',
      'marginBottom': '5px'}}>{props.name}</b> <br/>
       <div className="nft-btns">
       <NavLink to={'/viewNFT/'+props.id}>
       <button className="btn btn-outline-primary" style={{'margin': '5px'}} >View NFT</button>
       </NavLink>

        {props.isSell ? null : <button  className="btn btn-primary" style={{'margin': '5px'}}
       onClick={()=>{
        props.handleClose();
        alert("NFT bought successfully");
       }}
       >Buy NFT</button>}

        <button  className="btn btn-primary" style={{'margin': '10px 5px'}}
       onClick={()=>{
        if(props.isSell){
          props.handleClose();
          alert("NFT sold successfully");
          props.shuffle();
        }
        else{
          props.handleClose();
          alert("NFT added to cart successfully");
        }
       }}
       >{props.isSell ? 'Sell NFT' : 'Add to cart'}</button>
       </div>
       </center>
      </div>
    </div>
  );
};
 
export default Popup;