import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Services from "../services/Services"
import Blog from "../blog/Blog"
import Bulletin from "../bulletin/Bulletin"
import LocationCard from "../locations/LocationCard"
import LocationPage from "../locations/LocationPage"

const Pages = () => {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/services' component={Services}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Route exact path='/bulletin' component={Bulletin}/>
                    <Route exact path="/" component={LocationCard}/>
                    <Route path="/location/:locationId" component={LocationPage} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default Pages