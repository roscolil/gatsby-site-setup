import React from "react"
import "normalize.css"
// import "../../styles/styles.scss"
import layoutStyles from './layout.module.scss'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layoutWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
