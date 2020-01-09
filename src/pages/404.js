import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO Title="404: Not Found" />
    <section className="section">
      <h1 className="title has-text-centered">
        404: Not Found
      </h1>
      <hr />
      <p className="has-text-centered">
        You just hit a route that does not exists.
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
