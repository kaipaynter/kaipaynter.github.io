import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import '../assets/css/gallery.css'
/* import imageA from '../assets/images/Gallery/imageA.jpg'
import imageB from '../assets/images/Gallery/imageB.jpg'
import imageC from '../assets/images/Gallery/imageC.jpg'
import imageD from '../assets/images/Gallery/imageD.jpg'
import imageE from '../assets/images/Gallery/imageE.jpg'
import imageF from '../assets/images/Gallery/imageF.jpg'
import imageG from '../assets/images/Gallery/imageG.jpg'
import imageH from '../assets/images/Gallery/imageH.jpg'
import imageI from '../assets/images/Gallery/imageI.jpg'
import imageJ from '../assets/images/Gallery/imageJ.jpg'
import imageK from '../assets/images/Gallery/imageK.jpg'
import imageL from '../assets/images/Gallery/imageL.jpg' */

const GalleryPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        {/* <h1>Gallery</h1> */}

        <div className="container">
          <SimpleReactLightbox>
            <SRLWrapper>
              <figure className="wave">
                {/* <img src={imageJ} alt=""></img> */}
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
              <figure className="wave">.

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
                {/* <figcaption>This is a caption</figcaption> */}
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
