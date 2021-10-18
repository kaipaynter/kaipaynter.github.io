import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const ContactPage = () => (
  <Layout>
    <Helmet>
      <title>Contact Kai Paynter - A Famous Black Singer!</title>
      <meta
        content="Contact"
        description="Contact me - Kai Paynter. Get in touch with me today to take advantage of my skills as a Black Hollywood Actress, a famous Black Singer, Hollywood Producer, or any other services!"
      />
      <link rel="canonical" href="https://kaipaynter.com/Contact" />
    </Helmet>

    <div id="main">
      <div className="inner">
        {/* <h1>Contact</h1> */}

        <p>
          <strong>Helen Pandos Management</strong>:
          <br />
          c/o Belinda Blight
          <br />
          2/69 Reservoir Street
          <br />
          Surry Hills, NSW
          <br />
          Australia, 2010
          <br />
          Tel: +61 (0) 2 9212 4242
        </p>
        <p>
          <strong>Brady, Brannon & Rich Agency</strong>
          <br />
          c/o BBR Commerical Rep
          <br />
          5700 Wilshire Blvd, Suite 275
          <br />
          Los Angeles, CA 90036
          <br />
          Tel: +1 323 852 9559
        </p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
