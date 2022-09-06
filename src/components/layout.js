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

const Section = ({ children }) => {
  return (
      <div className='vw-section'>
          <div className='vw-container'>
              <div className='vw-section-content'>{children}</div>
          </div>
      </div>
  )
};

export default Layout;
export {Section};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}