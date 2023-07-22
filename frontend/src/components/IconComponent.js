import styles from './IconComponent.module.css'
import myComplogo from '../assets/icons/mycomputer.png'
import Chat from '../assets/icons/chat.png'
import About from './windows/AboutMe'
import Starfield from '../assets/icons/Starfield-1.png'
import { useState } from 'react'
import Music from './windows/MusicPlayer'
import React from 'react'
const IconComponent = () => {
    const[window, setWindow] = React.useState('false');
    return(
        <div style={{
            height: "30vh",
            display: 'flex',
            flexDirection: 'column',
            margin: '3vh',
            gap: '2vh',
            justifyContent: 'space-between'
        }}>
          <div>
            <button onClick={() => setWindow('about')} className={styles.buttoner}><img src={myComplogo}/>
            </button>
          </div>
          <div>
            <button onClick={() => setWindow('chat')} className={styles.buttoner}><img src={Chat}/>
            </button>
            { window === 'chat' && (<div>
              Chat Window
            </div>)
            } 
          </div>
          <div>
            <button onClick={() => setWindow('starfield')} className={styles.buttoner}><img src={Starfield}/>
            </button>
            { window === 'starfield' && (<div>
              Starfield Window
            </div>)
            } 
          </div>
          <div>
            <button onClick={() => setWindow('music')} className={styles.buttoner}><img src={Starfield}/>
            </button>
            { window === 'music' && (<div style={{position:"fixed", left:"40%", top:"20%"}}>
              <Music />
            </div>)
            } 
          </div>
        {/* <div style={{
          height: "50vh",
          marginLeft: "25vh",
          marginTop: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
            <About />
        </div> */}
        { window === 'about' && (
              <div style={{position:"fixed", left:"30%"}}>
            <About />
        </div>
            )
            } 
        </div>
    )
}

export default IconComponent