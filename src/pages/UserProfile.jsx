import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dp from '../Assets/dp.png';
import boughtNFTS from '../components/BoughtNFTS';

const UserProfile = (props) => {

    const [done, setDone] = useState(false);

    if(!done){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        setDone(true);
    }
    return (
        <div className="userprofile">
            <br />
            <div className="profileCont">
                       <div className="row">
                        <div  className="col-lg-3 col-md-5">
                        <img className='userimg' src={Dp} alt="" />
                        <h1>David</h1>
                        <p className='profile-des'>88 NFTs of beautiful, Asian women painstakingly-crafted where
                             even the most intricate details are steeped.
                        </p>
                        <p className='profile-icons'><i className='fa-brands fa-twitter'></i> <i className='fa-brands fa-instagram'></i></p>
                        <div className="follows">
                            <hr />
                            <div style={{'textAlign': 'left'}} className="row">
                                <div className="col">
                                    <div>
                                        <p style={{'fontSize': '0.8rem'}}><span style={{'fontWeight': 'bolder', 'fontSize': '1.2rem'}}>4</span><br />Items</p>
                                    </div>
                                </div>
                                {/* <div className="col">
                                    <div>
                                        <p style={{'fontSize': '0.8rem'}}><span style={{'fontWeight': 'bolder', 'fontSize': '1.2rem'}}>96</span><br />Followers</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <p style={{'fontSize': '0.8rem'}}><span style={{'fontWeight': 'bolder', 'fontSize': '1.2rem'}}>117</span><br />Followings</p>
                                    </div>
                                </div> */}
                            </div>
                            <hr />
                        </div>
                        </div>
                        <div className="col-lg-9 col-md-7 prf-sec">
                            <h6>Your NFT's</h6>
                            <div style={{'gridGap': '20px'}} className="row nft-card-row">
                                {boughtNFTS.map((item, i)=>{
                                    return <div key={i} className="col nft-card">
                                        <NavLink to={'/viewNFT/'+item.findId}>
                                        <div className="nft-cont">
                                        <img src={item.image} alt="" />
                                        <h5>{item.title}</h5>
                                        <div className="row nft-cont-des">
                                            <div className="col">
                                                <p><span>Price</span> <br /> {item.price}</p>
                                            </div>
                                            <div className="col">
                                                <p><span>Volume</span> <br /> {item.volume}</p>
                                            </div>
                                        </div>
                                        </div>
                                        </NavLink>
                                    </div>
                                })}
                                
                            </div>
                        </div>
                       </div>
                    
            </div>
        </div>
    )
}

export default UserProfile;