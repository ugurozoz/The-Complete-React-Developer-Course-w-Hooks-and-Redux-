import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>Something went wrong</h1>
    <p>
      Try{' '}
      <Link href='/'>
        <a>going back</a>
      </Link>
    </p>
    <button onClick={() => Router.push('/')}>Back to main page</button>
  </div>
);

export default errorPage;
