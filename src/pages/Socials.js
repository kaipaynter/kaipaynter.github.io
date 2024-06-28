import React from 'react'
import Helmet from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const SocialsPage = () => (
  <Layout>
    <Helmet>
      <title>
        Kai Paynter Socials - A Hollywood Producer &#38; Much More!
      </title>
      <meta
        content="Socials"
        description="Kai Paynter Socials - Follow me on my social media accounts and see my work as a Hollywood Producer, a Black Singer, &#38; tons more! "
      />
      <link rel="canonical" href="https://kaipaynter.com/Socials" />
    </Helmet>

    <div id="main">
      <div className="inner">

        <p className="center">Click an icon and see what I’m up to!</p>

        <p className="center">
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/kaipaynter"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../assets/images/socials/facebook.jpg"
                  alt="Facebook"
                  placeholder="blurred"
                  width="100px"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kai.paynter/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../assets/images/socials/instagram.jpg"
                  alt="Instagram"
                  placeholder="blurred"
                  width="100px"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kai_paynter"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../assets/images/socials/twitter.jpg"
                  alt="Twitter"
                  placeholder="blurred"
                  width="100px"
                />
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/user5346086"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../assets/images/socials/vimeo.jpg"
                  alt="Vimeo"
                  placeholder="blurred"
                  width="100px"
                />
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </Layout>
)

export default SocialsPage
