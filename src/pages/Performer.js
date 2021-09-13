import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import bio from '../../static/Kai_Paynter.pdf'

const PerformerPage = () => (
  <Layout>
    <Helmet>
      <title>Kai Paynter - A Famous Black Female Singer &#38; Much More!</title>
      <meta
        content="Performer"
        description="Kai Paynter Performer - See my performance showcase as a famous black female singer, Hollywood black female actress, and from the black comedians from New York, &#38; more."
      />
      <link rel="canonical" href="https://kaipaynter.com/performer" />
    </Helmet>

    <div id="main">
      <div className="inner">
        <p className="center">
          <object
            data={bio}
            type="application/pdf"
            frameborder="1"
            scrolling="auto"
            height="650"
            width="700"
          >
            <embed src={bio} type="application/pdf" />
          </object>
        </p>
        <p className="center">
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

export default PerformerPage
