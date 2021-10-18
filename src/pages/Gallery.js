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
        famous Black Singer &#38; Black Female Comedian, &#38; more. "
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
                  src="../assets/images/Gallery/imageJ.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageG.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageD.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                .
                <StaticImage
                  src="../assets/images/Gallery/imageC.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageH.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageB.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageF.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageI.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageK.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageA.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageL.jpg"
                  alt=""
                  placeholder="blurred"
                />
              </figure>
              <figure className="wave">
                <StaticImage
                  src="../assets/images/Gallery/imageE.jpg"
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
