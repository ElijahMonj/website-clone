import React from 'react'
import discordlogowhite from './discordlogowhite.svg'
import './Footer.css'
import expand from './images/expand.svg'
import {Link,NavLink} from 'react-router-dom'
import usa from './images/usa.png'
import youtube from './images/youtube.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
const Footer = () =>{
    
    return(
        <div className='footer-container'>
        
            <div className='footer-links'>
                <div className='footer-imagine'>
                    <div className='footer-imagine-text'>IMAGINE A PLACE</div>
                    <div className='footer-language'>
                        <img src={usa} className="language-flag"></img>
                        <span className='current-language'>English, USA</span>
                        <img src={expand} className="expand-language"></img>
                    </div>
                    <div className='footer-socmed'>
                        <a href='https://twitter.com/discord'><img src={twitter}></img></a>
                        <a href='https://www.instagram.com/discord/'><img src={instagram}></img></a>
                        <a href='https://www.facebook.com/discord/'><img src={facebook}></img></a>
                        <a href='https://www.youtube.com/discord/'><img src={youtube}></img></a>
                    </div>
                </div>
                <div></div>
                <div className='footer-product'>Product
                    <ul className='footer-linkslinks'>
                        <li>Download</li>
                        <li>Nitro</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className='footer-product'>Company
                    <ul className='footer-linkslinks'>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Branding</li>
                        <li>Newsroom</li>
                    </ul>
                </div>
                <div className='footer-product'>Resources
                    <ul className='footer-linkslinks'>
                    <li>College</li>
                    <li>Support</li>
                    <li>Safety</li>
                    <li>Blog</li>
                    <li>Feedback</li>
                    <li>Developers</li>
                    <li>StreamKit</li>
                    </ul>
                </div>
                <div className='footer-product'>Policies
                    <ul className='footer-linkslinks'>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookie Settings</li>
                    <li>Guidelines</li>
                    <li>Acknowledgements</li>
                    <li>Licenses</li>
                    <li>Moderation</li>
                    </ul>
                </div>
            </div>
            <div className='footer-logo'>
            <Link to="/"><img src={discordlogowhite}></img></Link>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Footer