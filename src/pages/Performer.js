import React from 'react'

import Layout from '../components/Layout'

import bio from '../../static/Kai_Paynter.pdf'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <p className="center">
          <object
            data={bio}
            type="application/pdf"
            frameborder="1"
            scrolling="auto"
            height="600"
            width="700"
          >
            <embed src={bio} type="application/pdf" />
          </object>

          <iframe
            title="Disney Showcase"
            src="https://player.vimeo.com/video/589826181?h=da06cbe8cb"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>

          <iframe
            title="Singing"
            src="https://player.vimeo.com/video/595768151?h=a3ef938589"
            width="640"
            height="450"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>

        <p className="center">
          <iframe
            title="VO"
            src="https://player.vimeo.com/video/591916308?h=cef5137802"
            width="640"
            height="960"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
