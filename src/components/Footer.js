import React from 'react'
import logoWhite from '../icons/cc-logo.png'

function FooterListItem({itemName}) {
   return <li className='footer__list-item'><a href="#">{itemName}</a></li>
}

export default function Footer() {

  const socialIcons = [
    "fa-brands fa-twitter",
    "fa-brands fa-instagram",
    "fa-brands fa-tiktok"
  ];

  return (
    <footer className='footer'>

      <div className="footer__top">
        <div className="footer__top-right">
          <h3>Join the community</h3>
          <div className="social__links">
            {socialIcons.map(icon =>
              <a href="#" className="social__links-link" key={icon}><i className={icon}></i></a>
            )}
          </div>
        </div>
      </div>

      <div className="footer__middle">
        <div className="footer__middle-left">
          <a href="#" className="footer__middle-logo">
            <img src={logoWhite} alt="openseas-logo" />
            <span>CharityChain</span>
          </a>
          <p>The worlds leading digital marketplace focused on giving back to charities and the community. Proceeds from NFTs give back to charities, giving people a way to give back through something they love.
          </p>
        </div>
        <div className="footer__middle-right">

          <div className="footer__middle-column">
            <h3 className='footer__middle-column--header'>Marketplace</h3>
            <ul className='footer__list'>
              <FooterListItem itemName={"All NFTs"}/>
              <FooterListItem itemName={"Charity Collections"}/>
              <FooterListItem itemName={"Community Collections"}/>
            </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>My Account</h3>
          <ul className='footer__list'>
            <FooterListItem itemName={"Profile"}/>
            <FooterListItem itemName={"Favorites"}/>
            <FooterListItem itemName={"Watchlist"}/>
            <FooterListItem itemName={"My Collections"}/>
            <FooterListItem itemName={"Settings"}/>
          </ul>
          
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>Resources</h3>
            <ul className='footer__list'>
              <FooterListItem itemName={"Learn"}/>
              <FooterListItem itemName={"Partners"}/>
            </ul>
          </div>

          <div className="footer__middle-column">
          <h3 className='footer__middle-column--header'>Company</h3>
          <ul className='footer__list'>
            <FooterListItem itemName={"About"}/>
            <FooterListItem itemName={"Careers"}/>
            <FooterListItem itemName={"Ventures"}/>
            <FooterListItem itemName={"Grants"}/>
          </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-section">
          <p>© Charity Chain Inc</p>
        </div>
        <div className="footer__bottom-section">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
