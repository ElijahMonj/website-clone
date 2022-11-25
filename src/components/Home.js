import React from 'react'
import imagineBG from './images/imagineBG.svg'
import imagineRight from './images/imagineRight.svg'
import imagineLeft from './images/imagineLeft.svg'
import DL from './images/downloadIcon.svg'
import createImage from './images/create-image.svg'
import hangoutImage from './images/hangout-image.svg'
import fandomImage from './images/fandom-image.svg'
import reliableImage from './images/reliable-image.svg'
import sparkles from './images/sparkles.svg'
const Home = () =>{
    return(
        <div className='Home'>
            <div className='imagine'>
                <div className='heroBody'>
                <img src={imagineBG} className="imagineBG"></img>
                <img src={imagineRight} className="imagineRight"></img>
                <img src={imagineLeft} className="imagineLeft"></img>
                    
                    <div className='heroText'>
                        <h1>IMAGINE A PLACE...</h1>
                        <div className='subText'>..where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                    </div>
                    <div className="dlBtns">
                        <span className="dlBtn"><img src={DL} className="downloadIcon"></img>Download for Linux</span>
                        <button className="openBtn">Open Discord in your browser</button>
                        
                    </div>
                    
                    
                </div>
            </div>
            <div className='create'>
                <div className='create-container'>
                    <div className='create-content'>
                        <img src={createImage} className='createImage'></img>
                        <div className='create-text'>
                            <h2>Create an invite-only place where you belong</h2>
                            <div className='create-subtext'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hangout'>
            <div className='hangout-container'>
                    <div className='hangout-content'>
                        
                        <div className='hangout-text'>
                            <h2>Where hanging out is easy</h2>
                            <div className='hangout-subtext'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</div>
                        </div>
                        <img src={hangoutImage} className='hangoutImage'></img>
                    </div>
                </div>
            </div>
            <div className='fandom'>
            <div className='fandom-container'>
                    <div className='fandom-content'>
                    <img src={fandomImage} className='fandomImage'></img>
                        <div className='fandom-text'>
                            <h2>From few to a fandom</h2>
                            <div className='fandom-subtext'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reliable'>
                <div className='reliable-container'>
                    <div>
                    <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
                    <div className='reliable-subtext'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>
                    </div>
                    <img src={reliableImage} className="reliableImage"></img>
                    <div className='reliable-ready'>
                        <img src={sparkles} className="sparkles"></img>
                        <div className='readyText'>Ready to start your journey?</div>
                        
                    </div>
                    <span className="dlBtn2"><img src={DL} className="downloadIcon2"></img>Download for Linux</span>
                </div>
            </div>
        </div>
    )
}

export default Home