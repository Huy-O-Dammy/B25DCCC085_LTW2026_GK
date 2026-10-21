import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = ({ loading, error }) => {
  return (
    <div className="container">
      <NavBar />
      {loading ? (
        <div className="status-msg">Đang tải...</div>
      ) : error ? (
        <div className="status-msg">Không tải được dữ liệu.</div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;
