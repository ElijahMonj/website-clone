import React from "react";
import {Link,NavLink} from 'react-router-dom'
import discordlogowhite from './discordlogowhite.svg'
const Navbar = ()=>{
    return (
        <div className="nav-container">
            <nav>
            <Link to="/"><img src={discordlogowhite} id="logoHome"></img></Link>
                <ul className="navBarLinks">
                    <li><Link to="/download">Download</Link></li>
                    <li><Link to="/nitro">Nitro</Link></li>
                    <li><Link to="/discover">Discover</Link></li>
                    <li><Link to="/safety">Safety</Link></li>
                    <li><Link to="/support">Support</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
                <Link to="/login" id="login">Login</Link> 
            </nav>
        </div>
    )
}

export default Navbar