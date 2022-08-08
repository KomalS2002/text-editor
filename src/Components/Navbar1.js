import { Component } from "react"
import React from 'react'
import {MenuItems} from "./MenuItems"
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import './Navbar.css'
class Navbar1 extends Component{
    render(){
        return(
            <nav className="NavbarItems"> 
            <h1 className="navbar-logo">Markdown <NoteAltIcon className="logo"/></h1>
            <div className="menuIcon"></div>
            <ul>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                        <a className={item.cName} href={item.URL}>{item.title}</a>
                       </li> 
                          )
                })}
                
               
            </ul>
            </nav>
        )
    }
}

export default Navbar1
