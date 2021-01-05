import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from 'components/Title';

const Stack = () => (
  <Layout>
    <SEO
      pageTitle="Stack"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, React Native, Front-end, developer, Html, Css"
    />
    <Helmet />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Stack</Title>
      <div className="has-text-centered">
        <p className="content">
          I have experience with many tools, I select them for my projects
          depending on the usage.
        </p>
        <p className="content">Here is my stack on StackShare:</p>
        <div className="columns is-centered">
          <div className="column is-half">
            <a href="https://stackshare.io/henrique770/my-stack">StackShare</a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;
