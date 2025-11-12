
import { useState } from 'react'
import { createPortal } from 'react-dom';


import Links from './Links.jsx'

import headerLogoDark from '../assets/imgs/24dark.png'
export default function Header() {

  const [listState, setListState] = useState(false);

  function handleListoflinks() {
    setListState(prevState => !prevState)
  }

  return (
    <header>
      <a href="" className="logo">
        <img src={headerLogoDark} alt="My Logo" />
      </a>

      <div className="list-of-menu">
        <div className="list-icon" onClick={handleListoflinks}>
          <i className='fa-solid fa-bars'></i>
        </div>

        <ul className={`list-of-links ${listState? 'active' : undefined}`}>
          <Links />

          <a href="#" className="logo ul-footer">
            <img src={headerLogoDark} alt="My Logo" />
          </a>

          <div className="close" onClick={handleListoflinks}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </ul>
      </div>
      {createPortal(
          <div 
          className={`overlay ${listState? 'active' : undefined}`}
          onClick={handleListoflinks}></div>,
          document.getElementById('root')
      )}
    </header>
  )
}