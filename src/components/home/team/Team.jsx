import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./Team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Our team is made up of seasoned Estate Surveyors and Valuers, Architects, Lawyers, Builders, and Engineers. We work together to give you the best of the best.' />
          <hr/>
          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div><br/>
                  <h4>{val.name}</h4>
                  <h5>{val.more}</h5>
                  <label>{val.address}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team