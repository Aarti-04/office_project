'use client';
import React from 'react';
import Login from '../components/login';
import Logout from '../components/logout';
import Header from '../components/header';
import SideBar from '../components/sdiebar';
import MainTopBar from '../components/appbar';
import ResponsiveDrawer from '../components/sdiebar';
import SwipeableTemporaryDrawer from '../components/sdiebar';
import GmailDashboard from '../components/gmaildashboard';

const Dashboard = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="flex  min-h-screen flex-col items-center justify-between bg-slate-300 p-24">
        {/* <h1 className="bg-orange-600">Welcome</h1> */}
        {/* <MainTopBar></MainTopBar> */}
        {/* <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer> */}
        <GmailDashboard></GmailDashboard>
      </div>
    </div>
  );
};

export default Dashboard;

