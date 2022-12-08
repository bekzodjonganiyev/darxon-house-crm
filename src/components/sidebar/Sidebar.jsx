import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <>
        <NavLink to="/" className="link">Obyekt</NavLink>
        <NavLink to="/type" className="link">Tip qo'shish</NavLink>
        <NavLink to="/contract" className="link">Shartnoma</NavLink>
    </>
  )
}

export default Sidebar