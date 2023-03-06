import React from 'react'
import { Link } from 'react-router-dom'

const NoMacth = () => {
  return (
    <div>
      <p>Incorrect page found....</p>
      <Link to={"/"} className="nav-link">Got to main page</Link>
    </div>
  )
}

export default NoMacth
