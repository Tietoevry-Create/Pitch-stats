import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require(' react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

export default MyApp;
