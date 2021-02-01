import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import biopicfull2021 from '../assets/images/landing/biopicfull2021.jpg'

class ComingSoon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  render() {
    return (
      <Layout>
        <Header />

        <div id="main">
          <section id="about-me" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Notice</h2>
                </header>
                <p>
                  My website is currently under construction. Thank you for your patience. Please get in touch with me via email or my social media.
                </p>
              </div>
              <span className="image2">
                <img src={biopicfull2021} alt="" />
              </span>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ComingSoon
