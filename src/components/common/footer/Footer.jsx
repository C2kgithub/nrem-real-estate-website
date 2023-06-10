import React from "react"
import ScrollToTopButton from "./ScrollToTopButton";
import { footer } from "../../data/Data"
import "./Footer.css"
import SocialMedia from "./SocialMedia";
import ContactUs from "./ContactUs";


const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Any Questions on real estate?</h1>
              <p>We are just a call and a message away </p>
            </div>
            <button className='btn'><ContactUs /></button>
          </div>
        </div>
      </section>

      <footer>
      <ScrollToTopButton />
      
      
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Own real estate and Partner with us today</h2>
              <p>Receive updates, hot deals, discounts sent straignt in your inbox every month soon</p>

              <div className='input flex'>
              <SocialMedia />
              </div>
              
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 NREM</span>
      </div>
    </>
  )
}

export default Footer