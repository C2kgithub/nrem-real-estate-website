import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/Recent.css"
import img from "../images/blog.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Listed Properties' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>

        <br/><button className='btn2'>More Properties</button>
      </section>
    </>
  )
}

export default Blog
