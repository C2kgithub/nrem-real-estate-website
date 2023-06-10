import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import Heading from "../common/Heading"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Check out' title='Our Services' cover={img} />
        <br/> 
        <Heading title='Our Work' subtitle='' />

            <p>TWe’re here to help you find the solution that works for you. So take a closer look at what we can offer and if you have any questions, we’d love to hear from you.</p>

        <div className='featured container'>
          <FeaturedCard />

         

        </div>
      </section>
    </>
  )
}

export default Services
