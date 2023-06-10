import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import About from "../about/About"
import Blog from "../blog/Blog"
import Bulletin from "../bulletin/Bulletin"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Home from "../home/Home"
import LocationCard from "../locations/LocationCard"
import LocationPage from "../locations/LocationPage"
import Services from "../services/Services"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/bulletin" component={Bulletin} />
          <Route exact path="/" component={LocationCard} />
          <Route path="/location/:locationId" component={LocationPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
