import React from 'react';
import PropType from 'prop-types';

const Title = ({ children }) => (
  <>
    <h1 className="title has-text-centered ">{children}</h1>
    <hr className="hrstyle" />
  </>
);

Title.propTypes = {
  children: PropType.node.isRequired,
};

export default Title;
