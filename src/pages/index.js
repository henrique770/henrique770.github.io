import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faLinkedin, faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Curriculo from '../assets/curriculum/curriculo.pdf';

const Home = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, React Native, Front-end, developer, Html, Css"
    />
    <figure className="photo image is-128x128">
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "hernique_photo.png" }) {
              childImageSharp {
                fixed(width: 128, height: 128) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            fixed={data.file.childImageSharp.fixed}
            imgStyle={{ borderRadius: '100%' }}
            alt="Henrique Araújo"
          />
        )}
      />
    </figure>
    <h1 className="title has-text-centered has-text-light">Henrique Araújo</h1>
    <h2 className="subtitle has-text-centered has-text-warning">Front-end developer</h2>
    <div className="has-text-centered icon_format">
      <a href="https://github.com/henrique770" aria-label="github">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://twitter.com/araujhenr" aria-label="twitter">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>
      <a href={Curriculo} aria-label="email">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faFilePdf} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/henrique47/" aria-label="linkedin">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
      <a href="https://codepen.io/yagame/pens/public" aria-label="codepend">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faCodepen} />
        </span>
      </a>
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title has-text-light typing-animation">
        Hello, I am Henrique Araújo!
        {' '}
        {/* <span role="img" aria-label="wave">
          👋
        </span> */}
      </h4>
      <p>
        {'I\'m a Front End Developer, currently study Information Systems and am almost completing my course. I like to improve every day, participate in events and development communities, it helps me in how I should act with the job market.'}
        <br />
        my email:

        <a href="mailto:henrique.1360@gmail.com"> henrique.1360@gmail.com</a>
      </p>
      <p>
        I develop projects using React, React Native and Node.
      </p>
      <p>
        Check out my
        {' '}
        <Link to="/projects">projects</Link>
        .
      </p>
    </section>
  </Layout>
);

export default Home;
