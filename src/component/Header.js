import React from 'react';
import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';
import Home from './Home'
import About from './About'

function Header() {
    return(
        <div>

        <Router>
            <ul className="nav ">
            <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/about'>About</NavLink>
            </ul>
 

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
      
        </div>
    )
}
export default Header;