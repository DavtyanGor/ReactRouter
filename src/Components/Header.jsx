import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
    <Link to="/">link1</Link>
    <Link to="/pages">link2</Link>
    <Link to="/contacts">link3</Link>
    <Link to="/param">link4</Link>
    <Link to="/posts">link5</Link>
  </header>
  )
}
