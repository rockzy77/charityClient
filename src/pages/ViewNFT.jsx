import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {AiOutlineEye, AiOutlineHeart, AiOutlineClockCircle} from 'react-icons/ai';
import {FaHashtag} from 'react-icons/fa';
import {MdLocalOffer} from 'react-icons/md';
import { collectionItems1, collectionItems2, collectionItems3, collectionItems4 } from "../components/Collection-items";
import Chart  from '../Assets/chart.png';
import exploreImages from "../components/Explore-images";

const ViewNFT = () => {
    const [nft, setNFT] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isExplore, setisExplore] = useState(false);
    const {id} = useParams();
    const no = parseInt(id.slice(-2));
    const [done, setDone] = useState(false);

    if(!done){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        setDone(true);
    }
    useEffect(()=>{
        if(id[0] === '1'){
            if(no <= 5){
                var arr = collectionItems1.filter((nft => nft.findId === id));
                setNFT(arr[0]);
                setLoaded(true);
            }
            else{
                var arr2 = collectionItems2.filter((nft => nft.findId === id));
                setNFT(arr2[0]);
                setLoaded(true);
            }
        }
        else if(id[0] === '2'){
            if(no <= 5){
                var arr3 = collectionItems3.filter((nft => nft.findId === id));
                setNFT(arr3[0]);
                setLoaded(true);
            }
            else{
                var arr4 = collectionItems4.filter((nft => nft.findId === id));
                setNFT(arr4[0]);
                setLoaded(true);
            }
        } else{
            var arr5 = exploreImages.filter((nft => nft.findId === id));
                setNFT(arr5[0]);
                setLoaded(true);
                setisExplore(true);
        }
    }, [id, no])
    return (
        <div className="view-nft-section">
            <br />
            <br />
            <br /> 
            {!loaded ? <>
             <h1>Loading...</h1>
            </> : <div>
              <div className="bg">
              <h1 className="nft-title">{!isExplore ? nft.title : nft.heading}</h1>
                <br />
               <div className="nft-row out-row">
               <div className="nft-row">
                <img src={!isExplore ? nft.image : nft.src} alt="" />
                <div className="nft-det">
                <p><AiOutlineEye style={{'fontSize': '1.5rem'}}/><span>3670</span></p>
                <br />
                <p><FaHashtag style={{'fontSize': '1.3rem'}}/><span>89</span></p>
                <br />
                <p><AiOutlineHeart style={{'fontSize': '1.5rem'}}/><span>1789</span></p>
                </div>
                
                </div>
                <div className="nft-desc">
                <p>Chain CEO Deepak Thapliyal bought this gold ape from QuotidianFool for a small fortune in early 2022. QuotidianFool was the original minter of the ape, so they spent about $200 (.08 Eth) on this investment. 

There are only 46 Solid Gold fur apes out of 10,000. This sale is the third-highest ever BAYC sale at the time of this post. It happened on then-new NFT marketplace LooksRare, earning Deepak 6,082 $LOOKS tokens, worth $25,695 at the time.</p>
                </div>
               </div>
              </div>

        <br />

       <div className="row">
       <div className="col-lg-6">
       <div className="nft-sec-section">
                <h3>PEC Friends #1088</h3>
                <p>Owned by <span className="colored">#54433434</span></p>
                <br />
                <div className="nft-row">
                <p><AiOutlineEye /><span className="small">3670</span></p>
                <p><FaHashtag /><span className="small">89</span></p>
               <p> <AiOutlineHeart /><span className="small">1789</span></p>
                </div>

                <hr />
                <div className="nft-row">
                    <AiOutlineClockCircle />
                    <span style={{
                        'fontSize': '0.8rem',
                        'position': 'relative',
                        'bottom': '1.5px',
                        'paddingLeft': '5px'
                    }}>Sale ends 21 December 2023 at 3:15 pm</span>
                </div>

                <hr />

                <p>Current Price</p>
                <h3>{!isExplore ? nft.price : nft.span}</h3>
                <button style={{
                    'fontSize': '0.8rem',
                    'padding': '8px 50px',
                    'marginTop': '5px'
                }} className="btn btn-primary"
                onClick={()=>{
                    alert('NFT added to cart successfully')
                }}
                >Add to cart</button>
                <br />
                <button style={{
                    'fontSize': '0.8rem',
                    'width': '100%',
                    'padding': '8px 0',
                    'marginTop': '5px'
                }} className="btn btn-outline-primary"><MdLocalOffer style={{'fontSize': '1rem'}}/> Make Offer</button>
        </div>

        <br />  

       </div>
        <div className="col-lg-6">
        <img className="chartimg" src={Chart} alt="" />
        </div>
       </div>
                
                
                </div>
                
                }
        </div>
    )
}

export default ViewNFT;