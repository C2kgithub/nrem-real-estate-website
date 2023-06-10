import React from "react"
import Heading from "../../common/Heading"
import "./Recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Check out some of our recently listed properties.' />
          <hr/>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent