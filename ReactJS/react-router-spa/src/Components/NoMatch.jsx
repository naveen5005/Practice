import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h2>Invalid page...!!!</h2>
      <Link className="nav-link" to={"/"}>Go to Home Page</Link>
    </div>
  )
}

export default NoMatch
