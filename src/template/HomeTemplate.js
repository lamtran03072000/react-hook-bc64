import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default HomeTemplate;
