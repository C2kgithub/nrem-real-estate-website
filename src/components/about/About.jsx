import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./About.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='Who are we ?' title='About Us' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Insight' subtitle='' />

            <p>They say that nothing worth doing is easy.Like every successful business, we have had our bumps in the road. But we would not change a thing. Why? Because throughout our journey we have honed our skills and put our services to the test in the real world, so our clients can benefit from our years of experience. </p>
            
            <p>We know what we do very well and that is why we're committed to helping more people like you, every day. 
            To make the process of buying, selling, letting, managing or developing real estate as seamless, genuine, affordable, and efficient as it can be, there are lots of ways we can work together. 
            Our range of services can be tailored to suit your goals, your business, or your project. 
            Don't forget, we specialize in real estate market and development.
            If you are thinking of Real Estate purchase, disposal, development, management, or letting in any of the 36 States of Nigeria and Abuja, Federal Capital Territory FCT, then have our team give you a truly unique service.</p>
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About



