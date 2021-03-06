import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => (
  <div id="menu-bar">
    {/* <h6>
      <Link to="/demo-reel">Demo Reel</Link>
    </h6> */}
    <h6>
      <Link to="/portfolio">Portfolio</Link>
    </h6>
    <h6>
      <a
        href="https://vimeo.com/itsjulia"
        rel="noopener noreferrer"
        target="_blank"
      >
        Vimeo
      </a>
    </h6>
    {/* <h6>
      <Link to="/photo">Photo</Link>
    </h6> */}
    <h6>
      <Link to="/about-me">About Me</Link>
    </h6>
    <h6>
      <Link to="/contact">Contact</Link>
    </h6>
  </div>
)

export default MenuBar
