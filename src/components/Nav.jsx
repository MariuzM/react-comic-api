import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export default function Nav() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="justify-content-center">
      <Navbar>
        <NavLink to="/pageone" className="nav-link">
          Page One
        </NavLink>

        <NavLink to="/pagetwo" className="nav-link">
          Page Two
        </NavLink>
      </Navbar>
    </Navbar>
  )
}
