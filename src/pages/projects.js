import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';

export const queryImage = graphql`
  query {
    propject1: file(relativePath: { eq: "gobarber.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project2: file(relativePath: { eq: "logo_quickcard.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project3: file(relativePath: { eq: "rocketshoes.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project4: file(relativePath: { eq: "hooks.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project5: file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project6: file(relativePath: { eq: "devradar.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Projects = ({ data }) => (
  <Layout>
    <SEO
      pageTitle="Projects"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, React Native, Front-end, developer, Html, Css"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Projects</Title>
      <p className="has-text-centered">
        Some of my featured projects, see more on my
        {' '}
        <a href="https://github.com/henrique770">
          GitHub
        </a>
        .
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="GoBarber"
            subtitle="Barber website build in GoStack Bootcamp rocketseat"
            link="https://github.com/henrique770/GoBarber"
            tags={['React', 'Node', 'Postgres', 'Sequelize', 'MongoDB']}
            image={<Img fixed={data.propject1.childImageSharp.fixed} alt="GoBarber" />}
          />
          <Card
            title="QuickCard"
            subtitle="Plataform to study, using methods like flashcards, notes, pomodoro"
            link="https://github.com/henrique770/QuickCard-Project"
            tags={['React', 'React Native', 'MongoDB', 'Node', 'Express']}
            image={<Img fixed={data.project2.childImageSharp.fixed} alt="QuickCard" />}
          />
          <Card
            title="Rocketshoes"
            subtitle="Shopping cart made with flux architecture"
            link="https://github.com/henrique770/Rocketshoes"
            tags={['React', 'React hooks', 'Redux', 'Json-server']}
            image={<Img fixed={data.project3.childImageSharp.fixed} alt="Rocketshoes" />}
          />
          <Card
            title="DevRadar"
            subtitle="App to show nearest developers based on geolocation"
            link="https://github.com/henrique770/DevRadar"
            tags={['React', 'React Native', 'Node', 'MongoDb']}
            image={<Img fixed={data.project6.childImageSharp.fixed} alt="DevRadar" />}
          />
          <Card
            title="React hooks project example"
            subtitle="Project using react hooks"
            link="https://github.com/henrique770/React-Hooks"
            tags={['React', 'React hooks']}
            image={<Img fixed={data.project4.childImageSharp.fixed} alt="React hooks project" />}
          />
          <Card
            title="Twitter page"
            subtitle="Clone page twitter using Flexbox css"
            link="https://github.com/henrique770/Clone-page-Twitter"
            tags={['Html', 'Css']}
            image={<Img fixed={data.project5.childImageSharp.fixed} alt="Clone page twitter" />}
          />
        </div>
      </div>
      <p className="has-text-centered">
        Check out my
        {' '}
        <Link to="/stack">Stack</Link>
        .
      </p>
    </section>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;
