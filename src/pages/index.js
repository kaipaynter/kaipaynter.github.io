import React from 'react'
import Helmet from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Kai Paynter - A Black Hollywood Actress &#38; Much More!</title>
      <meta
        content="Home page"
        description="Kai Paynter - A Black Hollywood Actress &#38; Hollywood Producer, I am all of them! Also see Paynter Performance and BearTiger Productions website to know more about my work."
      />
      <link rel="canonical" href="https://kaipaynter.com" />
    </Helmet>

    <div id="main">
      <div className="inner">
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <StaticImage
                src="../assets/images/tiles/performerTile.jpeg"
                alt="Performer Tile"
                placeholder="blurred"
              />
            </span>
            <Link to="/Performer">
              <h2>Performer</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <StaticImage
                src="../assets/images/tiles/coachTile_3.jpg"
                alt="Coach Tile"
                placeholder="blurred"
              />
            </span>
            <Link
              to="https://paynterperformance.com"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Facilitator</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <StaticImage
                src="../assets/images/tiles/creativeTile_3.jpeg"
                alt="Creative Tile"
                placeholder="blurred"
              />
            </span>
            <Link
              to="https://beartigerproductions.com"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Creative</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <StaticImage
                src="../assets/images/tiles/socialsTile_2.jpeg"
                alt="Socials Tile"
                placeholder="blurred"
              />
            </span>
            <Link to="/Socials">
              <h2>Socials</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <StaticImage
                src="../assets/images/tiles/galleryTile.jpeg"
                alt="Gallery Tile"
                placeholder="blurred"
              />
            </span>
            <Link to="/Gallery">
              <h2>Gallery</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <StaticImage
                src="../assets/images/tiles/contactTile_3.jpeg"
                alt="Contact Tile"
                placeholder="blurred"
              />
            </span>
            <Link to="/Contact">
              <h2>Contact</h2>
              <div className="content"></div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
