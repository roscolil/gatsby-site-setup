import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
// import "../../styles/styles.scss"
import headerStyles from './header.module.scss'
export default function Header({ children }) {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
  return (
    <header className={headerStyles.header}>
        <h1 className="header__title">Nura Gatsby test site</h1>
        <Link to="/" className="header__nav-link">
          <img className="header__logo" src="" alt="" />
          IMG
        </Link>
        <Link to="/nuranow" className="header__nav-link">
          nuranow
        </Link>
        <Link to="/nuraphone" className="header__nav-link">
          nuraphone
        </Link>
        <Link to="/nuraloop" className="header__nav-link">
          nuraloop
        </Link>
        <Link to="/how-it-works" className="header__nav-link">
          How it Works
        </Link>
        <Link to="/accessories" className="header__nav-link">
          Accessories
        </Link>
        <Link
          to="https://nura2.webflow.io/backstage"
          className="header__nav-link"
        >
          Blog
        </Link>
        <Link to="https://help.nuraphone.com/" className="header__nav-link">
          Support
        </Link>
        { children }
    </header>
  )
}
