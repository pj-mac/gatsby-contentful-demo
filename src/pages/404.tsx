import { HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Layout from '../components/Layout';

function NotFoundPage() {
  return (
    <Layout>
      <h1 className="mb-4 text-center">404: Not Found</h1>
      <div className="my-2 flex">
        <a href="/" className="flex m-auto gap-2 text-2xl">
          <HomeIcon fill="black" className="w-[25px]" />
          HOME
        </a>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
