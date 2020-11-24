import React from "react"
import "normalize.css"
// import "../../styles/styles.scss"
import footerStyles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <h1>This is the footer </h1>
    </footer>
  )
}
