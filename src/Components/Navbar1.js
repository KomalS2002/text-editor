import { Component } from "react"
import React from 'react'
import {MenuItems} from "./MenuItems"

class Navbar1 extends Component{
    render(){
        return(
            <nav className="NavbarItems"> 
            <h1 className="navbar-logo">Markdown</h1>
            <div className="menuIcon"></div>
            <ul><li>
                  <a className={item.cName}></a>
                </li>
               
            </ul>
            </nav>
        )
    }
}

export default Navbar1
