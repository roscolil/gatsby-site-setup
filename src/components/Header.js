import React from "react"
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header>
      <Link to="/" activeClassName="is-active" exact={true}>Home</Link>
      <Link to="/nuranow" activeClassName="is-active">
        nuranow
      </Link>
      <Link to="/nuraphone" activeClassName="is-active">
        nuraphone
      </Link>
      <Link to="/nuraloop" activeClassName="is-active">
        nuraloop
      </Link>
      <Link to="/how-it-works" activeClassName="is-active">
        How it Works
      </Link>
      <Link to="/accessories" activeClassName="is-active">
        Accessories
      </Link>
      <Link to="/blog" activeClassName="is-active">
        Blog
      </Link>
      <Link to="/support" activeClassName="is-active">
        Support
      </Link>
    </header>
  )
}
