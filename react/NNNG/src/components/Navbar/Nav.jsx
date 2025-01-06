import React from 'react'
import './Nav.css'
import { Navleft } from './Navleft'
import { Navmid } from './Navmid'
import Navright from './Navright'
import { All } from './All'

const Nav = () => {
    return (
        <nav>
            <div id="prenav">
                <div className="navbar">
                    <Navleft />
                    <Navmid />
                    <Navright />
                </div>
                <All />
            </div>
        </nav>
    )
}

export default Nav
