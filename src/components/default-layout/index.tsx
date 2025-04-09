import React from 'react';
import { Html } from '@react-email/components';
import Header from './../header/index.js';
import Footer from './../footer/index.js';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <Html>
      <Header />
      {children}
      <Footer />
    </Html>
  );
}

export default DefaultLayout