import React from 'react'
import Nav from './Nav'

 const Layout = (props) => (
  <div>
    <Nav
      className="header-elevated"
      
    />
    {props.children}
  </div>
)

export default Layout