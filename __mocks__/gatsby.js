/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react');

const gatsby = jest.requireActual('gatsby');

// eslint-disable-next-line no-undef
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  Slice: jest.fn().mockImplementation(({ alias, ...rest }) =>
    React.createElement('div', {
      ...rest,
      'data-test-slice-alias': alias,
    })
  ),
  useStaticQuery: jest.fn(),
};
