/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"


import Header from "./header/header";
import Footer from "./footer/footer";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div className="vw-wrapper">
      <Header />
      <main className="vw-content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
