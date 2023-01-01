import './App.css';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import ImageSliderSection from './components/ImageSliderSection';
import { newSlidesData, dreamersData } from './components/Data';
import './css/Popup.css';
import './css/ViewNFT.css';
import './css/Wallet.css';
import './css/Cart.css';
import './css/Login.css';
import './css/UserProfile.css';
import './sass/styles.scss';
import Browse from './components/Browse';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import RouteLinks from './components/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [colorChange, setColorchange] = useState(false);
  
  const changeHeaderColor = () => {
     if(window.scrollY >= 79){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeHeaderColor);


  return (
    <BrowserRouter>
    <header className={colorChange ? 'header header-colored' : 'header'}>
      <Navbar/>
    </header>

    <RouteLinks />

    <Footer/>
    </BrowserRouter>
  );
}

export default App;
