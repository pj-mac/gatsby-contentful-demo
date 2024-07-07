import React from 'react';

function Header() {
  return (
    <header>
      <div className="flex items-center mt-2 mb-4">
        <h1 className="ml-auto">Example Gatsby-Contentful Site</h1>
        <a href="https://github.com/pj-mac/gatsby-contentful-demo/" className="ml-auto mr-4">
          <img src="/images/github-mark.svg" alt="View source on GitHub" className="w-[30px] md:w-[40px]" />
        </a>
      </div>

      <p className="text-center">
        This is an example of using Gatsby and Contentful to build a basic starter website. See{' '}
        <a href="https://github.com/pj-mac/gatsby-contentful-demo/">GitHub</a> for source code.
      </p>
    </header>
  );
}

export default Header;
