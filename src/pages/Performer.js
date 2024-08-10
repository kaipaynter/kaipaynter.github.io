import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import bio from '../../static/Kai_Paynter.pdf'

const PerformerPage = () => (
  <Layout>
    <Helmet>
      <title>Kai Paynter - A Black Singer &#38; Much More!</title>
      <meta
        content="Performer"
        description="Kai Paynter Performer - Checkout my performance showcase as a Black 
        Singer, Black Hollywood Actress, Black Female Comedian, &#38; more. "
      />
      <link rel="canonical" href="https://kaipaynter.com/Performer" />
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
            alt="Kai Paynter bio"
          >
            <embed src={bio} type="application/pdf" />
          </object>
        </p>
        <p className="center">
          <iframe
            title="Blacklight Audition"
            src="https://player.vimeo.com/video/810811146?h=4dc78ad09d"
            width="640"
            height="450"
            frameborder="0"
            alt="Blacklight Audition"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>
        <p className="center">
          <iframe
            title="Disney Showcase Callback &amp; Wolf Like Me Audition"
            src="https://player.vimeo.com/video/589826181?h=da06cbe8cb"
            width="640"
            height="360"
            frameborder="0"
            alt="Disney Showcase Callback &amp; Wolf Like Me Audition"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>
        <p className="center">
          <iframe
            title="Singing"
            alt="Singing"
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
            title="Animation Reel"
            alt="Animation Reel"
            src="https://player.vimeo.com/video/675804641?h=f721eb48ee"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>
        <p className="center">
          <iframe
            title="VO"
            alt="VO"
            src="https://player.vimeo.com/video/591916308?h=cef5137802"
            width="640"
            height="450"
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
