import React from "react";
import {Link,NavLink} from 'react-router-dom'
const Navbar = ()=>{
    return (
        <div nav-container>
            <nav>
            <Link to="/">Discord</Link>
                <ul>
                    <li><Link to="/download">Download</Link></li>
                    <li><Link to="/nitro">Nitro</Link></li>
                    <li><Link to="/discover">Discover</Link></li>
                    <li><Link to="/safety">Safety</Link></li>
                    <li><Link to="/support">Support</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
                <Link to="/login">Login</Link> 
            </nav>
        </div>
    )
}

export default Navbar