import React from "react";
import Heading from "../../common/Heading";
import "./Hero.css"
import videoBg from "../../../../src/components/video/videoBg.mp4"

const Hero = () => {
    return (
      <>
        <section className='hero'>

        <div className="video-background">
            <video src={videoBg} autoPlay loop muted />

          <div className='container'>
            <Heading title='Own Real Estate with us Today ' subtitle='' />

            <form className='flex'>
                <Heading title=' ' subtitle='Find new & featured property in your local city' />
              <div className='box'>
                <span>City/Street</span>
                <input type='text' placeholder='Location' />
              </div>
              <div className='box'>
                <span>Property Type</span>
                <input type='text' placeholder='Property Type' />
              </div>
              <div className='box'>
                <span>Price Range</span>
                <input type='text' placeholder='Price Range' />
              </div>
              <div className='box'>
                <h4>Search</h4>
              </div>
              <button className='btn1'>
                <i className='fa fa-search'></i>
              </button>
            </form>

          </div>

          </div>

        </section>
      </>
    )
  }
  
  export default Hero