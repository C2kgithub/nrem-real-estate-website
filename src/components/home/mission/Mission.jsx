import React from "react"
import Heading from "../../common/Heading"
import { mission } from "../../data/Data"
import "./Mission.css"

const Mission = () => {
  return (
    <>
      <section className='mission padding'>

      <div className='content grid4 mtop'>
            {mission.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
          

        <div className='container'>
        <br/>
        <hr/>
        <br/>
          <h1>Real property market is informal, in that you may not know an estate that is up for sale even closest to your location. This due to the fact that many real estate owners do not like putting up the "For Sale" signs within or around their estates, publicizing their names or even revealing the exact address of their estates in sale adverts. This they do for security and confidentiality reasons. Many prospective real estate buyers miss what would have been their best choice just because they did not know that such estates were up for sale. <br/>
          <br/>
          <em>NREM</em> bridges this gap by bringing to your door-step (knowledge) of so many estates that are for sale in ALL THE 36 STATES OF NIGERIA and ABUJA (FCT), for your choice, while still maintaining the security and confidentiality required in real estate transactions. Real Estate Market is not Organized in Nigeria. We have very small and fragmented Estate Agents whose holdings are few and their reach limited.<br/>
          <ul className="square-bullet">
          <li>
          Our mission is to crystalize and galvanize property market in Nigeria into a BIG SHOP, where prospective real estate investors can deal seamlessly and genuinely to find whatever they want. </li>
          <li>We professionally let and manage real estate for people to enable them earn optimum or maximum returns on their investments. </li>
          <li>We help people develop and build their estate to guarantee structural stability, affordability convenience, aesthetic/ beauty, prestige, good economic and social returns. </li>
          <li>We help real estate buyers acquire genuine estates that will not drag them up and down, consumed in disputes.</li></ul>
          </h1><br/>
          <p className="statement"><em>'Our mission is to organize real estate market in Nigeria into a ONE STOP SHOP, where genuine and seamless real estate transactions will take place.'</em></p>
        </div>
      </section>
    </>
  )
}

export default Mission
