import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout(props: any) {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
