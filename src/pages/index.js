import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import performerTile from '../assets/images/tiles/performerTile.jpeg'
import socialsTile from '../assets/images/tiles/socialsTile.jpeg'
import contactTile from '../assets/images/tiles/contactTile.jpeg'
import coachTile from '../assets/images/tiles/coachTile.jpeg'
import creativeTile from '../assets/images/tiles/creativeTile.jpeg'
import galleryTile from '../assets/images/tiles/galleryTile.jpeg'

import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Kai Paynter - A Famous Black Female Singer &#38; Much More!</title>
      <meta
        content="Home page"
        description="Kai Paynter - A famous black female simger &#38; Hollywood black female actress, I am all of them! Also see Paynter Performance and BearTiger Productions website to know more about my work"
      />
      <link rel="canonical" href="https://kaipaynter.com" />
    </Helmet>

    <div id="main">
      <div className="inner">
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={performerTile} alt="" />
            </span>
            <Link to="/Performer">
              <h2>Performer</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={coachTile} alt="" />
            </span>
            <Link
              to="https://paynterperformance.com"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Coach</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={creativeTile} alt="" />
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
              <img src={socialsTile} alt="" />
            </span>
            <Link to="/Socials">
              <h2>Socials</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={galleryTile} alt="" />
            </span>
            <Link to="/Gallery">
              <h2>Gallery</h2>
              <div className="content"></div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={contactTile} alt="" />
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
