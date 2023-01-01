import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/home';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import ViewNFT from '../pages/ViewNFT';
import Wallet from '../pages/Wallet';

const RouteLinks = () => {
    return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/help' element={<Home />} />
    <Route path='/viewNFT/:id' element={<ViewNFT />} />
    <Route path='/wallet' element={<Wallet/>} />
    <Route path='/profile' element={<UserProfile/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={<Login/>} />
</Routes>
    
    )
}

export default RouteLinks;