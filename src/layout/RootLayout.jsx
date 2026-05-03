import React from 'react';
import Header from '../component/shared/header/Header';
import { Outlet } from 'react-router';
import Footer from '../component/shared/footer/Footer';

const RootLayout = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className='flex-grow"'>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

export default RootLayout;