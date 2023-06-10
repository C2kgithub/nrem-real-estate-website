import React, { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/Logo.png"
import { nav } from "../../data/Data"
import "./Header.css"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <span></span>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
