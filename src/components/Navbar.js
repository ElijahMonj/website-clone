import React from "react";
import {Link,NavLink} from 'react-router-dom'
const Navbar = ()=>{
    return (
        <div nav-container>
            <nav>
            <Link to="/">Discord</Link>
                <ul>
                    
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar