import React from 'react'
import './Main.css'

import { assets } from '../../assets/assets'

const Main =()=>{
    return(
        <div className='main'>
            <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
            </div>
            
            <div className="main-character">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today</p>
                </div>
                 
                 <div className="cards">
                    
                    <div className="card">
                        <p>Suggest beauitiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                     <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                     <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                {/*search bar*/}
                <div className="main-bottom">
      <div className="search-box">
        <input type="text" placeholder="Enter a prompt here" />
        <div className="icons">
          <img className="icon gallery" src={assets.gallery_icon} alt="gallery" />
          <img className="icon mic" src={assets.mic_icon} alt="mic" />
          <img className="icon send" src={assets.send_icon} alt="send" />
        </div>
      </div>
    </div>
  

  {/* Bottom info */}
  <p className="bottom-info">
    Gemini may display info, including about people, so double-check its responses. 
    Your privacy and Gemini Apps
  </p>
  </div>
</div>
    )
}

export default Main