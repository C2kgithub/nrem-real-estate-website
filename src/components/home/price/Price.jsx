import React from "react"
import Heading from "../../common/Heading"
import "./Price.css"
import MonthCard from "../../locations/LocationCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select a property' subtitle='Partner with NREM and own real estate today' />
          <hr/>

          <MonthCard />
          
        </div>
      </section>
    </>
  )
}

export default Price
