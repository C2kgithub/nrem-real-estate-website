import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./Location.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='NREM to the world.' />
          <hr/>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Residential}</label>
                    <label>{item.Commercial}</label>
                    <label>{item.Undeveloped}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
