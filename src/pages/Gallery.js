import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { StaticImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import '../assets/css/gallery.css'

const GalleryPage = () => (
  <Layout>
    <Helmet>
      <title>Kai Paynter Gallery - A Black Hollywood Actress!</title>
      <meta
        content="Gallery"
        description="Kai Paynter Gallery - See the showcase of photos - a Black Hollywood Actress, a 
        Black Singer &#38; Black Female Comedian, &#38; more. "
      />
      <link rel="canonical" href="https://kaipaynter.com/Gallery" />
    </Helmet>

    <div id="main">
      <div className="inner">
        <div className="container">
          <SimpleReactLightbox>
            <SRLWrapper>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/kai_Primary_2.jpeg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/Kai_324.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/Kai_122.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/Kai_212.jpeg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/1.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/9_BD.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/11.2.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/25.2.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>              
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </div>
  </Layout>
)

export default GalleryPage
