import { useEffect } from 'react';
import { useState } from 'react';
import Qr from '../Assets/qr.png';
import boughtNFTS from '../components/BoughtNFTS';
import Popup from '../components/PopUp';
import {MdLocalOffer} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Tab, TabPanel, Tabs } from 'react-tabs';
import Collection from '../components/Collection';

const Wallet = () => {

    const [index, setIndex] = useState(0);
    const [done, setDone] = useState(false);

    if(!done){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        setDone(true);
    }

    if(document.getElementById('continue')){
        document.getElementById('continue').disabled = true;
    }

    const changeIndex = () =>{
        setIndex(index+1);
    }

    useEffect(()=>{
        // boughtNFTS = tcart;
    }, [index])


    return(
        <>
        <div className="wallet-section">
            <br />
            <br />
            <br />
            <h1>Connect Wallet</h1>
            <p className="des">Hi there! Nice to see you again</p>
            <br />
            
            <hr />

            
           <div style={{'justifyContent': 'space-between', 'padding': '25px'}} className="nft-row nft-scan-sec">
           <center className='qr1'><div className="qrcode">
                <p>Scan to connect</p>
                <img src={Qr} alt="" />
            </div></center>
           <div className="nfts">
            <h1 style={{'color': '#252525'}}>Your NFTS</h1>
          
            <Tabs>
                <TabPanel>
                <Collection
                isSell={true}
                changed={changeIndex}
            items={boughtNFTS}
          />
                </TabPanel>
            </Tabs>
           </div>
           
           <div className="qrcode qr2">
                <p>Scan to connect</p>
                <img src={Qr} alt="" />
            </div>
           </div>

            <hr />
            <br />

            <h2>Before you connect</h2>
            <br />
           <div className="ltr">
           <h2 style={{'color': '#ff5850'}}><i className="fa fa-cart-shopping"></i> Buying NFT'S</h2>
            <p className='byc-p'>When buying an NFT, you are buying a token you may not necessary be buying the underlying asset or the
                intellectual property rights
            </p>
            <button className="btn">See More</button>
           </div>

            <br />
            <br />

            <div className="rtl">
            <h2 style={{'color': '#ff5850'}}><MdLocalOffer/> Selling NFT'S</h2>
            <p className='byc-p'>When selling an NFT unless there is an agreement to the contrary the buyer
            takes ownership of NFT but not any copyright in the underlying digital work
            </p>
            <button className="btn">See More</button>
            </div>
            <br />
            <div className="ltr">
            <h2 style={{'color': '#ff5850'}}><i className="fa fa-wallet"></i> Using 3rd Party Wallet</h2>
            <p className='byc-p'>You need a 3rd party wallet to access the service. Your account
            will be associated with your linked blockchain address and will display your NFT
            </p>
            <button className="btn">See More</button>
            </div>

            <br />
            <br />

           <div className="ltr">
           <label htmlFor="agree">
            <input type="checkbox" onChange={(value)=>{
                var btn = document.getElementById('continue');
                if(document.getElementById('agree').checked){
                   btn.disabled = false;
                }
                else{
                    btn.disabled = true;
                }
            }} name="agree" id="agree" />
            <span className='agreespan'>
            I agree to the <a href="">Terms of Services</a> and <a href="">Privacy Policy</a>
            </span>
            </label>

            <br />

            <NavLink id='toHome' to={'/'}></NavLink>

            <button id='continue' onClick={()=>{
                document.getElementById('toHome').click();
            }} className='btn continue'>Continue</button>
           </div>
        </div>

    

        </>
    )
}

export default Wallet;